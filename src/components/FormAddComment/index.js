import React from 'react';
import './style.css';

const FormAddComment = () => {
    return(
        <div className="form-div">
            <form method="post">
                <label htmlFor="comment">Comment:</label>
                <textarea id="comment" name="comment" required/>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required/>
                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" name="email" required/>
                <label htmlFor="website">Website:</label>
                <input type="text" id="website" name="website"/>
                <div className="buttons">
                    <input className="submit-red" type="submit" value="Add Comment"/>
                </div>
            </form>
        </div>
    )
}
export {FormAddComment}