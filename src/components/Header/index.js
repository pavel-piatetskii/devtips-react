import React from "react";

import "./index.scss";

import useVisualMode from "hooks/useVisualMode";

import logo from "images/logo.png";
import Search from "./Search";
import NoUser from "./NoUser";
import LoggedIn from "./LoggedIn";
import Login from "./Login";
import Register from "./Register";

export default function Header(props) {
  
  const LOGGED_IN = "LOGGED_IN";
  const NO_USER = "NO_USER";
  const LOGIN = "LOGIN";
  const REGISTER = "REGISTER";

  const { mode, transition, back } = useVisualMode(
    props.user ? LOGGED_IN : NO_USER
  );

  return (
    <nav className="navbar">
      <div className="navbar--centered">
        <img className="navbar__logo" src={logo} alt="Logo" />
        <h1 className="navbar__title">
          DevTips
        </h1>
      </div>
      <div className="navbar__search">
        <Search />
      </div>
      <div className="navbar__login">
        {mode === LOGGED_IN && (
          <LoggedIn user={props.user} />
        )}
        {mode === NO_USER && (
          <NoUser onLogin={() => transition(LOGIN)} onRegister={() => transition(REGISTER)}/>
        )}
        {mode === LOGIN && (
          <Login onBack={() => back()} />
        )}
        {mode === REGISTER && (
          <Register onBack={() => back()} />
        )}
      </div>
    </nav>
  );
};