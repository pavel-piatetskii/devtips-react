import React, { useState } from "react";

import back from "images/back.png";
import Button from "components/Button";

import "./LoginRegister.scss";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="__form">
      <input
        className="__form--input"
        name="email"
        type="email"
        placeholder="yourname@email.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        className="__form--input"
        name="password"
        type="password"
        placeholder="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <section className="__form--buttons">
        <img 
          className="__form--back"
          src={back}
          alt="Back"
          onClick={props.onBack}
        />
        <Button submit onClick={props.onLogin}>Login</Button>
      </section>
    </main>
  );
};