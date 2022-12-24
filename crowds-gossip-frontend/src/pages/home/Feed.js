import React from 'react';
import CreatePost from '../../components/create post component/CreatePost';
import Header from '../../components/header-component/Header';
import PostsList from '../../components/posts list component/PostsList';
import ListUsers from '../../components/list users component/ListUsers'
import './Feed.css'
import SidePanel from '../../components/Side-Panel-component/SidePanel';

function Feed({ props }) {
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
                        <ListUsers props={props.followings} />
                    </div>
                    <hr />
                    <p>People who follow you</p>
                    <div className='scroll'>
                        <ListUsers props={props.followers} />
                    </div>
                </div>
                <div className='main-container'>
                    <div className='cp-container'>
                        <p>Hi, {props.name}!</p>
                        <CreatePost profileIcon={props.profileIcon} />
                    </div>
                    <div className='pl-container'>
                        <PostsList Posts={props.posts} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feed;