import { Avatar } from "@mui/material";
import { width } from "@mui/system";
import React from "react";
import "./UserProfile.css";

export default function UserProfile({ currentUser }) {
  const toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  return (
    <div className="main__userprofile">
      <div className="profile__card user__profile__image">
        <div className="profile__image">
          {/* <img
            src="https://pps.whatsapp.net/v/t61.24694-24/235884857_647255233643401_3598849319933273889_n.jpg?ccb=11-4&oh=01_AdQ_65C6_NsIsY9_UATPkHFcAjZoQm9FRPxc99s3a7ISzw&oe=63B304E0"
            alt=""
          /> */}
          <Avatar
            src={currentUser.photo ? currentUser.photo : ""}
            style={{
              margin: 'auto',
              height: '90px',
              width: '90px'
            }}
          />
        </div>
        <h4>{currentUser.name}</h4>
      </div>
     
    </div>
  );
}
