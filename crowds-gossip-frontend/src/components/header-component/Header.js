import React from 'react'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import Logo from '../logo-component/Logo.js';
import Search from '../search bar/Search.js';
import './Header.css';
import { useNavigate } from 'react-router';

function Header({setText}) {
    const navigate = useNavigate()
    async function handleChatButton() {
        navigate('/chat')
    }
    

    return (
        <header className='Header'>
            <div className='Logo' onClick={()=>navigate('/')}>
                <Logo />
                <p>Crowd's gossip</p>
            </div>
            <div className='SearchBar'>
                <Search setText={setText}/>
            </div>
            <button className='IconChatButtonView'
                onClick={() => handleChatButton()}>
                <ForumOutlinedIcon className='ChatIcon' />
            </button>
        </header>
    )
}

export default Header