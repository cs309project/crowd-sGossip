import React,{useEffect,useState} from 'react'
import './UserPage.css'
import CreatePost from '../../components/create post component/CreatePost.js'
import PostsList from '../../components/posts list component/PostsList'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Header from '../../components/header-component/Header';
import SidePanel from '../../components/Side-Panel-component/SidePanel.js';
import * as API from '../../API/User'
import {  useNavigate } from 'react-router-dom';


function UserPage() {
    const navigate = useNavigate()
    async function handleEditProfileButton() {
        navigate('/profile/edit')
    }
    const [user , setUser] = useState({})

    useEffect(() => {
        const getUser = async ()=>{
            setUser(await API.getById())
        }
        getUser()
        
    }, []);
    
    return (
        <div className='Contanier'>
            <div className='HeaderView'>
                <Header />
            </div>
            <div className='Side-left-panel'>
                <SidePanel profileIcon={user.photo} userName={user.name} />
            </div>
            <div className='Body'>
                <div className='ProfileView'>
                    <div className='Img-Info_View'>
                    <img src={user.photo} alt="" />
                        <div className='UserInfo'>
                            <p id='Name'>{user.name}</p>
                            <p id='Friends'>{user.followers.length} followers</p>
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
                        <CreatePost profileIcon={user.photo} />
                    </div>
                    <div className='FeedView'>
                        <PostsList Posts={user.posts} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPage