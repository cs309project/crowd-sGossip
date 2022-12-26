import React from 'react'
import "./nav.css";
// import logo from 'file:///C:/Users/0.R.G/Downloads/logo1.webp'

export default function nav() {
  return (
    <div className="nav">
      <div className="nav_blocks">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-down-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8.636 12.5a.5.5 0 0 1-.5.5H1.5A1.5 1.5 0 0 1 0 11.5v-10A1.5 1.5 0 0 1 1.5 0h10A1.5 1.5 0 0 1 13 1.5v6.636a.5.5 0 0 1-1 0V1.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h6.636a.5.5 0 0 1 .5.5z" />
          <path fill-rule="evenodd" d="M16 15.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h3.793L6.146 6.854a.5.5 0 1 1 .708-.708L15 14.293V10.5a.5.5 0 0 1 1 0v5z" />
        </svg>
        <img src="blob:https://web.whatsapp.com/a41460e5-93d5-40cb-b099-7020ef2432dc" alt="" />
      </div>
      <div className="nav_blocks"> </div>
      <div className="nav_blocks"> </div>
    </div>
  );
}
