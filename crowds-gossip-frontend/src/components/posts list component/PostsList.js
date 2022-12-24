import React, { useState } from 'react'
import Post from '../post component/Post'
import './PostsList.css'

function PostsList({ Posts }) {
    const [posts, setPosts] = useState(Posts)

    return (
        <div className='feed-container'>
            {
                posts.map((e, index) => {
                    return (
                        <div className='post-container' key={index}>
                            <Post profileIcon={e.profileIcon} authorName={e.authorName} text={e.text} comments={e.comments} photoLink={e.photoLink} />
                        </div>
                    );
                })
            }
        </div>
    )
}

export default PostsList