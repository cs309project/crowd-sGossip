import React from 'react';
import './Comment.css'
function Comment({ userName, text, profilePic }) {
    return (
        <div className='comment-container'>
            <img
                src={profilePic}
                alt=''
            />
            <div className='comment-content'>
                <p id={'user'}>{userName}</p>
                <p className='comment'>{text}</p>
            </div>

        </div>
    );
}

export default Comment;