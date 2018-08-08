import React, {Component} from 'react';
import './style.css';
import {Button} from "../Button";

class FormAddComment extends Component {
    // state = {
    //     counter: 0,
    // };

    // buttonClick = () => {
    //     console.log('click 2');
    //     this.setState({
    //         counter: this.state.counter + 1,
    //     });
    // }

    submitForm = () => {
        this.props.changeCounter({
            dasdas: 3123,
        });
    }

    render() {
        return (
            <div className="form-div">
                <h3>Add a Comment</h3>
                <form method="form-AddComment" onSubmit={1}>
                    <label className="label-form" htmlFor="comment">Comment:</label>
                    <textarea className="textarea-form" id="comment" name="comment" required/>
                    <label className="label-form" htmlFor="name">Name:</label>
                    <input className="input-form" type="text" id="name" name="name" required/>
                    <label className="label-form" htmlFor="email">Email Address:</label>
                    <input className="input-form" type="email" id="email" name="email" required/>
                    <label className="label-form" htmlFor="website">Website:</label>
                    <input className="input-form" type="text" id="website" name="website"/>

                    {/* TODO: кнопку в отдельный компонент. <input> заменить на <buton> */}
                    {/*{this.state.counter}*/}
                    <Button onClick={this.submitForm }/>

                </form>
            </div>
        )
    }
}

export {FormAddComment}