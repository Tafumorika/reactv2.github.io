import React from 'react';
import './style.css';

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
                <div className="buttons">
                    <input className="submit-red" type="submit" value="Add Comment"/>
                </div>
            </form>
        </div>
    )
}
export {FormAddComment}