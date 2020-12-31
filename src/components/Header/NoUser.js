import Button from "../Button";

import "./NoUser.scss";

export default function NoUser(props) {

  if (!props.user) {
    return (
      <main className="user__login">
        <Button submit onClick={props.onLogin}>Login</Button>
        <Button submit onClick={props.onRegister}>Register</Button>
      </main>
    );
  }
};