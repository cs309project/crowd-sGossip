import React from 'react'
import "./nav.css";
import { useNavigate } from 'react-router-dom';
export default function Nav() {
  const navigate = useNavigate()
  return (
    <div className="nav" >
      <div className="nav_blocks" onClick={()=>navigate('/')}>
        <img src={require('../../../assets/logo2.png')} alt="" />
      </div>
      <div className="nav_blocks"> </div>
      <div className="nav_blocks"> </div>
    </div>
  );
}
