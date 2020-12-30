import React, { useState } from "react";
import Button from "../Button";

import "./Login.scss";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const login = function(email, password) {
    console.log(email, password);
  }

  if (!props.user) {
    return (
      <div className="login__form">
        <input
          className="login__form--email"
          placeholder="email@gmail.com"
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="login__form--password"
          placeholder="password"
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      <Button submit onClick={login(email, password)}>Login</Button>
      </div>
    );
  }
};