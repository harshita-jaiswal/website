import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import './layout.css';
import Head from '../components/sections/Head';
import Foot from '../components/sections/Footer';
import { darkTheme, lightTheme } from '../assets/styles/theme';
import styled from 'styled-components';

const Container = styled.div`
	padding: 0;
	height: 100%;
	overflow: hidden;
	width: 90%;
	max-width: 950px;
	margin: 0 auto;
	display: flex;
	flex-flow: column nowrap;
`;
const App = styled.div`
	height: 100vh;
	width: 100vw;
	transition: background 0.3s;
	background: ${(props) => props.theme.backgroundColor};
`;
const Layout = ({ children }) => {
	const [ theme, setTheme ] = useState({ ...darkTheme });
	function toggleTheme() {
		const selected = theme.type === 'dark' ? lightTheme : darkTheme;
		setTheme({ ...selected });
	}

	return (
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
			render={(data) => {
				return (
					<App theme={theme}>
						<Container>
							<Head toggleTheme={toggleTheme} active={theme} />
							{children}
							<Foot theme={theme} />
						</Container>
					</App>
				);
			}}
		/>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
