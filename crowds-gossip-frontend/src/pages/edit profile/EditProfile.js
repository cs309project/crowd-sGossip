import React, { useState } from 'react'
import Header from '../../components/header-component/Header';
import './EditProfile.css'

function EditProfile() {

    const [name, setName] = useState('')

    const handleSave = () => {
        console.log(name);
    }
    return (
        <div className='edit-container'>
            <Header />
            <img src='https://4.bp.blogspot.com/-klQjV5L27_s/T73fozhXluI/AAAAAAAAAkI/_75K0D7Hpqw/s1600/smiley-face2.jpg' />
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