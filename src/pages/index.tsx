import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import PersonalBlog from '../containers/home';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  return (
  <Layout>
    <SEO
      title="Bob Breznak's Blog"
      description={data.site.siteMetadata.description}
    />
    <PersonalBlog />
  </Layout>
)}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;