module.exports = {
  pathPrefix: '/portfolio',
  siteMetadata: {
    title: `Clément OZOR, étudiant développeur | ClémentOS`,
    siteUrl: `https://sn00ww.github.io/portfolio/`
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
