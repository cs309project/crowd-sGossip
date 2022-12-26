import React, { useEffect, useState } from 'react'
import { getById } from '../../API/User.js';
import Post from '../post component/Post'
import './PostsList.css'

function PostsList({currentUser, Posts }) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        setPosts(Posts);
    }, [Posts]);

    return (
        <div className='feed-container'>
            {
                posts && posts.length? posts.map((e, index) => {
                    return (
                        <div className='post-container' key={index}>
                            <Post currentUser={currentUser} postID={e} />
                        </div>
                    );
                }):null
            }
        </div>
    )
}

export default PostsList