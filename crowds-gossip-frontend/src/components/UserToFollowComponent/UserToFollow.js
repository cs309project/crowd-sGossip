import React, { useState } from 'react'
import './UserToFollow.css'
import AddIcon from '@mui/icons-material/Add';


function UserToFollow({ name, imgURL, discription, followers}) {

  async function FollowButtonHandeler() {

  }

  const [discrp, setDiscrp] = useState(() => {
    if (discription.length <= 90){
      return discription;
    }
    else{
      return discription.substring(0,87)+"..."
    }
  });



  return (
    <div className='container'>
      <div className='profileView'>
        <img className='profilePic' src={imgURL}
          alt='no img found' />
      </div>

      <div className='name'>{name}</div>

      <div className='discription'>{discrp}</div>

      <div className='followers'>{followers}</div>

      <div className='followbuttonview'>
        <button className='followbutton' onClick={FollowButtonHandeler}>
          <AddIcon className='addIcon'/>
          <p>Follow</p>
        </button>
      </div>
    </div>
  )
}

export default UserToFollow