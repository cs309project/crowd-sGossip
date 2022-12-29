import React from 'react'
import { useState ,useEffect } from 'react'
import "./UserListPage.css"
import UserToFollow from "../UserToFollowComponent/UserToFollow"
import * as API from '../../API/User'

function UserListPage({text}) {

  const [userList, setUserList] = useState([]);
  const [searchedList,setSearchedList] = useState([])
  const [followedList,setFollowedList] = useState([])
  
  useEffect(() => {
    const getAll = async ()=>{
      return await API.getUsers()
    }
    getAll().then((res)=>setUserList(res))
    
  }, [])

  useEffect(()=>{
    setSearchedList(userList.filter((value)=>value.name.includes(text)))
  },[text])
  
  return (
    <div className='UserListPageContanier'>
      {
       searchedList.length?searchedList.map((e,index)=>{ return (
        <div key={index}>
          <UserToFollow user={e} followed={followedList[index]}/>
        </div>
      )}):userList.map((e , index) => {
          return (
            <div key={index}>
              <UserToFollow user={e}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default UserListPage