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
        await getById(uID.toString()).then((data)=>setUser(data))
      }
      getUser()
    }
  }, [uID])

  useEffect(() => {
    if(user) {
      setName(user.name)
      setProfileImg(user.photo)
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