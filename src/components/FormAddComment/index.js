import React, {Component} from 'react';
import './style.css';
import {Button} from "../Button";
import {imgList} from "../../constants/images";
import PropsTypes from 'prop-types';
import {addReplyId} from "../../actions/comments";

function getInitialvelues () {
    return {
        level: 1,
        img:  imgList.comment1,
        name: '',
        text: '',
        date: '',
        children: []
    }
}
class FormAddComment extends Component {
    static propTypes = {
        addComment: PropsTypes.func,
        replyId: PropsTypes.string,
        addReplyId: PropsTypes.func
    };
    state = {
        myFormList: getInitialvelues()

    };

    submitForm = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.addComment(this.state.myFormList, this.props.replyId);
        this.setState({myFormList: getInitialvelues()
        });
        this.props.addReplyId(null);
    };


    addChange =(event) => {
        console.log(event.target.name, event.target.value);
        this.setState({myFormList: {...this.state.myFormList, [event.target.name]: event.target.value}})
    };
    cancelReply =() => {
        console.log(this.props.addReplyId);
        this.props.addReplyId(null);

    };


    render() {

        const {img, name, text, date} = this.state.myFormList;

        return (
            <div className="form-div">
                <br/>
                <h3>Add a Comment</h3>
                <form method="form-AddComment" onSubmit={this.submitForm}>
                    <label className="label-form" htmlFor="text">Comment:</label>
                    <textarea className="textarea-form" value={text} onChange={this.addChange} id="text" name="text" required/>
                    <label className="label-form" htmlFor="name">Name:</label>
                    <input className="input-form" type="text" value={name} onChange={this.addChange} id="name" name="name" required/>
                    <label className="label-form" htmlFor="date">Date:</label>
                    <input className="input-form" type="date" value={date} onChange={this.addChange} id="date" name="date" required/>
                    <label className="label-form" htmlFor="img">Photo</label>
                     <select className="form-list" id="img" name="img" value={img} onChange={this.addChange} >
                         {Object.values(imgList).map(function (key) {
                             return (<option key={key} value={key}>{key}</option>)
                             }
                         )}
                     </select>
                    <br/>

                    <img alt="form-avatar" className="form-avatar" src={img}/>
                <br/>
                    <Button type='submit'>Add Comment</Button>
                    <br/>
                    {(this.props.replyId === null) ? null :
                        (<Button type='button' onClick={this.cancelReply}>Cancel Reply</Button>)
                    }
                </form>
            </div>
        )
    }
}

export {FormAddComment}