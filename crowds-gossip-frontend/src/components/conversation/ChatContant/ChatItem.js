import { Avatar } from "@mui/material";
import React from "react";
// import Avatar from "../ChatList/Avatar";
export default function ChatItem({ currentUser, user, msg, image, setpopupVisibilty, setDeleteMessage, time, sender }) {
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
          <span>16 mins ago</span>
          <span>Seen 1.03PM</span>
        </div>
      </div>
      {/* <Avatar isOnline="active" image={image} /> */}
      <Avatar
        src={user.profilePic ? user.profilePic : ""}
        style={{ margin: '8px' }}
      />
    </div>
  );
}
