import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import Banner from '../components/sections/banner';

const Container = styled.div`
	width: 100%;
	margin: 0;
	height: 100%;
	height: calc(100vh - 183px);
	/* padding: 20px 245px;
	max-width: 1440px; */
	background-color: #252835;
`;

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Container>
			<Banner />
		</Container>
	</Layout>
);

export default IndexPage;
