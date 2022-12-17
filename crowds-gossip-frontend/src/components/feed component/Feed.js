import React, { useState } from 'react'
import Post from '../post component/Post'

function Feed() {
    const [posts, setPosts] = useState([])

    return (
        <div className='feed-container'>
            {
                posts.map((e, index) => {
                    return (
                        <div key={index}>
                            <Post profileIcon={e.profileIcon} authorName={e.authorName} text={e.text} comments={e.comments}/>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Feed