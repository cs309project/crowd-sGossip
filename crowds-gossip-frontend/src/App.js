import './App.css';
import Login from "./pages/login/Login";
import React, { useState, useEffect } from 'react';
import { Routes, Route ,useNavigate} from "react-router-dom";
import Register from "./pages/register/Register";
import Feed from "./pages/home/Feed";
import { getById } from './API/User.js';
import ChatBody from './components/conversation/ChatBody.js'
import { Cookies } from 'react-cookie';
import UserPage from './pages/user-Page/UserPage';
function App() {
  const cookie = new Cookies()
  const token = cookie.get('Authorization')
  const navigate = useNavigate()
  const [user, setUser] = useState("")

  useEffect(() => {
    
    if(!token)navigate('/login')
    
    
  }, [])

  return (
    <Routes>
      <Route exact path={'/'} element={<Feed />} />
      <Route path={'/chat'} element={<ChatBody currentUser={user}/>} />
      <Route path={'/login'} element={<Login />} />
      <Route path={'/register'} element={<Register />} />
      <Route path={'profile'} element={<UserPage />} />
    </Routes>
  );
}

export default App;
