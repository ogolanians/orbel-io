import React, { useEffect, useContext } from "react";
import { Link } from "gatsby";
import classNames from "classnames";
import OrbelLogoSVG from "../assets/orbel-logo-8.svg";
import MobileNavContext from "../hooks/mobileNavContext";
import MobileNavLinks from "./mobileNavLinks";
import * as headerStyles from "./header.module.scss";

const Header = () => {
  const mobileNavContext = useContext(MobileNavContext);
  const active = classNames(headerStyles.mobileMenu, {
    [headerStyles.open]: mobileNavContext.mobileNavOpen,
  });

  // const active = mobileNavContext.mobileNavOpen
  //   ? headerStyles.open
  //   : headerStyles.mobileMenu;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        mobileNavContext.toggleMobileNav(false);
        mobileNavContext.toggleMobileNavMenu(false);
      } else if (window.innerWidth <= 768) {
        mobileNavContext.toggleMobileNavMenu(true);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className={headerStyles.navigationWrapper}>
        <div className={headerStyles.header}>
          <div className={headerStyles.logoWrapper}>
            <Link to="/">
              {/* <img src={OrbelLogo} alt="Orbel Golanians' logo"></img> */}
              <img src={OrbelLogoSVG} alt="Orbel Golanians' logo"></img>
            </Link>
          </div>
          <span className={headerStyles.navigationLinks}>
            {mobileNavContext.showMobileNavMenu ? (
              <button
                className={active}
                onClick={() => {
                  mobileNavContext.toggleMobileNav(
                    !mobileNavContext.mobileNavOpen
                  );
                }}
              >
                <div className={headerStyles.barOne} />
                <div className={headerStyles.barTwo} />
                <div className={headerStyles.barThree} />
              </button>
            ) : (
              <nav>
                <ul className={headerStyles.desktopLinks}>
                  <li>
                    <Link
                      className={headerStyles.link}
                      activeClassName={headerStyles.active}
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={headerStyles.link}
                      activeClassName={headerStyles.active}
                      to="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={headerStyles.link}
                      activeClassName={headerStyles.active}
                      to="/projects"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={headerStyles.link}
                      activeClassName={headerStyles.active}
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </span>
        </div>
      </header>
      {mobileNavContext.showMobileNavMenu ? (
        <MobileNavLinks open={mobileNavContext.mobileNavOpen} />
      ) : null}
    </>
  );
};

export default Header;
