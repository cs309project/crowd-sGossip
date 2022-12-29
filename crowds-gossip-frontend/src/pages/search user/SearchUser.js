import React from 'react'
import Header from '../../components/header-component/Header';
import UserListPage from '../../components/userListPage component/UserListPage'
import './SearchUser.css'
import { useState } from 'react';

function SearchUser() {
  const [text, setText] = useState('')
  return (
    <div>
        <div className='HeaderView'>
            <Header setText={setText}/>
        </div>
        <div className='users'>
            <UserListPage text={text}/>
        </div>
    </div>
  )
}

export default SearchUser