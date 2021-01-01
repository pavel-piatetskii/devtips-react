import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faThumbsUp, faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import "./LoggedIn.scss";

// import Button from "components/Button";

export default function LoggedIn(props) {
  return (
    <main className="user__card">
      <section className="user__card--info">
        <span className="user__card--name text--semi-bold">{props.user.name}</span>
        <img className="user__card--avatar" src={props.user.avatar} alt="User Avatar"/>
      </section>
      <section className="user__card--icon">
        <FontAwesomeIcon icon={faThumbsUp} size="lg" />
        <FontAwesomeIcon icon={faBookmark} size="lg" />
        <FontAwesomeIcon icon={faUser} size="lg" />
        <FontAwesomeIcon icon={faSignOutAlt} size="lg" onClick={props.onLogout} />
      </section>
    </main>
  );
}