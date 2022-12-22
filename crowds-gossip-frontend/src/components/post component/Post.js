import './Post.css'
import React, { useState } from 'react';
import Comment from '../comment-component/Comment'
import Voting from '../voting component/Voting';
function Post({ profileIcon, authorName, text, photoLink, comments }) {
    const [commentText, setCommentText] = useState('')
    const change = (e) => {
        setCommentText(e.target.value)
    }
    const addComment = () => {

    }
    return (
        <div className={'container'}>
            <div className='div-to-flex'>
                <div className='content'>
                    <div className={'author-container'}>
                        <img src={profileIcon} alt={""} />
                        <p>{authorName}</p>
                    </div>
                    <div className={'text-container'}>
                        <p>{text}</p>
                    </div>
                    <div className={'image-container'}>
                        <img src={photoLink}
                            alt={""} />
                    </div>
                </div>
                <div className='voting'>
                    <Voting upVoters={[]} downVoters={[]} />
                </div>
            </div>
            <div className={'comments'}>
                <p style={{ fontWeight: 'bold' }}>Comments</p>
                <hr />
                <div style={{ display: 'flex' }}>
                    <img src={profileIcon} alt={""} />
                    <input placeholder={'write a comment'} onChange={change} />
                    <button className={'comment-button'} onClick={addComment}>comment</button>
                </div>
                {comments.map((value, index) => {
                    return <Comment
                        text={value.text}
                        userName={value.username}
                        profilePic={value.profilePic}
                        key={index} />
                })}
            </div>
        </div>
    );
}

export default Post;