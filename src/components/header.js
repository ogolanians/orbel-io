import React, { useEffect, useContext } from "react";
import { Link } from "gatsby";
import OrbelLogo from "../assets/orbel-logo-2.png";
import MobileNavContext from "../hooks/mobileNavContext";
import * as headerStyles from "./header.module.scss";
import classNames from "classnames";

const Header = () => {
  console.log(headerStyles);
  const mobileNavContext = useContext(MobileNavContext);
  const active = classNames(headerStyles.mobileMenu, {
    [headerStyles.open]: mobileNavContext.mobileNavOpen,
  });

  // const active = mobileNavContext.mobileNavOpen
  //   ? headerStyles.open
  //   : headerStyles.mobileMenu;

  console.log("active: ", active);

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
              <img src={OrbelLogo} alt="Orbel Golanians' logo"></img>
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

        {/* // <button onCLick={toggleMenuState()}>
        //   {mobileNavContext.mobileNavOpen ? <RiCloseFill /> : <RiMenu3Line />}
        // </button>
        // <nav>
        //   <ul className={headerStyles.navList}>
        //     <li>
        //       <Link
        //         className={headerStyles.navItem}
        //         activeClassName={headerStyles.activeNavItem}
        //         to="/"
        //       >
        //         Home
        //       </Link>
        //     </li>
        //     <li>
        //       <Link
        //         className={headerStyles.navItem}
        //         activeClassName={headerStyles.activeNavItem}
        //         to="/about"
        //       >
        //         About
        //       </Link>
        //     </li>
        //     <li>
        //       <Link
        //         className={headerStyles.navItem}
        //         activeClassName={headerStyles.activeNavItem}
        //         to="/projects"
        //       >
        //         Projects
        //       </Link>
        //     </li>
        //     <li>
        //       <Link
        //         className={headerStyles.navItem}
        //         activeClassName={headerStyles.activeNavItem}
        //         to="/contact"
        //       >
        //         Contact
        //       </Link>
        //     </li>
        //   </ul>
        // </nav> */}
      </header>
    </>
  );
};

export default Header;
