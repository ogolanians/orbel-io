import React from "react";
import * as FaIcons from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";

import * as footerStyles from "./footer.module.scss";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          title
          siteUrl
        }
      }
    }
  `);

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
            <a
              href="https://instagram.com/orbel.px"
              target="_blank"
              rel="noreferrer"
            >
              <FaIcons.FaInstagram className={footerStyles.icon} />
            </a>
          </div>
          <p className={footerStyles.text}>
            Created for fun by {data.site.siteMetadata.author} © 2021
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
