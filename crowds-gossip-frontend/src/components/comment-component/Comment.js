import React, {useState , useEffect} from 'react';
import { getById } from '../../API/User';
import './Comment.css'
function Comment({ commenterId, text, profilePic }) {

    const [commenter, setCommenter] = useState('')

    useEffect(() => {
        
        async function setCommenterName(){
            await getById(commenterId.toString()).then(e => {
                setCommenter(e.name)
            })
        }
        setCommenterName()
    
    }, [])
    
    return (
        <div className='comment-container'>
            <img
                src={profilePic}
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