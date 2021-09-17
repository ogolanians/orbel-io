import { Link } from "gatsby";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
        Constantly tinkering with different forms and variations of technology.
        My obsession with details continues to push my mind towards specific
        implementations of software, design and technology. I immerse myself in
        the interoperability of systems; I want to know how everything works and
        I best learn visually.
      </p>
      <p>
        Want to reach out? <Link to="/contact">Contact me.</Link>
      </p>
    </div>
  );
};

export default AboutPage;
