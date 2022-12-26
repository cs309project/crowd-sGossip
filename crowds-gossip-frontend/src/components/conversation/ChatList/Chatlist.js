import React, { useState } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default function ChatList() {
  const allChatUsers = [
    {
      image:
        "https://pps.whatsapp.net/v/t61.24694-24/299259224_1128106981463859_3362854679557734518_n.jpg?ccb=11-4&oh=01_AdTZ7n443HK-1Unr36rMi2bsziNJDLPI99PqmFjDnfHWNg&oe=63B3272B",
      id: 1,
      name: "Yousef negm",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://pps.whatsapp.net/v/t61.24694-24/310525625_191236136733020_1898475516685164076_n.jpg?ccb=11-4&oh=01_AdQ7qiljPgL9VGGcP999DdLWfh5aGkQnXpCRqY5B7SOl6A&oe=63B31C7F",
      id: 2,
      name: "yosef Alla",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://pps.whatsapp.net/v/t61.24694-24/218346166_512835169796415_4795743717012061165_n.jpg?ccb=11-4&oh=01_AdQlj1ivML72QeVK3u_pfuvWb7W3b3rqdeLx8woDZDId4g&oe=63B30B57",
      id: 3,
      name: "John",
      active: false,
      isOnline: false,
    },
    {
      image: "",
      id: 4,
      name: "Mohmamed",
      active: false,
      isOnline: true,
    },
    {
      image: "",
      id: 5,
      name: "ibrahim",
      active: false,
      isOnline: false,
    },
    {
      image: "",
      id: 6,
      name: "israa",
      active: false,
      isOnline: true,
    },
    {
      image: "",
      id: 7,
      name: "Hasan ",
      active: false,
      isOnline: true,
    },
    {
      image: "",
      id: 8,
      name: "yassen",
      active: false,
      isOnline: false,
    },
    {
      image: "",
      id: 9,
      name: "noura",
      active: false,
      isOnline: true,
    },
    {
      image: "",
      id: 10,
      name: "gmal",
      active: false,
      isOnline: true,
    },
  ];
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     allChats: this.allChatUsers,
  //   };
  // }
  const [allChats, setAllChats] = useState(allChatUsers)
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
        {allChats.map((item, index) => {
          return (
            <ChatListItems
              name={item.name}
              key={item.id}
              animationDelay={index + 1}
              active={item.active ? "active" : ""}
              isOnline={item.isOnline ? "active" : ""}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}
