import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

import Layout from "../components/layout";
import * as blogStyles from "./blog.module.scss";
import Head from "../components/head";

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
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Head title="Blog" />
      <div>
        <h1>Blog</h1>
        <p>No blog posts published yet.</p>
        {/* <ol className={blogStyles.posts}>
          {data.allMarkdownRemark.edges.map((edge) => {
            return (
              <li className={blogStyles.post}>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.frontmatter.date}</p>
                </Link>
              </li>
            );
          })}
        </ol> */}
      </div>
    </Layout>
  );
};

export default BlogPage;
