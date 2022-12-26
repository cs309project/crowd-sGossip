import React from "react";
import "./UserProfile.css";

export default function UserProfile() {
  const toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  return (
    <div className="main__userprofile">
      <div className="profile__card user__profile__image">
        <div className="profile__image">
          <img
            src="https://pps.whatsapp.net/v/t61.24694-24/235884857_647255233643401_3598849319933273889_n.jpg?ccb=11-4&oh=01_AdQ_65C6_NsIsY9_UATPkHFcAjZoQm9FRPxc99s3a7ISzw&oe=63B304E0"
            alt=""
          />
        </div>
        <h4>Ahmed Hussieny</h4>
        <p>Student at computer science </p>
      </div>
      <div className="profile__card">
        <div className="card__header" onClick={toggleInfo}>
          <h4>Information</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-caret-down-fill"
            viewBox="0 0 16 16"
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </div>
        <div className="card__content">No Caption needed</div>
      </div>
    </div>
  );
}
