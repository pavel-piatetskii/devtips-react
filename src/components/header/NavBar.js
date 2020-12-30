import "./NavBar.scss";

import logo from "./logo.png";
import Search from "./Search";
import Login from "./Login";

export default function NavBar(props) {
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
        <Login />
      </div>
    </nav>
  );
};