import './Post.css'
import React, {useState} from 'react';
import Comment from '../comment-component/Comment'
function Post({profileIcon,authorName,text,photoLink,comments}) {
    const [commentText, setCommentText] = useState('')
    const change = (e)=>{
        setCommentText(e.target.value)
    }
    const addComment = ()=>{

    }
    return (
        <div className={'container'}>
            <div className={'author-container'}>
                <img src={profileIcon} alt={""}/>
                <p>{authorName}</p>
            </div>
            <div className={'text-container'}>
                <p>{text}</p>
            </div>
            <div className={'image-container'}>
                <img src={photoLink}
                alt={""}/>
            </div>
            <div className={'comments'}>
                <div style={{display:'flex'}}>
                    <input placeholder={'write a comment'} onChange={change}/>
                    <button className={'comment-button'} onClick={addComment}>comment</button>
                </div>
                <hr/>

                {comments.map((value)=>{<Comment text={value.text} userName={value.username}/>})}
            </div>
        </div>
    );
}

export default Post;