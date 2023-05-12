import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Seo } from "../components/seo";

// Add in the data prop to the function definition.
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool post will go on in here.</p>
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

// Define and export your page query. Copy over the query you built in GraphiQL.
export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts"></Seo>;

export default BlogPage;
