import React, { useEffect, useState } from "react";

import Header from "./header";
import Footer from "./footer";
import MobileNavContext from "../hooks/mobileNavContext";
// Styling
import "../styles/index.scss";
import * as layoutStyles from "./layout.module.scss";
import classNames from "classnames";

const Layout = (props) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showMobileNavMenu, setShowMobileNavMenu] = useState(false);
  const layoutContainerPositioning = classNames(layoutStyles.layoutContainer, {
    [layoutStyles.open]: mobileNavOpen,
  });

  useEffect(() => {
    if (window.innerWidth > 768) {
      setShowMobileNavMenu(false);
    } else if (window.innerWidth <= 768) {
      setShowMobileNavMenu(true);
    }
  }, []);

  return (
    <MobileNavContext.Provider
      value={{
        mobileNavOpen,
        showMobileNavMenu,
        toggleMobileNav: (navState) => setMobileNavOpen(navState),
        toggleMobileNavMenu: (showNavBool) => setShowMobileNavMenu(showNavBool),
      }}
    >
      <div className={layoutContainerPositioning}>
        <div className={layoutStyles.content}>
          <Header />
          {props.children}
        </div>
        <Footer />
      </div>
    </MobileNavContext.Provider>
  );
};

export default Layout;
