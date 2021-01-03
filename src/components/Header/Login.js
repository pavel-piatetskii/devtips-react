import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

import Button from "components/Button";

import "./LoginRegister.scss";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validate = function() {
    if (email === "") {
      setError("Email cannot be blank");
      return;
    } else if (password === "") {
      setError("Password cannot be blank");
      return;
    }
    setError("");
    props.onLogin(email, password);
  };

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
      <section className="__form__validation">{error}</section>
      <section className="__form--buttons">
        <FontAwesomeIcon icon={faChevronCircleLeft} size="lg" onClick={props.onBack} />
        <Button submit onClick={() => validate()}>Submit</Button>
      </section>
    </main>
  );
};