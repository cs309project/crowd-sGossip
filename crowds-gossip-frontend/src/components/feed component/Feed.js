import React, { useState } from 'react'
import Post from '../post component/Post'

function Feed() {
    const [posts, setPosts] = useState(dummyPosts)

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


//this is a dummy data to test how the feed will look like
const dummyPosts = [
    {
        profileIcon: 'https://4.bp.blogspot.com/-klQjV5L27_s/T73fozhXluI/AAAAAAAAAkI/_75K0D7Hpqw/s1600/smiley-face2.jpg',
        authorName: 'Test User 1',
        text: 'This is a test post',
        comments: [
            {
                username: 'Youssef 3ala2',
                text: 'Hello people'
            },
            {
                username: 'Youssef Salah',
                text: 'Hello humans'
            },
            {
                username: 'Youssef Salah',
                text: 'Hello humans'
            }
        ]
    },
    {
        profileIcon: 'https://4.bp.blogspot.com/-klQjV5L27_s/T73fozhXluI/AAAAAAAAAkI/_75K0D7Hpqw/s1600/smiley-face2.jpg',
        authorName: 'Test User 2',
        text: 'Posting dummy data',
        comments: []
    },
    {
        profileIcon: 'https://4.bp.blogspot.com/-klQjV5L27_s/T73fozhXluI/AAAAAAAAAkI/_75K0D7Hpqw/s1600/smiley-face2.jpg',
        authorName: 'Test User 3',
        text: 'Rumors...... 😁',
        comments: []
    }
]

export default Feed