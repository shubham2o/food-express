import { LOGO_URL } from "../utils/constants";

const Title = () => {
  return (
    <a href="/" className="logo-container">
      <img className="logo" src={LOGO_URL} alt="Food Express Logo"/>
    </a>
  );
}

const Header = () => {
  return (
    <div className="header">
      <Title/>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;