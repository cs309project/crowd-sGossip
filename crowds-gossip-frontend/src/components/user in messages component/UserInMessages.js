import React from 'react'
import "./UserInMessages.css"

function UserInMessages({ProfileImg , name}) {
  return (
    <div className='UserInMessageComponent'>
        <img src={ProfileImg}
        alt='No imag found'/>

        <p>{name}</p>
    </div>
  )
}

export default UserInMessages