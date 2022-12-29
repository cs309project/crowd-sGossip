import React, { useState,useEffect } from 'react'
import Header from '../../components/header-component/Header';
import './EditProfile.css'
import { useNavigate } from 'react-router-dom';
import * as API from '../../API/User'
import { IKUpload, IKContext } from 'imagekitio-react';
import config from '../../config'

function EditProfile() {
    const navigate = useNavigate()
    const [name, setName] = useState(undefined)
    const [photo , setPhoto] = useState(undefined)
    const [user , setUser] = useState({})

    const onError = err => {
        console.log("Error", err);
    };
      
    const onSuccess = res => {
        setPhoto(config.urlEndpoint+'/users'+res.filePath)
    };
   const handleClick = ()=>{
        document.getElementById('upload').click()
   }
    useEffect(() => {
        const getUser = async ()=>{
            setUser(await API.getById())
        }
        getUser()
        
    }, []);

    const handleSave = async () => {
        if (!photo)setPhoto(user.photo)
        if (!name)setName(user.name)
        await API.updateUser(name,photo)
        navigate('/profile')
    }
    return (
        <div className='edit-container'>
            <Header />
            <h2>press image to upload new image to your profile</h2>
            <img src={photo||user.photo} alt={""} onClick={handleClick}/>
            <IKContext 
            publicKey={config.publicKey} 
            urlEndpoint={config.urlEndpoint+'/users'}
            authenticationEndpoint={config.authEndpoint} 
            >
                <IKUpload
                    onError={onError}
                    onSuccess={onSuccess}
                    id={'upload'}
                    style={{display:'none'}}
                />
            </IKContext>
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