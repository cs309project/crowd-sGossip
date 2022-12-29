import React, { useEffect, useState } from 'react';
import './ConfirmPostDelete.css'

function ConfirmPostDelete({ onClose, show, actionDelete, postText, actionSave, setEditText, editText }) {
    const [shown, setShown] = useState(false);

    useEffect(() => {
        setShown(show)
    }, [show])

    useEffect(() => {
      if (postText) {
        setEditText(postText)
      }
    }, [postText])
    
    return (
        <div
            style={{
                visibility: shown ? "visible" : "hidden",
                opacity: shown ? "1" : "0"
            }}
            className={'overlay'}
        >
            <div className={'popup'}>
                <h2>Edit post</h2>
                <input
                    placeholder='Edit your post text'
                    onChange={e => setEditText(e.target.value)}
                    value={editText}
                />
                <div className='confirmDelete'>
                    <button className='ac' onClick={actionDelete}>Delete post</button>
                    <button className='dc' onClick={actionSave}>Save changes</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmPostDelete;