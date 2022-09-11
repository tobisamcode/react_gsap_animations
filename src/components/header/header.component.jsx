import React, { useEffect, useState } from "react";
import "./header.styles.scss";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "../hamburger/hamburger.component";

const Header = () => {
  const location = useLocation();

  // State for menu button
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });
  const { menuName } = state;

  // State for disable button
  const [disabled, setDisabled] = useState(false);

  // Use effect for page changes
  useEffect(() => {
    setState({ clicked: false, menuName: "Menu" });
  }, [location]);

  const handeMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      });
    }
  };

  // Determine if menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">HAMBRG.</Link>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={handeMenu}>
                {menuName}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Hamburger state={state} />
    </header>
  );
};

export default Header;
