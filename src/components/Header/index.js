

import "./index.scss";

// import useVisualMode from "src/hooks/useVisualMode";

import logo from "./logo.png";
import Search from "./Search";
import NoUser from "./NoUser";

export default function Header(props) {
  /*
  const LOGGED_IN = "LOGGED_IN";
  const NO_USER = "NO_USER";

  const { mode, transition, back } = useVisualMode(
    props.user ? LOGGED_IN : NO_USER
  );
  */

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
        <NoUser />
      </div>
    </nav>
  );
};