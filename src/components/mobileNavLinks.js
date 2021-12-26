import React from "react";
import { Link } from "gatsby";
import classNames from "classnames";
import * as mobileNavLinksStyles from "./mobileNavLinks.module.scss";

const MobileNavLinks = ({ open }) => {
  const displayMobileNavLinks = classNames(
    mobileNavLinksStyles.mobileNavWrapper,
    {
      [mobileNavLinksStyles.open]: open,
    }
  );

  return (
    <nav arai-label="mobile navigation" className={displayMobileNavLinks}>
      <Link
        className={mobileNavLinksStyles.mobileLink}
        activeClassName={mobileNavLinksStyles.active}
        to="/"
      >
        Home
      </Link>
      <Link
        className={mobileNavLinksStyles.mobileLink}
        activeClassName={mobileNavLinksStyles.active}
        to="/about"
      >
        About
      </Link>
      <Link
        className={mobileNavLinksStyles.mobileLink}
        activeClassName={mobileNavLinksStyles.active}
        to="/projects"
      >
        Projects
      </Link>
      <Link
        className={mobileNavLinksStyles.mobileLink}
        activeClassName={mobileNavLinksStyles.active}
        to="/contact"
      >
        Contact
      </Link>
    </nav>
  );
};

export default MobileNavLinks;
