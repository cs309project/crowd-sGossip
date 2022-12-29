import React,{useEffect,useState} from 'react'
import './UserPage.css'
import CreatePost from '../../components/create post component/CreatePost.js'
import PostsList from '../../components/posts list component/PostsList'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Header from '../../components/header-component/Header';
import SidePanel from '../../components/Side-Panel-component/SidePanel.js';
import * as API from '../../API/User'
import {  useNavigate,useLocation } from 'react-router-dom';


function UserPage() {
    const navigate = useNavigate()
    const [current, setCurrent] = useState(true)
    async function handleEditProfileButton() {
        navigate('/profile/edit')
    }
    const [user , setUser] = useState({})
    const [currentUser,setCurrentUser] = useState({})
    const [isFollowed,setIsFollowed] = useState(false)
    const location = useLocation();
    useEffect(() => {
        const getUser = async ()=>{
            setCurrentUser(await API.getById())
            if(!location.state){
                setUser(await API.getById())
                setCurrent(true)
            }
            else{
                setUser(await API.getById(location.state.id))
                setCurrent(false)
            }
        }
        getUser()
        
    }, []);
    useEffect(()=>{
        console.log(currentUser.following)
        if(currentUser.following && currentUser.following.includes(user._id.toString())){
            setIsFollowed(false)
        }else{
            setIsFollowed(true)
        }
    },[user])

    const handleFollow = async ()=>{
        await API.followUser(user._id.toString())
    }
    async function handleUnFollow(){
        await API.unfollowUser(user._id.toString())
    }
    
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
                            <p id='Friends'>{user.followers?user.followers.length:0} followers</p>
                        </div>
                    </div>
                    {current?<button className='EditProfileButton' onClick={() => handleEditProfileButton()}>
                        <EditOutlinedIcon className='EditIcon' />
                        <p>Edit profile</p>
                    </button>:isFollowed?<button className='EditProfileButton' onClick={() => handleFollow()}>
                        <p>Follow user</p>
                    </button>:<button className='EditProfileButton' onClick={() => handleUnFollow()}>
                        <p>Unfollow user</p>
                    </button>
                    }
                    
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