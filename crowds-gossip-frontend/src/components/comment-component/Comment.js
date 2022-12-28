import React, {useState , useEffect} from 'react';
import { getById } from '../../API/User';
import './Comment.css'
function Comment({ commenterId, text }) {

    const [commenter, setCommenter] = useState('')
    const [image , setImage] = useState('')

    useEffect(() => {
        
        async function setCommenterName(){
            await getById(commenterId.toString()).then(e => {
                setCommenter(e.name)
                setImage(e.photo)
            })
        }
        setCommenterName()
    
    }, [])
    
    return (
        <div className='comment-container'>
            <img
                src={image}
                alt=''
            />
            <div className='comment-content'>
                <p id={'user'}>{commenter}</p>
                <p className='comment'>{text}</p>
            </div>

        </div>
    );
}

export default Comment;