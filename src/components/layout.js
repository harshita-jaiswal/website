import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import './layout.css';
import Head from '../components/sections/Head';
import Footer from '../components/sections/Footer';

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
		render={(data) => (
			<div
				style={{
					// margin: `0`,
					// padding: `0px 1.0875rem 1.45rem`,
					paddingTop: 0,
					height: `100%`,
					overflowX: `hidden`,
					// padding: 20px 245px
					// max-width: 1440px;
					maxWidth: `950px`,
					margin: '0 auto'
				}}
			>
				<header>
					<Head />
				</header>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between'
					}}
				>
					<main style={{ width: '100%' }}>{children}</main>
				</div>
				<footer>
					<Footer />
				</footer>
			</div>
		)}
	/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
