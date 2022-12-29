import React , {useState , useEffect}from 'react';
import CreatePost from '../../components/create post component/CreatePost';
import Header from '../../components/header-component/Header';
import PostsList from '../../components/posts list component/PostsList';
import ListUsers from '../../components/list users component/ListUsers'
import './Feed.css'
import SidePanel from '../../components/Side-Panel-component/SidePanel';
import * as API from '../../API/User'

function Feed() {
    const [user , setUser] = useState({})

    useEffect(() => {
        const getUser = async ()=>{
            setUser(await API.getById())
        }
        getUser()
        
    }, []);

    return (
        <div className='feed-container'>
            <div className='HeaderView'>
                <Header />
            </div>
            <div className='div-flex'>
                <div className='side-panel-left-container'>
                    <SidePanel profileIcon={user.photo} userName={user.name} userId={user._id}/>
                </div>
                <div className='side-panel-right-container'>
                    <p>People you follow</p>
                    <div className='scroll'>
                        <ListUsers props={user.following} />
                    </div>
                    <hr />
                    <p>People who follow you</p>
                    <div className='scroll'>
                        <ListUsers props={user.followers} />
                    </div>
                </div>
                <div className='main-container'>
                    <div className='cp-container'>
                        <p>Hi, {user.name}!</p>
                        <CreatePost profileIcon={user.photo} />
                    </div>
                    <div className='pl-container'>
                        <PostsList Posts={user.unreadPosts}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feed;