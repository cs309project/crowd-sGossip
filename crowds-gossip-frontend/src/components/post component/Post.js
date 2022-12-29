import './Post.css'
import React, { useState, useEffect, useRef } from 'react';
import Comment from '../comment-component/Comment'
import Voting from '../voting component/Voting';
import { addComment, deletePost, editPost, getPostsById } from '../../API/Post.js';
import { getById, } from '../../API/User';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ConfirmPostDelete from './post confirm delete/ConfirmPostDelete';

function Post({ postID }) {

    const [commentText, setCommentText] = useState('')
    const [post, setPost] = useState("")
    const [authorName, setAuthorName] = useState("")
    const [text, setText] = useState("")
    const [comments, setComments] = useState([])
    const [profileIcon, setProfileIcon] = useState('')
    const [photoLink, setPhotoLink] = useState('')
    const [updated, setUpdated] = useState(false)
    const [visibility, setVisibility] = useState(false);
    const [currentUser, setCurrentUser] = useState('')
    const [editText, setEditText] = useState('')
    const ref = useRef(null)

    const popupCloseHandler = () => {
        setVisibility(false);
    };

    const change = (e) => {
        setCommentText(e.target.value)
    }

    const handleAddComment = async () => {
        await addComment({ _id: postID, comment: commentText })
        setUpdated(!updated)
        ref.current.value = ""
    }

    const actionDelete = async () => {
        await deletePost(post._id)
        setVisibility(false)
    }

    const actionSave = async () => {
        await editPost({_id: post._id.toString(), content: editText})
        setVisibility(false)
    }

    const showPopup = () => {
        if (JSON.stringify(currentUser._id) === JSON.stringify(post.author)) {
            setVisibility(true)
        }
    }

    useEffect(() => {
        if (postID) {
            async function getPost() {
                setPost(await getPostsById({ _id: postID.toString() }))
            }
            getPost()
        }
    }, [postID, updated])

    useEffect(() => {
        if (post) {
            async function setPostData() {
                setText(post.content)
                setEditText(post.content)
                setComments(post.comments)
                await getById(post.author.toString()).then(e => {
                    setAuthorName(e.name)
                    setProfileIcon(e.photo)
                })
                await getById().then(e => {
                    setCurrentUser(e)
                })
            }
            setPostData()
        }
    }, [post])


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
                    <MoreHorizIcon
                        onClick={showPopup}
                    />
                    <Voting
                        upVoters={post.upVoters}
                        downVoters={post.downVoters}
                        _id={postID}
                        updated={updated}
                        setUpdated={setUpdated}
                    />
                </div>
            </div>
            <div className={'comments'}>
                <p style={{ fontWeight: 'bold' }}>Comments</p>
                <hr />
                <div style={{ display: 'flex' }}>
                    <img src={profileIcon} alt={""} />
                    <input placeholder={'write a comment'} ref={ref} onChange={change} />
                    <button className={'comment-button'} onClick={handleAddComment}>comment</button>
                </div>
                {
                    comments && comments.length ? comments.map((value, index) => {
                        return <Comment
                            text={value.comment}
                            commenterId={value.commenter}
                            key={index} />
                    }) : null
                }
            </div>
            <ConfirmPostDelete
                onClose={popupCloseHandler}
                show={visibility}
                actionDelete={actionDelete}
                postText={text}
                actionSave={actionSave}
                setEditText={setEditText}
                editText={editText}
            />
        </div>
    );
}

export default Post;