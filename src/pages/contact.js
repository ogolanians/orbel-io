import React from "react";

import Layout from "../components/layout";

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact Me</h1>
      <p>Feel free to email me: ogolanians@gmail.com</p>
      <p>
        Check out my GitHub:{" "}
        <a
          href="https://github.com/ogolanians"
          target="_blank"
          rel="noreferrer"
        >
          @ogolanians
        </a>
      </p>
      <p>
        My Twitter:{" "}
        <a
          href="https://twitter.com/orbylicious"
          target="_blank"
          rel="noreferrer"
        >
          @orbylicious
        </a>
      </p>
      <p>
        My LinkedIn:{" "}
        <a
          href="https://linkedin.com/in/orbel-golanians-121417189/"
          target="_blank"
          rel="noreferrer"
        >
          Orbel Golanians
        </a>
      </p>
    </Layout>
  );
};

export default ContactPage;
