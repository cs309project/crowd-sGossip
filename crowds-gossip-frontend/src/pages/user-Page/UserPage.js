import React,{useEffect,useState} from 'react'
import './UserPage.css'
import CreatePost from '../../components/create post component/CreatePost.js'
import PostsList from '../../components/posts list component/PostsList'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Header from '../../components/header-component/Header';
import SidePanel from '../../components/Side-Panel-component/SidePanel.js';
import * as API from '../../API/User'

async function handleEditProfileButton() {

}


function UserPage() {
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
                <SidePanel profileIcon={""} userName={user.name} />
            </div>
            <div className='Body'>
                <div className='ProfileView'>
                    <div className='Img-Info_View'>
                        <img
                            src={""}
                            alt={""}></img>
                        <div className='UserInfo'>
                            <p id='Name'>{user.name}</p>
                            <p id='Friends'>{user.follower} followers</p>
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
                        <CreatePost profileIcon={""} />
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