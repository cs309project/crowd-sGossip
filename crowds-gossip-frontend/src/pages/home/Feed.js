import React from 'react';
import CreatePost from '../../components/create post component/CreatePost';
import Header from '../../components/header-component/Header';
import PostsList from '../../components/posts list component/PostsList';
import MessageUsersList from '../../components/message users list component/MessageUsersList'
import './Feed.css'

function Feed({ props }) {
    return (
        <div className='feed-container'>
            <div className='HeaderView'>
                <Header />
            </div>
            <div className='div-flex'>
                <div className='main-container'>
                    <div className='cp-container'>
                        <p>Hi, {props.name}!</p>
                        <CreatePost profileIcon={props.profileIcon} />
                    </div>
                    <div className='pl-container'>
                        <PostsList Posts={props.posts} />
                    </div>
                </div>
                <div className='side-panel-right-container'>
                    <p>People you follow</p>
                    <div className='scroll'>
                        <MessageUsersList props={props.followings} />
                    </div>
                    <hr />
                    <p>People who follow you</p>
                    <div className='scroll'>
                        <MessageUsersList props={props.followers} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feed;