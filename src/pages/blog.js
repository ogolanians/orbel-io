import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <div>
        <h1>Blog</h1>
        <ol>
          {data.allMarkdownRemark.edges.map((edge) => {
            return (
              <li>
                <h3>{edge.node.frontmatter.title}</h3>
                <h4>{edge.node.frontmatter.date}</h4>
              </li>
            );
          })}
        </ol>
      </div>
    </Layout>
  );
};

export default BlogPage;
