// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { Seo } from "../components/seo";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

export const Head = () => (
  <Seo title="About Me" description="About me page">
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "url": "https://www.spookytech.com",
          "name": "Spooky technologies",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+5-601-785-8543",
            "contactType": "Customer Support"
          }
        }
    `}
    </script>
  </Seo>
);

// Step 3: Export your component
export default AboutPage;
