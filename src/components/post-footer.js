import React from "react"
import { Link } from "gatsby"

const Footer = ({ previous, next }) => {
  return (
    (previous || next) && (
      <footer className="post-footer">
        <hr />
        <ul>
          <li>
            {previous && (
              <Link to={previous.slug} className="previous" rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} className="next" rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </footer>
    )
  )
}

export default Footer
