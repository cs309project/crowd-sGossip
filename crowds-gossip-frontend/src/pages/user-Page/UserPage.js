import React from 'react'
import './UserPage.css'
import Logo from '../../components/logo-component/Logo.js'
import Search from '../../components/search bar/Search.js'
import CreatePost from '../../components/create post component/CreatePost.js'
import Feed from '../../components/feed component/Feed.js'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

async function handleChatButton() {

}

async function handleEditProfileButton() {

}

function UserPage({ profileIcon, userName, followers }) {
    return (
        <div className='Contanier'>
            <header className='Header'>
                <div className='Logo'>
                    <Logo />
                    <p>Crowd's gossip</p>
                </div>
                <div className='SearchBar'>
                    <Search />
                </div>
                <button className='IconChatButtonView'
                    onClick={() => handleChatButton()}>
                    <ForumOutlinedIcon className='ChatIcon' />
                </button>
            </header>
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
                        <Feed/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPage