import React, { Component } from "react";
import "./chatBody.css";
import ChatList from "./ChatList/Chatlist";
import ChatContent from "./ChatContant/ChatContant";
import UserProfile from "./UserProfile/UserProfile";

export default class ChatBody extends Component {
  render() {
    return (
      <div className="main__chatbody">
        <ChatList />
        <ChatContent />
        <UserProfile />
      </div>
    );
  }
}
