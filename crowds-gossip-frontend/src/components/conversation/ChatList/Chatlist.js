import React, { useState, useEffect } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default function ChatList({ currentUser, chatList, indexChat, setIndexChat, setChosenUser }) {

  const [allChats, setAllChats] = useState([])

  useEffect(() => {
    if (chatList) {
      setAllChats(chatList)
    }
  }, [chatList])


  return (
    <div className="main__chatlist">
      <button className="btn">


        <i ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg></i>
        <span>New conversation</span>

      </button>

      <div className="chatlist__heading">
        <h2>Chats</h2>
        <button className="btn-nobg">

          <i className="fa fa-ellipsis-h"></i>
        </button>
      </div>
      <div className="chatList__search">
        <div className="search_wrap">
          <input type="text" placeholder="Search Here" required />
          <button className="search-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            {/* <i className="fa fa-search"></i>
              <i class="fas fa-search"></i> */}

          </button>
        </div>
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
