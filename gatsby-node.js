const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const projet = path.resolve('./src/templates/project.tsx')
    resolve(
      graphql(
        `
          {
            allContentfulProjet {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulProjet.edges
        posts.forEach(post => {
          const slug = post.node.slug;
          createPage({
            path: `/projets/${slug}`,
            component: projet,
            context: {
              slug
            },
          })
        })
      })
    )
  })
}


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
