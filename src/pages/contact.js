import React from "react";

import Layout from "../components/layout";

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact Me</h1>
      <p>
        Feel free to email me:{" "}
        <a href="mailto:ogolanians@gmail.com">ogolanians@gmail.com</a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://linkedin.com/in/orbel-golanians-121417189/"
          target="_blank"
          rel="noreferrer"
        >
          Orbel Golanians
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/ogolanians"
          target="_blank"
          rel="noreferrer"
        >
          @ogolanians
        </a>
      </p>
      <p>
        Twitter:{" "}
        <a
          href="https://twitter.com/orbylicious"
          target="_blank"
          rel="noreferrer"
        >
          @orbylicious
        </a>
      </p>
      <p>
        Instagram:{" "}
        <a
          href="https://instagram.com/orbel.px"
          target="_blank"
          rel="noreferrer"
        >
          @orbel.px
        </a>
      </p>
    </Layout>
  );
};

export default ContactPage;
