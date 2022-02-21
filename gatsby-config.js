module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: `https://api-us-east-1.graphcms.com/v2/ckygda5ep1bzt01xg791dbsmo/master`,
      },
    },
    '@chakra-ui/gatsby-plugin',
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-image',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
