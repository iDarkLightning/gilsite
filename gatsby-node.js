exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: { allGraphCmsArticle },
  } = await graphql(`
    {
      allGraphCmsArticle {
        nodes {
          slug
        }
      }
    }
  `);

  allGraphCmsArticle.nodes.forEach(({ slug }) => {
    createPage({
      path: `/blog/${slug}`,
      component: require.resolve(`./src/templates/BlogPage.tsx`),
      context: {
        slug,
      },
    });
  });
};
