import React from 'react'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import Logo from '../logo-component/Logo.js';
import Search from '../search bar/Search.js';
import './Header.css';

async function handleChatButton() {

}

function Header() {
    return (
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
    )
}

export default Header