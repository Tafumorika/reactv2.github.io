import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import {Comment} from '../Comment';
import {Loading} from '../Loading';
import {wait} from '../../helpers/functions';


class CommentList extends React.Component {

    componentDidMount() {
        console.log('im here!', this.props);
        this.props.commentListRequestStart();
        fetch('/commentList.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                return wait(2000).then(() => data);
            })
            .then((commentList) => {
                console.log(commentList);
                this.props.commentListRequestSuccess(commentList)
            })
            .catch( function (error) {
                console.log("Error" + error.message);
                this.props.commentListRequestFailed();
            })
    }


    render() {
        const {myCommentList, addReplyId} = this.props;
        if (this.props.fetching === true)
        {
            // return ('Loading...')
            return (<Loading/>)
        }
        const commentsList = Object.keys(myCommentList)
            .filter((key) => {
                const item = myCommentList[key];
                return item.level === 1;
            })

            .map((key, index) => {
                const item = myCommentList[key];
                // TODO: склеить массив children и текущий id
                return [key].concat(
                    item.children
                        .map((childKey) => {
                            const childItem = myCommentList[childKey];
                            return [childKey].concat(childItem.children);
                        })
                        .reduce((childSum, childKey) => {
                            return childSum.concat(childKey);
                        }, [])
                );
            })
            .reduce((sum, keys) => {
                // TODO: склеить все массивы в 1
                return sum.concat(keys);
            }, []);
        return (
            <nav className="commentsList">
                <h3>{commentsList.length} Comments</h3>
                {commentsList.map((key, index) => {
                    const item = myCommentList[key];

                    return (
                        <div key={item.id} className={'comment-level-' + item.level}>
                            {index === 0 ? '' : <hr/>}
                            <Comment addReplyId={addReplyId} id={item.id} img={item.img} name={item.name}
                                     text={item.text} date={item.date}/>
                        </div>
                    )
                })}
            </nav>
        )

    }
}

CommentList.propTypes = {
    myCommentList: PropTypes.objectOf(PropTypes.shape({
        id: PropTypes.string,
        img: PropTypes.string,
        name: PropTypes.string,
        text: PropTypes.string
    })),
    addReplyId: PropTypes.func,
    commentListRequestStart:  PropTypes.func,
    commentListRequestSuccess:  PropTypes.func,
    commentListRequestFailed:  PropTypes.func
};


export {CommentList}