import React, { useEffect, useState } from "react";
import "./chatBody.css";
import ChatList from "./ChatList/Chatlist";
import ChatContent from "./ChatContant/ChatContant";
import UserProfile from "./UserProfile/UserProfile";
import io from 'socket.io-client'
import Confirm from "./ChatContant/confirm component/Confirm";

const socket = io.connect('http://localhost:8001')

export default function ChatBody({ currentUser }) {

  const [chatList, setChatList] = useState([])
  const [chatIndex, setChatIndex] = useState(0)
  const [chosenUser, setChosenUser] = useState({})
  const [popupVisibilty, setPopupVisibilty] = useState(false)
  const [deleteMessage, setDeleteMessage] = useState('')
  const [chosenChatId, setChosenChatId] = useState('')

  const popupCloseHandler = () => {
    setPopupVisibilty(false);
  };

  useEffect(() => {
    if (currentUser) {
      setChatList(currentUser.chats)
    }
  }, [currentUser])

  return (
    <div className="main__chatbody">
      <ChatList
        currentUser={currentUser}
        chatList={chatList}
        indexChat={chatIndex}
        setIndexChat={setChatIndex}
        setChosenUser={setChosenUser}
      />
      <ChatContent
        currentUser={currentUser}
        chatItem={chatList[chatIndex]}
        socket={socket}
        chosenUser={chosenUser}
        setpopupVisibilty={setPopupVisibilty}
        setDeleteMessage={setDeleteMessage}
        setChosenChatId={setChosenChatId}
      />
      <UserProfile currentUser={currentUser} />
      <Confirm
        onClose={popupCloseHandler}
        show={popupVisibilty}
        deleteMessage={deleteMessage}
        socket={socket}
        chatId={chosenChatId}
      />
    </div>
  );
}