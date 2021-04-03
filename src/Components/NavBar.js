import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavBarData from "./NavBarData";
import Logo from "../assets/logo.png";

function NavBar() {
  const [sidebar, setSidebar] = useState(false);

  const menuItemToggle = () => {
    
  }

  return (
    <div className="NavBar">
      <nav className="nav-menu">
        <img src={Logo} alt="sprintt-logo" />
        <ul className="nav-menu-items">
          {NavBarData.map((item, index) => {
            return (
              <NavLink to={item.path}>
                <li key={index} className={item.className}>
                  <img className="nav-icon" src={item.icon} alt="" />
                  <span className="text">{item.title}</span>
                </li>
              </NavLink>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
