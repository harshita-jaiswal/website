/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./layout.css"
// import Header from "./header"


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div
          style={{
            margin: `0`,
            // padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            height: `100%`,
            overflowX: `hidden`
            // maxWidth: '1440px',
            // margin: '0 auto'
          }}
        >
         <div style={{
           display: 'flex',
           flexDirection: 'row',
           justifyContent: 'space-between'
         }}>
         <main style={{width:'100%'}}>{children}</main>
         </div>
          <footer>
            {/* © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a> */}
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
