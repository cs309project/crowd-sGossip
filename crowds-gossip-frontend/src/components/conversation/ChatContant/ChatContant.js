import React, { useRef, useState, useEffect } from "react";
import "./ChatContant.css";
// import Avatar from "../ChatList/Avatar";
import ChatItem from "./ChatItem";
import { getChatById } from "../../../API/Chat";
import { Avatar } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';


export default function ChatContent({ currentUser, chatItem, socket, chosenUser, setpopupVisibilty, setDeleteMessage, setChosenChatId }) {
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null)
  const [chat, setChat] = useState([])
  const [msg, setMsg] = useState("")
  const [user, setUser] = useState({})

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = () => {
    socket.emit('sendMessage', {
      _id: chatItem.chatId,
      sender: currentUser._id,
      message: msg
    })
    inputRef.current.value = ""
    setMsg("")
  }

  useEffect(() => {
    if (chatItem && chosenUser) {
      async function getChat() {
        await getChatById(chatItem.chatId.toString()).then(e => {
          setChat(e.conversation)
        })
        setChosenChatId(chatItem.chatId)
        setUser(chosenUser)
        scrollToBottom();
      }
      getChat()
    }

    if (chatItem && chosenUser) {
      socket.on('chatUpdated', async () => {
        await getChatById(chatItem.chatId.toString()).then(e => {
          setChat(e.conversation)
        })
        setUser(chosenUser)
        scrollToBottom();
      })
    }
  }, [chatItem, socket, chosenUser])

  useEffect(() => {
    scrollToBottom()
  }, [msg, user])

  useEffect(() => {
    if (chatItem) {
      scrollToBottom()
    }
  }, [chosenUser, chatItem])

  const onStateChange = (e) => {
    setMsg(e.target.value)
  };

  return (
    <div className="main__chatcontent">
      <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user">
            <Avatar
              src={user.photo ? user.photo : ""}
              style={{ marginRight: '8px' }}
            />
            <p>{user.name}</p>
          </div>
        </div>
      </div>
      <div className="content__body">
        <div className="chat__items">
          {chat && chat.length ? chat.map((itm, index) => {
            return (
              <ChatItem
                currentUser={currentUser}
                animationDelay={index + 2}
                key={index}
                user={itm.sender === currentUser._id ? "me" : "other"}
                msg={itm.message}
                image={itm.image}
                time={itm.time}
                sender={itm.sender}
                setpopupVisibilty={setpopupVisibilty}
                setDeleteMessage={setDeleteMessage}
              />
            );
          }) : null
          }
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="content__footer">
        <div className="sendNewMessage">
          <input
            type="text"
            placeholder="Type a message here"
            onChange={onStateChange}
            value={msg}
            ref={inputRef}
          />
          <button
            className="btnSendMsg"
            id="sendMsgBtn"
            onClick={sendMessage}
          >
            <SendIcon
              style={{ margin: '5px' }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
