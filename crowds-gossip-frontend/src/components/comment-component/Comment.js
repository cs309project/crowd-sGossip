import React, { useState, useEffect } from 'react';
import { getById } from '../../API/User';
import CommentDeleteConfirm from './comment delete confirm/CommentDeleteConfirm';
import './Comment.css'
function Comment({ commenterId, text, postID, time, updated, setUpdated }) {

    const [commenter, setCommenter] = useState('')
    const [image, setImage] = useState('')
    const [visibility, setVisibility] = useState(false)

    const popupCloseHandler = () => {
        setVisibility(false)
    }

    useEffect(() => {

        async function setCommenterName() {
            await getById(commenterId.toString()).then(e => {
                setCommenter(e.name)
                setImage(e.photo)
            })
        }
        setCommenterName()

    }, [])

    return (
        <div className='comment-container' onClick={() => setVisibility(true)}>
            <img
                src={image}
                alt=''
            />
            <div className='comment-content'>
                <p id={'user'}>{commenter}</p>
                <p className='comment'>{text}</p>
            </div>
            <CommentDeleteConfirm 
                onClose={popupCloseHandler}
                show={visibility}
                postID={postID}
                comment={text}
                time={time}
                commenter={commenterId}
                updated={updated}
                setUpdated={setUpdated}
            />
        </div>
    );
}

export default Comment;