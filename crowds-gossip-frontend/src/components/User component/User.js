import React , {useState, useEffect}from 'react'
import { getById } from '../../API/User'
import "./User.css"
import { useNavigate } from 'react-router-dom'

function UserInMessages({uID}) {
  const navigate = useNavigate()
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
  const handleClick = ()=>{
    navigate('/profile',{state:{id:uID}})
  }
  
  return (
    <div className='UserInMessageComponent' onClick={handleClick}>
        <img src={ProfileImg}
        alt='No imag found'/>

        <p>{name}</p>
    </div>
  )
}

export default UserInMessages