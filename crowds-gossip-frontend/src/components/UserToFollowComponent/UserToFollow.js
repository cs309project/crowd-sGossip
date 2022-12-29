import React, { useEffect, useState } from 'react'
import './UserToFollow.css'
import AddIcon from '@mui/icons-material/Add';
import * as API from '../../API/User'
import { useNavigate } from 'react-router-dom';

function UserToFollow({ user, followed}) {
  const navigate = useNavigate()

  async function FollowButtonHandeler() {
    await API.followUser(user._id)
  }

  async function unFollowButtonHandeler(){
    await API.unfollowUser(user._id)
  }

  const handleClick = ()=>{
    navigate('/profile',{state:{id:user._id}})
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

      <div className='followbuttonview' id='followbtn'>
        <button className='followbutton' onClick={FollowButtonHandeler}>
          <AddIcon className='addIcon'/>
          <p className='text'>Follow</p>
        </button>
      </div>
    </div>
  )
}

export default UserToFollow