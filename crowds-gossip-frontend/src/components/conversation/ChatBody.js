import React from "react";
import "./chatBody.css";
import ChatList from "./ChatList/Chatlist";
import ChatContent from "./ChatContant/ChatContant";
import UserProfile from "./UserProfile/UserProfile";

export default function ChatBody() {
  return (
    <div className="main__chatbody">
      <ChatList />
      <ChatContent />
      <UserProfile />
    </div>
  );
}