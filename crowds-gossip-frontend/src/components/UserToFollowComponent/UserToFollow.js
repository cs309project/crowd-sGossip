import React, { useState ,useEffect} from 'react'
import './UserToFollow.css'
import AddIcon from '@mui/icons-material/Add';
import * as API from '../../API/User'

function UserToFollow({ user }) {
  const [followed, setfollowed] = useState('')

  async function FollowButtonHandeler() {
    await API.followUser(user._id).then((res)=>setfollowed(res))
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
    <div className='con'>
      <div className='profileView'>
        <img className='profilePic' src={user.photo}
          alt='no img found' />
      </div>

      <div className='name'>{user.name}</div>

      <div className='discription'>{"hi there i am using crowd's gossip"}</div>

      <div className='followers'>{user.followers?user.followers.length:0}</div>

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