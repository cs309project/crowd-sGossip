import React from 'react'
import { useState } from 'react'
import "./UserListPage.css"
import UserToFollow from "../UserToFollowComponent/UserToFollow"

function UserListPage() {

  const [userList, setUserList] = useState([]);

  return (
    <div className='UserListPageContanier'>
      {
        userList.map((e , index) => {
          return (
            <div key={index}>
              <UserToFollow imgURL={e.imgurl} name={e.name} discription={e.discription} followers={e.followers}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default UserListPage