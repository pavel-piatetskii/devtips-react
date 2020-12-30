import "./NavBar.scss";

// import Search from "components/header/Search";
// import Login from "components/header/Login";

export default function NavBar(props) {
  return (
    <nav className="navbar">
      <div className="navbar--centered">
        <img className="navbar__logo" src="./logo192.svg" alt="Logo" />
        <h1 className="navbar__title">
          DevTips
        </h1>
      </div>
      <div className="navbar__search">
      </div>
      <div className="navbar__login">
      </div>
    </nav>
  );
};