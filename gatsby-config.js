const path = require('path');

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-image',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@components': path.join(__dirname, 'src/components'),
        '@styles': path.join(__dirname, 'src/styles'),
        '@views': path.join(__dirname, 'src/views'),
      },
    },
    'gatsby-plugin-sass',
  ],
};
