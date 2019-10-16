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
    <div className="container container-fluid">
      <header className="header">
        <nav>
        <ul className="menu">
            <li>
              <Link to="/blog" activeClassName="active" partiallyActive={true} className="menu-item" >/Blog</Link>
            </li>
            <li>
              <Link to="/notes" activeClassName="active" className="menu-item">/Notes</Link>
            </li>
          </ul>
          <h1>
            <Link to="/">Adam Clifford</Link>
          </h1>

          
        </nav>
      </header>
      <main className="content" >{children}</main>
      <br /> 
      <footer className="footer">
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
