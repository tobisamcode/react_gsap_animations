import React, { useState } from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import Hamburger from "../hamburger/hamburger.component";

const Header = () => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">HAMBRG.</Link>
            </div>
            <div className="menu">
              <button>Menu</button>
            </div>
          </div>
        </div>
      </div>

      <Hamburger />
    </header>
  );
};

export default Header;
