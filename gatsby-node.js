/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it


const path = require("path");



exports.onCreateNode = ({ node }) => {
    console.log(node.internal.type);
};

exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators;



    const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`);

    console.log(blogPostTemplate);

    return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
        if (result.errors) {
            console.log(result.errors);
            return Promise.reject(result.errors);
        }

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: blogPostTemplate,
                context: {}, // additional data can be passed via context
            });
        });
    });
};