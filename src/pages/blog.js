import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Seo } from "../components/seo";

// Add in the data prop to the function definition.
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};

// Define and export your page query. Copy over the query you built in GraphiQL.
export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        excerpt
        id
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts"></Seo>;

export default BlogPage;
