import React , {useState , useEffect}from 'react';
import CreatePost from '../../components/create post component/CreatePost';
import Header from '../../components/header-component/Header';
import PostsList from '../../components/posts list component/PostsList';
import ListUsers from '../../components/list users component/ListUsers'
import './Feed.css'
import SidePanel from '../../components/Side-Panel-component/SidePanel';

function Feed({currentUser, followings, followers,name,profileIcon,posts}) {

    const [unreadPosts, setUnreadPosts] = useState([])
    useEffect(() => {
        setUnreadPosts(posts);
      }, [posts]);

    return (
        <div className='feed-container'>
            <div className='HeaderView'>
                <Header />
            </div>
            <div className='div-flex'>
                <div className='side-panel-left-container'>
                    <SidePanel />
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
                        <p>Hi, {name}!</p>
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