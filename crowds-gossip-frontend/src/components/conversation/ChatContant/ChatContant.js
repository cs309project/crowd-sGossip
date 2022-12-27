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
  }, [msg])

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
            {/* <Avatar
              isOnline="active"
              image="https://pps.whatsapp.net/v/t61.24694-24/299259224_1128106981463859_3362854679557734518_n.jpg?ccb=11-4&oh=01_AdTZ7n443HK-1Unr36rMi2bsziNJDLPI99PqmFjDnfHWNg&oe=63B3272B"
            /> */}
            <Avatar
              src={user.profilePic ? user.profilePic : ""}
              style={{ marginRight: '8px' }}
            />
            <p>{user.name}</p>
          </div>
        </div>

        <div className="blocks">
          <div className="settings">
            <button className="btn-nobg">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-wide-connected" viewBox="0 0 16 16">
                <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" />
              </svg>
            </button>
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
          <button className="addFiles">

            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-align-middle" viewBox="0 0 16 16">
              <path d="M6 13a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10zM1 8a.5.5 0 0 0 .5.5H6v-1H1.5A.5.5 0 0 0 1 8zm14 0a.5.5 0 0 1-.5.5H10v-1h4.5a.5.5 0 0 1 .5.5z" />
            </svg> */}
            <AddIcon
              style={{ margin: '5px' }}
            />
          </button>
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
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-amd" viewBox="0 0 16 16">
              <path d="m.334 0 4.358 4.359h7.15v7.15l4.358 4.358V0H.334ZM.2 9.72l4.487-4.488v6.281h6.28L6.48 16H.2V9.72Z" />
            </svg> */}
            <SendIcon
              style={{ margin: '5px' }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
