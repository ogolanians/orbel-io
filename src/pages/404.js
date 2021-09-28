import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <h1>Page not found</h1>
      <p>
        <Link to="/">Head to homepage</Link>
      </p>
    </Layout>
  );
};

export default NotFoundPage;
