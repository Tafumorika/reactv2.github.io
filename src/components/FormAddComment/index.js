import React, {Component} from 'react';
import './style.css';
import {Button} from "../Button";


class FormAddComment extends Component {
    state = {
        myForm: {
            id: '',
            level:'',
            img:  '',
            name: '',
            text: '',
            date: ''
        }
    };


    submitForm = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.changeCounter(this.state.myForm);
    };


    addChange =(event) => {
        console.log(event.target.name);
        this.setState({myForm: {...this.state.myForm, [event.target.name]: event.target.value}})
    };

    render() {
        const img = this.state.img;
        const name = this.state.name;
        const text = this.state.text;
        const date = this.state.date;

        return (
            <div className="form-div">
                <h3>Add a Comment</h3>
                <form method="form-AddComment" onSubmit={this.submitForm}>
                    <label className="label-form" htmlFor="text">Comment:</label>
                    <textarea className="textarea-form" value={text} onChange={this.addChange} id="text" name="text" required={false}/>
                    <label className="label-form" htmlFor="name">Name:</label>
                    <input className="input-form" type="text" value={name} onChange={this.addChange} id="name" name="name" required={false}/>
                    <label className="label-form" htmlFor="date">Date:</label>
                    <input className="input-form" type="date" value={date} onChange={this.addChange} id="date" name="date" required={false}/>
                    <label className="label-form" htmlFor="img">Photo</label>
                    <input className="input-form" type="text" value={img} onChange={this.addChange} id="img" name="img"/>

                    {/*{this.state.counter}*/}
                    <Button value="add"/>

                </form>
            </div>
        )
    }
}

export {FormAddComment}