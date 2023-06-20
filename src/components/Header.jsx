import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Title = () => {
  return (
    <a href="/" className="logo-container">
      <img className="logo" src={LOGO_URL} alt="Food Express Logo"/>
    </a>
  );
}

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <Title/>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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