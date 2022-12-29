import React, { useEffect, useState } from 'react';
import { deleteComment } from '../../../API/Post';
import './CommentDeleteConfirm.css'

function CreatePostPopUp(props) {
    const [show, setShow] = useState(false);

    const closeHandler = (e) => {
        setShow(false);
        props.onClose(false);
    };

    const handleDelete = async (e) => {
        await deleteComment({ _id: props.postID.toString(), time: props.time })
        closeHandler(e)
        props.setUpdated(!props.updated)
    }

    useEffect(() => {
        setShow(props.show);
    }, [props.show]);
    return (
        <div
            style={{
                visibility: show ? "visible" : "hidden",
                opacity: show ? "1" : "0"
            }}
            className={'overlay'}
        >
            <div className={'popup'}>
                <h2>Do you want to delete "{props.comment}" comment?</h2>
                <div className='confirmPost'>
                    <button className='ac' onClick={handleDelete}>Yes</button>
                    <button className='dc' onClick={(e) => closeHandler(e)}>No</button>
                </div>
            </div>
        </div>
    );
}

export default CreatePostPopUp;