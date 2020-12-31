import React from "react";

import "./LoggedIn.scss";

export default function LoggedIn(props) {
  return (
    <main className="user__card">
    <span className="user__card--name">{props.user.name}</span>
    <img className="user__card--avatar" src={props.user.avatar} alt="User Avatar"/>
    </main>
  );
}