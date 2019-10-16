import React, { Fragment } from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

export default ({location, data}) => {
    const { site, allBlogPost } = data;

    return (
    <Layout >
        <Seo title="Blog" />
        {allBlogPost.edges.map(({ node }) => {
        const title = node.title || node.slug
        const keywords = node.keywords || []
        return (
          <Fragment key={node.slug}>
            <div>
              <h2><Link to={node.slug}>{node.title}</Link></h2>
              <blockquote>
                  {node.excerpt}
              </blockquote>
            </div>
          </Fragment>
        )
      })}
    </Layout>
    );
}