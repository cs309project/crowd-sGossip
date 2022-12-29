import React, { useEffect, useState } from 'react'
import Search from '../../components/search bar/Search.js'
import * as API from '../../API/User'
import SearchIcon from '@mui/icons-material/Search'
import { Avatar } from '@mui/material'
import './Admin.css'

function Admin() {

    const [userList, setUserList] = useState([]);
    const [searchedList, setSearchedList] = useState([])
    const [text, setText] = useState("")
    const [searchInput, setSearchInput] = useState("");

    async function handleBan(id){
        await API.banUser(id)
    }

    useEffect(() => {
        const getAll = async () => {
            return await API.getUsers()
        }
        getAll().then((res) => setUserList(res))

    }, [])

    useEffect(() => {
        setSearchedList(userList.filter((value) => value.name.includes(text)))
    }, [text])

    return (
        <div className='AdminContainer'>
            <div className='search'>
                <SearchIcon className='serch-icon' />
                <input
                    className='search-input'
                    type={'text'}
                    onChange={(e) => {
                        setSearchInput(e.target.value);
                        setText(e.target.value)
                    }}
                    placeholder='Search other users'
                />
            </div>
            <div className='usersList'>
                {
                    searchedList.length ? searchedList.map((e, index) => {
                        return (
                            <div className='banView' key={index}>
                                <div className='user'>
                                    <Avatar src={e.photo} />
                                    <p>{e.name}</p>
                                </div>
                                <button onClick={() => {handleBan(e._id)}}>Ban</button>
                            </div>
                        )
                    }) : userList.map((e, index) => {
                        return (
                            <div className='banView' key={index}>
                                <div className='user'>
                                    <Avatar src={e.photo} />
                                    <p>{e.name}</p>
                                </div>
                                <button onClick={() => {handleBan(e._id)}}>Ban</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Admin