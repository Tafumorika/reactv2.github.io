import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.css';
import {Link} from "../Link/index";


class Comment extends Component {

    addReplyId = () => {
        console.log(this.props.addReplyId);
        this.props.addReplyId(this.props.id)
       ;
    };

    render () {
        const {img, name, text, date} = this.props;
        console.log(this.props);

        return (<div  className="comment">
                <img alt="avatar" src={img} className="comment-avatar"/>
                <p className="comment-style name-comment"><Link href="#link5">{name}</Link></p>
                <p className="comment-style text-comment">{text}</p>
                <p className="comment-style date-comment">{date}<Link href="#link6" onClick={this.addReplyId} >Reply</Link></p>
            </div>
        );
    }
};

Comment.propTypes = {
    addReplyId: PropTypes.func,
    id: PropTypes.string,
    img: PropTypes.string,
    name:PropTypes.string,
    text:PropTypes.string,
    date:PropTypes.string
};

export {Comment}

