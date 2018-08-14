import React, {Component} from 'react';
import './style.css';
import {Button} from "../Button";
import {imgList} from "../../constants/images";

function getInitialvelues () {
    return {
        id: '',
        level:'',
        img:  imgList.comment1,
        name: '',
        text: '',
        date: ''
    }
}
class FormAddComment extends Component {
    state = {
        myFormList: getInitialvelues()

    };

    submitForm = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.changeComment(this.state.myFormList);
        this.setState({myFormList: getInitialvelues()
        });
    };


    addChange =(event) => {
        console.log(event.target.name, event.target.value);
        this.setState({myFormList: {...this.state.myFormList, [event.target.name]: event.target.value}})
    };

    render() {

        const {img, name, text, date} = this.state.myFormList;

        return (
            <div className="form-div">
                <br/>
                <h3>Add a Comment</h3>
                <form method="form-AddComment" onSubmit={this.submitForm}>
                    <label className="label-form" htmlFor="text">Comment:</label>
                    <textarea className="textarea-form" value={text} onChange={this.addChange} id="text" name="text" required={false}/>
                    <label className="label-form" htmlFor="name">Name:</label>
                    <input className="input-form" type="text" value={name} onChange={this.addChange} id="name" name="name" required={false}/>
                    <label className="label-form" htmlFor="date">Date:</label>
                    <input className="input-form" type="date" value={date} onChange={this.addChange} id="date" name="date" required={false}/>
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
                    <Button/>
                </form>
            </div>
        )
    }
}

export {FormAddComment}