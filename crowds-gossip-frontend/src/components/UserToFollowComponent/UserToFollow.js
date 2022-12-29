import React, { useEffect, useState } from 'react'
import './UserToFollow.css'
import AddIcon from '@mui/icons-material/Add';
import * as API from '../../API/User'
import { useNavigate } from 'react-router-dom';

function UserToFollow({ user, followed}) {
  const navigate = useNavigate()

 
  const handleClick = ()=>{
    navigate('/anotherProfile',{state:{id:user._id}})
  }
  // const [discrp, setDiscrp] = useState(() => {
  //   if (discription.length <= 90){
  //     return discription;
  //   }
  //   else{
  //     return discription.substring(0,87)+"..."
  //   }
  // });

  
  


  return (
    <div className='con' onClick={handleClick}>
      <div className='profileView'>
        <img className='profilePic' src={user.photo}
          alt='no img found' />
      </div>

      <div className='name'>{user.name}</div>

      <div className='discription'>{"hi there i am using crowd's gossip"}</div>

      <div className='followers'>{user.followers?user.followers.length:0} followers</div>

    </div>
  )
}

export default UserToFollow