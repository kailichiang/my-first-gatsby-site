/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Awesome Gatsby`,
    description: `Example project for the Gatsby`,
    twitterUsername: `@kailichiang`,
    image: `/gatsby-icon.png`,
    siteUrl: `https://myfirstgatsbysitemain33548.gatsbyjs.io`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
};
