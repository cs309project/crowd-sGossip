import React from 'react'
import './SidePanel.css'
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import { useNavigate } from 'react-router-dom';
import { Cookies } from "react-cookie";

function SidePanel({ profileIcon, userName,userId }) {
    const cookie = new Cookies()
    
    const navigate = useNavigate()
    const logout = ()=>{
        cookie.remove("Authorization")
        window.location.reload()
    }
    return (
        <div className='SidePanel-container'>
            <div className='HomePage-navigator' onClick={()=>navigate("/")}>
                <HomeIcon className='HomeIcon' />
                <p>Home</p>
            </div>
            <div className='UserPage-navigator' onClick={()=>navigate("/profile")}>
                <img src={profileIcon}></img>
                <p>{userName}</p>
            </div>
            <hr />
            <div className='LogoutView' onClick={logout}>
                <LogoutIcon className='LogoutIcon' />
                <p>Log Out</p>
            </div>
            <div className='copyRightView'>
                <p>Privacy . Terms . Advertising.</p>
                <p>Copy rights . More . Gossips @2022</p>
            </div>
        </div>
    )
}

export default SidePanel