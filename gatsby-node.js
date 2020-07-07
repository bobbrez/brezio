const path = require(`path`)
const _ = require('lodash')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  const blogList = path.resolve(`./src/templates/blog-list.tsx`)
  const tagTemplate = path.resolve(`./src/templates/tags.tsx`)

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
                seriesTitle
                seriesSlug
              }
              frontmatter {
                title
                tags
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      console.log("🦑 post.node", post.node)

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          seriesTitle: post.node.fields.seriesTitle,
          seriesSlug: post.node.fields.seriesSlug,
          previous,
          next,
          tag: post.node.frontmatter.tags,
        },
      })
    })

    // Create blog post list pages
    const postsPerPage = 5
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/page/1` : `/page/${i + 1}`,
        component: blogList,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
      if (_.get(edge, 'node.frontmatter.tags')) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    console.log("🦑 node.frontmatter", node.frontmatter)

    if (typeof node.frontmatter.slug !== 'undefined') {
      createNodeField({
        node,
        name: 'slug',
        value: node.frontmatter.slug,
      })
    } else {
      const value = createFilePath({ node, getNode })
      createNodeField({
        node,
        name: 'slug',
        value,
      })
    }

    createNodeField({ node, name: 'seriesTitle', value: node.frontmatter.seriesTitle })
    createNodeField({ node, name: 'seriesSlug', value: node.frontmatter.seriesSlug })
    createNodeField({ node, name: 'seriesIndex', value: node.frontmatter.seriesIndex })
    createNodeField({ node, name: 'seriesNext', value: node.frontmatter.seriesNext })
    createNodeField({ node, name: 'seriesPrev', value: node.frontmatter.seriesPrev })
    console.log("🦑 node", node)
  }
}

// for React-Hot-Loader: react-🔥-dom patch is not detected
exports.onCreateWebpackConfig = ({ actions, getConfig, stage }) => {
  const config = getConfig()

  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    }
  }
}
