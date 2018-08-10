import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import {Comment} from '../Comment';





class CommentList extends React.Component {
    render() {

        const commentsList = this.props.myCommentList.map(function (item, index) {
            return (
                <div key={item.id} className={'comment-level-' + item.level}>
                    {index === 0 ? '' : <hr/>}
                    <Comment img={item.img} name={item.name} text={item.text} date={item.date}/>
                </div>
            )
        });

        return (
            <nav className="commentsList">
                {commentsList}
            </nav>
        )
    }
}

CommentList.propTypes ={
    myCommentList: PropTypes.arrayOf(PropTypes.shape({
        img: PropTypes.string,
        name: PropTypes.string,
        text: PropTypes.string
    }))
};


 export {CommentList}