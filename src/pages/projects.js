import React from "react";
import Head from "../components/head";

import Layout from "../components/layout";
import * as projectsStyles from "./projects.module.scss";

const ProjectsPage = () => {
  return (
    <Layout>
      <Head title="Projects" />
      <h1>Projects</h1>
      <p>Here are some of the projects I've worked on.</p>
      <div className={projectsStyles.projects}>
        <a
          href="https://apps.apple.com/us/app/smartshade/id1369623095"
          target="_blank"
          rel="noreferrer"
          className={projectsStyles.project}
        >
          <h3>SmartShade iOS App</h3>
          <h5>
            A companion app to control + access solar powered parasols' opening,
            closing, tilting, rotation, music, lighting and data from its
            sensors.
          </h5>
          <h6>
            <ul>
              <li>
                Using Swift, developed the UI based on designs, communication
                with AWS servers to read/write robotic parasol device status and
                display updates on iOS app.
              </li>
              <li>
                Backup and migrate API and device data from AWS hosted
                Kubernetes containers and MySQL database.
              </li>
              <li>
                Determined users’ needs by collaborating with designers and
                engineers to map out product features based on priority and
                time.
              </li>
              <li>
                Evaluated and redesigned application’s user experience based on
                Jakob Nielson’s Usability Heuristics.
              </li>
              <li>Manage and test feature development.</li>
            </ul>
          </h6>
        </a>

        <a
          href="https://sunbox.us/"
          target="_blank"
          rel="noreferrer"
          className={projectsStyles.project}
        >
          <div className={projectsStyles.projectPwProtected}>
            <h3>Sunbox Web App</h3>

            <h6>Contact me for access password</h6>
          </div>
          <h5>
            An internal web app dashboard to manage solar powered storage boxes.
          </h5>
          <h6>
            <ul>
              <li>
                Built front-end with React and SCSS. Some UI components include:
                forms for user credentials, tables to display device and
                reservation info and revenue earnings details.
              </li>
              <li>
                Utilized AWS Amplify to take advantage of seamless AWS resources
                for scalability, authentication, storage and cross-platform
                development.
              </li>
              <li>
                Using Jira, documented Epics, Features, User Stories, Tasks and
                Bugs to manage the products with Agile methodologies and Scrum
                sprints.
              </li>
            </ul>
          </h6>
        </a>
        <a
          href="https://caplensusa.com/"
          target="_blank"
          rel="noreferrer"
          className={projectsStyles.project}
        >
          <h3>CapLens (Shopify)</h3>
          <h5>
            A website buit with Shopify for a personal protective shield
            product.
          </h5>
          <h6>
            <ul>
              <li>
                Customized Shopify Theme using Liquid templating language.
              </li>
              <li>
                Worked alongside designer, media and product team to communicate
                image placements, sizing, fonts and strategy.
              </li>
            </ul>
          </h6>
        </a>

        <a
          href="https://g122.webflow.io/"
          target="_blank"
          rel="noreferrer"
          className={projectsStyles.project}
        >
          <h3>CapLens Marketing (Webflow)</h3>
          <h5>
            A prototype of CapLens website built quickly with Webflow to be used
            for early marketing and investment campagins.
          </h5>
          <h6>
            <ul>
              <li>Designed and made in Webflow.</li>
              <li>
                Used Lottie animation to create an interactive product showcase
                in the site's hero section.
              </li>
            </ul>
          </h6>
        </a>
        <a
          href="https://hrmfoundation.org/"
          target="_blank"
          rel="noreferrer"
          className={projectsStyles.project}
        >
          <h3>Homeless Reduction Movement Foundation</h3>
          <h5>
            This is a volunteering project for me. A Wordpress website for a
            non-profit organization aimed to prevent homelessness.
          </h5>
          <h6>
            <ul>
              <li>
                I've managed the pages' content and customized the styling.
              </li>
              <li>
                Connected the site to Stripe for one-time and recurring donation
                payment processing.
              </li>
              <li>
                Migrated the organization's Email service from GoDaddy to
                Office365.
              </li>
            </ul>
          </h6>
        </a>
        <a
          href="https://lounge22.webflow.io/"
          target="_blank"
          rel="noreferrer"
          className={projectsStyles.project}
        >
          <h3>Lounge22</h3>
          <h5>
            Designed and made in Webflow to give Lounge22 (furniture
            manufacturer) a fresh new look on the web.
          </h5>
          <h6>
            <ul>
              <li>The product pages utilize Webflow's ecommerce CMS.</li>
              <li>Dynamic styling and colors based on product.</li>
              <li>Menu design inspired by Stripe's dropdown mega menu.</li>
            </ul>
          </h6>
        </a>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
