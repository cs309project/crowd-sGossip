import React, { useEffect, useState } from 'react';
import './Confirm.css'

function Confirm({ onClose, show, deleteMessage, chatId, socket }) {
    const [shown, setShown] = useState(false);
    const [msg, setMsg] = useState(deleteMessage)

    const closeHandler = () => {
        setShown(false);
        onClose(false);
    };

    const handleDelete = () => {
        socket.emit('deleteMessage', {
            _id: chatId,
            sender: deleteMessage.sender,
            time: deleteMessage.time
        })
        closeHandler()
    }

    useEffect(() => {
        setShown(show)
    }, [show])

    useEffect(() => {
        if (deleteMessage) {
            setMsg(deleteMessage)
        }
    }, [deleteMessage])

    return (
        <div
            style={{
                visibility: shown ? "visible" : "hidden",
                opacity: shown ? "1" : "0"
            }}
            className={'overlay'}
        >
            <div className={'popup'}>
                <h2>Do you want to delete "{msg.message}" message</h2>
                <div className='confirmDelete'>
                    <button className='ac' onClick={handleDelete}>Yes</button>
                    <button className='dc' onClick={closeHandler}>No</button>
                </div>
            </div>
        </div>
    );
}

export default Confirm;