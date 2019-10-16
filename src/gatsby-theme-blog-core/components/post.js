import React from "react"

import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import PostFooter from "../../components/post-footer"

export default ({ location, data }) => {
  const { blogPost, previous, next, site } = data

  return (
    <Layout location={location} title={site.siteMetadata.title}>
      <Seo title={blogPost.title} description={blogPost.excerpt} />
      <section>
        <article>
          <header>
            <h1>{blogPost.title}</h1>
            <p>{blogPost.date}</p>
          </header>
          <MDXRenderer>{blogPost.body}</MDXRenderer>

          <PostFooter {...{ previous, next }} />
        </article>
      </section>
    </Layout>
  )
}
