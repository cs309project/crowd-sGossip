import React, { useState,useEffect } from 'react'
import Header from '../../components/header-component/Header';
import './EditProfile.css'
import { useNavigate } from 'react-router-dom';
import * as API from '../../API/User'

function EditProfile() {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [photo , setPhoto] = useState('')
    const [user , setUser] = useState({})
    useEffect(() => {
        const getUser = async ()=>{
            setUser(await API.getById())
        }
        getUser()
        
    }, []);

    const handleSave = async () => {
        await API.updateUser(name,photo)
    }
    return (
        <div className='edit-container'>
            <Header />
            <img src={user.photo} alt={''}/>
            <input
                placeholder='Change your user name'
                type={'text'}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={handleSave}>Save changes</button>
        </div>
    )
}

export default EditProfile