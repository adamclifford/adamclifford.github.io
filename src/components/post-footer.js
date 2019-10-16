import React from "react"
import { Link } from "gatsby"



const Footer = ({ previous, next }) => (
  <footer>
    <hr />
    {(previous || next) && (
<ul>
        <li>
          {previous && (
            <Link to={previous.slug} rel="prev">
              ← {previous.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.slug} rel="next">
              {next.title} →
            </Link>
          )}
        </li>
      </ul>
    )}
  </footer>
)

export default Footer