import "./NavBar.scss";

import Search from "components/header/Search";
import Login from "components/header/Login";

export default function NavBar(props) {
  return (
    <nav className="navbar">
      <div className="navbar--centered">
        <img className="navbar--logo" src="../logo.svg" alt="Logo" />
        <h1 className="navbar--title">
          DevTips
        </h1>
      </div>
      <div className="navbar--search">
        <Search />
      </div>
      <div className="navbar--user">
        <Login />
      </div>
    </nav>
  );
};