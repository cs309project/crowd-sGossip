import './App.css';
import Login from "./pages/login/Login";
import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import Feed from "./pages/home/Feed";
import { getById } from './API/User.js';
function App() {

  const [user, setUser] = useState("")

  useEffect(() => {

    async function getUser() {
      setUser(await getById("63a863b76bf5da3e17053b58"))
    }

    getUser()
  }, [])

  return (
    <Routes>
      <Route exact path={'/'} element={<Feed currentUser={user}/>} />
      <Route path={'/login'} element={<Login />} />
      <Route path={'/register'} element={<Register />} />
    </Routes>
  );
}

export default App;
