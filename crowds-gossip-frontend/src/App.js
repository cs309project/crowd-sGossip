import './App.css';
import Login from "./pages/login/Login";
import React, { useState, useEffect } from 'react';
import { Routes, Route ,useNavigate} from "react-router-dom";
import Register from "./pages/register/Register";
import Feed from "./pages/home/Feed";
import ChatBody from './components/conversation/ChatBody.js'
import { Cookies } from 'react-cookie';
import UserPage from './pages/user-Page/UserPage';
import EditProfile from './pages/edit profile/EditProfile'
import SearchUser from './pages/search user/SearchUser';
import Admin from './pages/admin/Admin.js';
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
      <Route path={'/chat'} element={<ChatBody />} />
      <Route path={'/login'} element={<Login />} />
      <Route path={'/register'} element={<Register />} />
      <Route path={'/profile'} element={<UserPage />} />
      <Route path={'/profile/edit'} element={<EditProfile />} />
      <Route path={'/search'} element={<SearchUser />} />
      <Route path={'/admin'} element={<Admin/>}/>
    </Routes>
  );
}

export default App;
