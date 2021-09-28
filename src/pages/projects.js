import React from "react";

import Layout from "../components/layout";
import * as projectsStyles from "./projects.module.scss";

const ProjectsPage = () => {
  return (
    <Layout>
      <h1>Projects</h1>
      <p>Here are some of the projects I've worked on.</p>
      <div className={projectsStyles.projects}>
        <h3 className={projectsStyles.project}>
          <a
            href="https://apps.apple.com/us/app/smartshade/id1369623095"
            target="_blank"
            rel="noreferrer"
          >
            SmartShade iOS App
          </a>
        </h3>
        <h3 className={projectsStyles.project}>
          <a href="https://suntable.com/" target="_blank" rel="noreferrer">
            Suntable Shopify Site
          </a>
        </h3>
        <h3 className={projectsStyles.project}>
          <a href="https://caplensusa.com/" target="_blank" rel="noreferrer">
            CapLens Shopify Site
          </a>
        </h3>
        <h3 className={projectsStyles.project}>
          <a href="https://g122.webflow.io/" target="_blank" rel="noreferrer">
            CapLens Marketing Webflow Site
          </a>
        </h3>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
