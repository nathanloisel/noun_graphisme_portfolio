const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const projet = path.resolve('./src/templates/project.tsx');
    resolve(
      graphql(
        `
          query {
            allContentfulBioImageContact(filter: { contentful_id: { eq: "2nH2prijQalfGjAOnIQfbt" } }) {
              edges {
                node {
                  facebook
                }
              }
            }
            allContentfulProjet {
              edges {
                node {
                  title
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `,
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const posts = result.data.allContentfulProjet.edges;
        posts.forEach(({ node }, index) => {
          const next = index === 0 ? null : posts[index - 1].node;
          const slug = node.fields.slug;
          createPage({
            path: `/projets/${slug}`,
            component: projet,
            context: {
              slug,
              next: next?.fields.slug,
            },
          });
        });
      }),
    );
  });
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith('develop')) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
      },
    });
  }
};
