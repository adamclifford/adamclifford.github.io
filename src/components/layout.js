/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
const Layout = ({ children }) => {
  return (
    <div className="container">
      <header>
        <nav>
        <ul>
            <li>
              <Link to="/blog">/Blog</Link>
            </li>
            <li>
              <Link to="/notes">/Notes</Link>
            </li>
          </ul>
          <h1>
            <Link to="/">Adam Clifford</Link>
          </h1>

          
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <br />© {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
