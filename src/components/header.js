import React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import OrbelLogo from "../assets/orbel-logo-2.png";
import { RiMenu3Line } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";

import * as headerStyles from "./header.module.scss";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    console.log("hellooo");
    setSidebar(!sidebar);
  };

  return (
    <header className={headerStyles.header}>
      <Link to="/">
        <img
          className={headerStyles.logo}
          src={OrbelLogo}
          alt="Orbel Golanians' logo"
        ></img>
      </Link>
      <div className={headerStyles.navMenu} onClick={showSidebar}>
        {sidebar ? (
          <ul>
            <RiCloseFill />
            <nav>
              <ul className={headerStyles.navList}>
                <li>
                  <Link
                    className={headerStyles.navItem}
                    activeClassName={headerStyles.activeNavItem}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className={headerStyles.navItem}
                    activeClassName={headerStyles.activeNavItem}
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className={headerStyles.navItem}
                    activeClassName={headerStyles.activeNavItem}
                    to="/projects"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    className={headerStyles.navItem}
                    activeClassName={headerStyles.activeNavItem}
                    to="/blog"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className={headerStyles.navItem}
                    activeClassName={headerStyles.activeNavItem}
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </ul>
        ) : (
          <nav>
            <RiMenu3Line />
          </nav>
        )}
        {/* <RiMenu3Line onClick={showSidebar} /> */}
      </div>
    </header>
  );
};

export default Header;
