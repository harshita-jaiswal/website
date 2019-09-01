import React from 'react';
// import { Link } from 'gatsby';
import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';
import Banner from '../components/sections/banner';
import Work from '../components/Work/Work';
import About from '../components/sections/About';
import styled from 'styled-components';
import Skills from '../components/Skills/Skills';

const Container = styled.div`
	width: 100%;
	margin: 0 auto;
	padding: 20px;
	max-width: 1440px;
	background-color: #252835;
`;

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Banner />
		<Container>
			<Work />
			{/* <About /> */}
			<Skills />
		</Container>
	</Layout>
);

export default IndexPage;
