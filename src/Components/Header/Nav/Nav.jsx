import React, { useState } from "react";
import logo from "../../../images/logo.svg";
import hamburger from "../../../images/icon-hamburger.svg";
import close from "../../../images/icon-close.svg";
import bg from "../../../images/bg-pattern-mobile-nav.svg";
import "./Nav.css";

function Nav() {
  const [menuIcon, setMenuIcon] = useState(false);
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="logo">
          <img src={logo} alt="logo" />
        </a>

        <div className={menuIcon ? "menu-container active" : "menu-container"}>
          <ul className="menu-item">
            <li>
              <a href="#">How we work</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Acount</a>
            </li>
            <li>
              <a href="#">View Plans</a>
            </li>
          </ul>

          <img src={bg} alt="background" />
        </div>

        <img
          src={menuIcon ? close : hamburger}
          onClick={() => {
            setMenuIcon(!menuIcon);
            if(menuIcon == false){
              document.body.style.overflow = "hidden";
            }
            else{
              document.body.style.overflow = "auto";
            }
          }}
          alt="menu icon"
          role="button"
        />
      </div>
    </nav>
  );
}

export default Nav;
