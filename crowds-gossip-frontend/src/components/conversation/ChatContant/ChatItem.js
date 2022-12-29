import { Avatar } from "@mui/material";
import React,{useEffect,useState} from "react";
import * as API from '../../../API/User'
// import Avatar from "../ChatList/Avatar";
export default function ChatItem({ currentUser, user, msg, image, setpopupVisibilty, setDeleteMessage, time, sender }) {
  const [thesender,setThesender] = useState()
  useEffect(() => {
    const getUser = async ()=>{
      await API.getById(sender).then(res=>setThesender(res))
    }
    getUser()
  }, [])
  return (
    <div
      style={{ animationDelay: `0.8s` }}
      className={`chat__item ${user ? user : ""}`}
      onClick={() => {
        if (currentUser._id.toString() === sender) {
          setpopupVisibilty(true)
          setDeleteMessage({
            sender: sender,
            message: msg,
            time: time
          })
        }
      }}
    >
      <div className="chat__item__content">
        <div className="chat__msg">{msg}</div>
        <div className="chat__meta">
        </div>
      </div>
      {/* <Avatar isOnline="active" image={image} /> */}
      <Avatar
        src={thesender?thesender.photo:currentUser.photo}
        style={{ margin: '8px' }}
      />
    </div>
  );
}
