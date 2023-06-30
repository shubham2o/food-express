import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <a href="/" className="logo-container">
      <img className="logo" src={LOGO_URL} alt="Food Express Logo" />
    </a>
  );
}

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link>Cart</Link>
          </li>
          <button className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }}
          > {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;