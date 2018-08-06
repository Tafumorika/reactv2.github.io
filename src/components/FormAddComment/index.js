import React from 'react';
import './style.css';
import {Button} from "../Button";

const FormAddComment = () => {
    return(
        <div className="form-div">
            <h3>Add a Comment</h3>
            <form method="form-AddComment">
                <label className="label-form" htmlFor="comment">Comment:</label>
                <textarea className="textarea-form" id="comment" name="comment" required/>
                <label className="label-form" htmlFor="name">Name:</label>
                <input className="input-form" type="text" id="name" name="name" required/>
                <label className="label-form" htmlFor="email">Email Address:</label>
                <input className="input-form"  type="email" id="email" name="email" required/>
                <label className="label-form" htmlFor="website">Website:</label>
                <input className="input-form" type="text" id="website" name="website"/>

                    {/* TODO: кнопку в отдельный компонент. <input> заменить на <buton> */}
                    <Button/>

            </form>
        </div>
    )
}
export {FormAddComment}