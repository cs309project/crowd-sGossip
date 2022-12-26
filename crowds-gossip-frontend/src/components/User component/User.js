import React , {useState, useEffect}from 'react'
import { getById } from '../../API/User'
import "./User.css"

function UserInMessages({uID}) {

  const [ProfileImg, setProfileImg] = useState('')
  const [name, setName] = useState('')
  const [user, setUser] = useState('')

  useEffect(() => {
    if(uID){
      async function getUser(){
        setUser(await getById(uID.toString()))
      }
      getUser()
    }
  }, [uID])

  useEffect(() => {
    if(user) {
      console.log(user);
      setName(user.name)
    }
      
  }, [user])
  
  
  return (
    <div className='UserInMessageComponent'>
        <img src={ProfileImg}
        alt='No imag found'/>

        <p>{name}</p>
    </div>
  )
}

export default UserInMessages