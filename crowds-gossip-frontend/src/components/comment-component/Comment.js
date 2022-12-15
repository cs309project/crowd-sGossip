import React from 'react';
import './Comment.css'
function Comment({userName,text}) {
    return (
        <div>
            <p id={'user'}>{userName}</p>
            <p>{text}</p>
        </div>
    );
}

export default Comment;