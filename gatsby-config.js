module.exports = {
  siteMetadata: {
    title: `Adam Clifford`,
    description: `This is me, my place on the internet`,
    author: `Adam Clifford`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/adamclifford`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog-core`,
      options: {
        // basePath defaults to `/`
        basePath: `/blog`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/assets/me.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
