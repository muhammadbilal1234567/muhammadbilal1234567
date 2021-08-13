import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../images/logo.png'
function Navbar() {
  const [nav, setNav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={nav ? "nav active" : "nav"} style={{zIndex:'3'}}>
      <NavLink to="/" className="logo" smooth={true} duration={1000}>
        <img src={logo} alt="" />
      </NavLink>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon mr-2" for="menu-btn">
        <span className="nav-icon mr-2"></span>
      </label>
      <ul className="menu">
        <li>
          <NavLink to="/vaults" smooth={true} duration={1000}>
            {" "}
            Vaults{" "}
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" smooth={true} duration={1000}>
            {" "}
            Services{" "}
          </NavLink>
        </li>
        <li>
          <NavLink to="/coins" smooth={true} duration={1000}>
            {" "}
            Coins{" "}
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" smooth={true} duration={1000}>
            {" "}
            About FoxWallet{" "}
          </NavLink>
        </li>
        <li>
          <NavLink to="/help" smooth={true} duration={1000}>
            {" "}
            Help{" "}
          </NavLink>
        </li>
        <li>
          <NavLink to="/launch" smooth={true} duration={1000}>
            {" "}
            Lauch FoxWallet{" "}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
