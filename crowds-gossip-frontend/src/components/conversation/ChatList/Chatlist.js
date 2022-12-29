import React, { useState, useEffect } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";
import Nav from '../nav/Nav.js'

export default function ChatList({ currentUser, chatList, indexChat, setIndexChat, setChosenUser }) {

  const [allChats, setAllChats] = useState([])

  useEffect(() => {
    if (chatList) {
      setAllChats(chatList)
    }
  }, [chatList])


  return (
    <div className="main__chatlist">
      <Nav />
      <div className="chatlist__heading">
        <h2>Chats</h2>
        <button className="btn-nobg">

          <i className="fa fa-ellipsis-h"></i>
        </button>
      </div>
      
      <div className="chatlist__items">
        {allChats && allChats.length ? allChats.map((item, index) => {
          return (
            <ChatListItems
              key={index}
              animationDelay={index + 1}
              active={item.active ? "active" : ""}
              isOnline={item.isOnline ? "active" : ""}
              chat={item}
              setIndex={setIndexChat}
              pos={index}
              setChosenUser={setChosenUser}
              chatIndex={indexChat}
            />
          );
        }) : null
        }
      </div>
    </div>
  );
}
