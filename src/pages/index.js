import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import Banner from '../components/sections/banner';

const Container = styled.main`
	width: 100%;
	margin: 0;
	flex: 1 0;
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
