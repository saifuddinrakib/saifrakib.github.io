import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = ({ data }) => (
  <Layout>
    <h1>{data.site.siteMetadata.title}</h1>
  </Layout>
);

export const Head = () => (
  <>
    <title>Home Page</title>
    <meta name="description" content="This is the home page" />
  </>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default IndexPage;
