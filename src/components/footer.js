import React from "react";
import * as FaIcons from "react-icons/fa";

import * as footerStyles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={footerStyles.parentContainer}>
        <div className={footerStyles.contentContainer}>
          <div className={footerStyles.iconsContainer}>
            <a
              href="https://linkedin.com/in/orbel-golanians-121417189/"
              target="_blank"
              rel="noreferrer"
            >
              <FaIcons.FaLinkedin className={footerStyles.icon} />
            </a>
            <a
              href="https://github.com/ogolanians"
              target="_blank"
              rel="noreferrer"
            >
              <FaIcons.FaGithub className={footerStyles.icon} />
            </a>
            <a
              href="https://twitter.com/orbylicious"
              target="_blank"
              rel="noreferrer"
            >
              <FaIcons.FaTwitter className={footerStyles.icon} />
            </a>
          </div>
          <p className={footerStyles.text}>
            Created by Orbel Golanians, © 2021
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
