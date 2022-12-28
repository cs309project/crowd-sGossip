import './App.css';
import Login from "./pages/login/Login";
import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import Feed from "./pages/home/Feed";
import { getById, getByToken } from './API/User.js';
import ChatBody from './components/conversation/ChatBody.js'
import { Cookies } from 'react-cookie';
function App() {
  const cookie = new Cookies()
  const token = cookie.get('Authorization')

  const [user, setUser] = useState("")

  useEffect(() => {
   
    async function getUser() {
      if (!token){
      setUser(await getById("63a863b76bf5da3e17053b58"))
    }
    else{
      setUser(await getByToken(token))
    }
  }
    

    getUser()
  }, [])

  return (
    <Routes>
      <Route exact path={'/'} element={<Feed currentUser={user} />} />
      <Route path={'/chat'} element={<ChatBody currentUser={user}/>} />
      <Route path={'/login'} element={<Login />} />
      <Route path={'/register'} element={<Register />} />
    </Routes>
  );
}

export default App;
