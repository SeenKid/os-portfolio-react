module.exports = {
  pathPrefix: '/portfolio',
  siteMetadata: {
    title: `SeenKid`,
    siteUrl: `https://npanel.tk`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png',
      },
    },
    "gatsby-plugin-sass", "gatsby-plugin-react-helmet"
  ],
};
