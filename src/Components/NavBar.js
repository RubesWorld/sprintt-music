import React from "react";
import { NavLink } from "react-router-dom";
import NavBarData from "./NavBarData";
import Logo from "../assets/logo.png";

function NavBar() {
  return (
    <div className="NavBar">
      <nav className="nav-menu">
        <img src={Logo} alt="sprintt-logo" />
        <ul className="nav-menu-items">
          {NavBarData.map((item, index) => {
            return (
              <NavLink
                to={item.path}
                exact
                activeClassName="active"
                className={item.className}
                key={index}
              >
                <li>
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
