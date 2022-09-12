import React, { useEffect, useRef } from "react";
import "./hamburger.styles.scss";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Hamburger = ({ state }) => {
  const { clicked, initial } = state;

  // DOM Nodes to be animated
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    if (clicked === false) {
      // close menu

      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07
        }
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" }
      });
    } else if (clicked === true || (clicked === true && initial === null)) {
      // open menu
      gsap.to(menu, {
        duration: 0,
        css: { display: "block" }
      });
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(revealMenuBackground, revealMenu);
    }
  }, [state]);

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: "right top",
      skewY: 2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.1
      }
    });
  };

  return (
    <div ref={(e) => (menu = e)} className="hamburger-menu">
      <div
        ref={(e) => (revealMenuBackground = e)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={(e) => (revealMenu = e)} className="menu-layer">
        <div className="menu-city-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link ref={(e) => (line1 = e)} to="/opportunities">
                      Opportunities
                    </Link>
                  </li>
                  <li>
                    <Link ref={(e) => (line2 = e)} to="/solutions">
                      Solutions
                    </Link>
                  </li>
                  <li>
                    <Link ref={(e) => (line1 = e)} to="/contact-us">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>

              <div ref={(e) => (info = e)} className="info">
                <h3>Our Promise</h3>
                <p>
                  The passage experienced a surge in popularity during the 1960s
                  when Letraset used it on their dry-transfer sheets, and again
                  during the 90s as desktop publishers bundled the text with
                  their software.
                </p>
              </div>

              <div className="locations">
                Locations:
                <span>Dallas</span>
                <span>Austin</span>
                <span>New York</span>
                <span>San Francisco</span>
                <span>Beijing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
