import React from 'react'
import './UserPage.css'
import CreatePost from '../../components/create post component/CreatePost.js'
import Feed from '../../components/feed component/Feed.js'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Header from '../../components/header-component/Header';
import SidePanel from '../../components/Side-Panel-component/SidePanel.js';

async function handleEditProfileButton() {

}

const dummyPosts = []

function UserPage({ profileIcon, userName, followers }) {
    return (
        <div className='Contanier'>
            <div className='HeaderView'>
                <Header />
            </div>
            <div className='Side-left-panel'>
                <SidePanel profileIcon={profileIcon} userName={userName} />
            </div>
            <div className='Body'>
                <div className='ProfileView'>
                    <div className='Img-Info_View'>
                        <img
                            src={profileIcon}
                            alt={""}></img>
                        <div className='UserInfo'>
                            <p id='Name'>{userName}</p>
                            <p id='Friends'>{followers} friends</p>
                        </div>
                    </div>
                    <button className='EditProfileButton' onClick={() => handleEditProfileButton()}>
                        <EditOutlinedIcon className='EditIcon' />
                        <p>Edit profile</p>
                    </button>
                </div>
                <div className='UserProfileContent'>
                    <div className='CreatePostView'>
                        <p>Create a Post: </p>
                        <CreatePost profileIcon={profileIcon} />
                    </div>
                    <div className='FeedView'>
                        <Feed Posts={dummyPosts} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPage