const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
  query projects {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
        }
      }
    }
}
`)

  data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
                         path: "/projects/" + node.frontmatter.slug,
                         component: path.resolve(
                           `./src/templates/project-details.js`),
                         context: {
                           // Data passed to context is available
                           // in page queries as GraphQL variables.
                           slug: node.frontmatter.slug
                         }
                       })
  })

}