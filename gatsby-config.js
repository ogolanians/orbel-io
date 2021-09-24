module.exports = {
  siteMetadata: {
    siteUrl: "https://www.orbel.io/",
    title: "Orbel's Portfolio Site",
    author: "Orbel Golanians",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
  ],
};
