import { Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import { getById } from "../../../API/User";
// import Avatar from "./Avatar";

export default function ChatListItems({ active, isOnline, chat, animationDelay, chatIndex, setIndex, pos, setChosenUser }) {

  const [user, setUser] = useState({})

  useEffect(() => {
    if (chat) {
      async function getUser() {
        await getById(chat.user.toString()).then(e => {
          setUser(e)
          if (pos === chatIndex) {
            setChosenUser(e)
          }
        })
      }
      getUser()
    }
  }, [chat])


  const selectChat = (e) => {
    let index
    for (
      index = 0;
      index < e.currentTarget.parentNode.children.length;
      index++
    ) {
      e.currentTarget.parentNode.children[index].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
    setIndex(pos)
    setChosenUser(user)
    console.log(user);
  };

  return (
    <div
      style={{ animationDelay: `0.${animationDelay}s` }}
      onClick={selectChat}
      className={`chatlist__item ${active ? active : ""
        } `}
    >
      {/* <Avatar
        image={"http://placehold.it/80x80"}
        isOnline={isOnline}
      /> */}
      <Avatar
        src={user.photo ? user.photo : ""}
        style={{marginRight: '8px'}}
      />

      <div className="userMeta">
        <p>{user.name}</p>
        <span className="activeTime">32 mins ago</span>
      </div>
    </div>
  );
}