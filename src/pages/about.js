import { Link } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import Head from "../components/head";

import OrbelImg from "../assets/orbel-about.jpg";

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <div>
        <div>
          <h1>About</h1>

          <img src={OrbelImg} width="200" />
        </div>
        <p>
          Constantly tinkering with different forms and variations of
          technology. My obsession with details continues to push my mind
          towards specific implementations of software, design and technology. I
          immerse myself in the interoperability of systems; I want to know how
          everything works and I strive to develop the best product possible.
        </p>
        <p>
          Want to reach out? <Link to="/contact">Contact me.</Link>
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
