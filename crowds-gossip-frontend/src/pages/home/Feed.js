import React , {useState , useEffect}from 'react';
import CreatePost from '../../components/create post component/CreatePost';
import Header from '../../components/header-component/Header';
import PostsList from '../../components/posts list component/PostsList';
import ListUsers from '../../components/list users component/ListUsers'
import './Feed.css'
import SidePanel from '../../components/Side-Panel-component/SidePanel';

function Feed({currentUser}) {

    const [unreadPosts, setUnreadPosts] = useState([])
    const [userName, setUserName] = useState('')
    const [followings, setFollowings] = useState([])
    const [followers, setFollowers] = useState([])
    const [profileIcon, setProfileIcon] = useState('')

    useEffect(() => {
        setUnreadPosts(currentUser.unreadPosts);
        setUserName(currentUser.name);
        setFollowings(currentUser.following);
        setFollowers(currentUser.followers);
      }, [currentUser]);

    return (
        <div className='feed-container'>
            <div className='HeaderView'>
                <Header />
            </div>
            <div className='div-flex'>
                <div className='side-panel-left-container'>
                    <SidePanel userName={userName}/>
                </div>
                <div className='side-panel-right-container'>
                    <p>People you follow</p>
                    <div className='scroll'>
                        <ListUsers props={followings} />
                    </div>
                    <hr />
                    <p>People who follow you</p>
                    <div className='scroll'>
                        <ListUsers props={followers} />
                    </div>
                </div>
                <div className='main-container'>
                    <div className='cp-container'>
                        <p>Hi, {userName}!</p>
                        <CreatePost profileIcon={profileIcon} />
                    </div>
                    <div className='pl-container'>
                        <PostsList currentUser={currentUser} Posts={unreadPosts}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feed;