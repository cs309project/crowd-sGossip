import React from 'react'
import './SidePanel.css'
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';

function SidePanel({ profileIcon, userName }) {
    return (
        <div className='SidePanel-container'>
            <div className='HomePage-navigator'>
                <HomeIcon className='HomeIcon' />
                <p>Home</p>
            </div>
            <div className='UserPage-navigator'>
                <img src={profileIcon}></img>
                <p>{userName}</p>
            </div>
            <hr />
            <div className='LogoutView'>
                <LogoutIcon className='LogoutIcon' />
                <p>Log Out</p>
            </div>
            <div className='ContactUsView'>
                <PermPhoneMsgIcon className='ContactUsIcon' />
                <p>Contact Us</p>
            </div>
            <div className='copyRightView'>
                <p>Privacy . Terms . Advertising.</p>
                <p>Copy rights . More . Gossips @2022</p>
            </div>
        </div>
    )
}

export default SidePanel