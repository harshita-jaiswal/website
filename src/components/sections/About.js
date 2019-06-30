import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	margin: 5rem auto 3rem;
	width: 100%;
	position: relative;
	/* background: #eee2dc; */
	padding: 1rem 0;
`;

const SectionTitle = styled.h3`
	/* text-align: center; */
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 1.7rem;
	/* margin: 2rem auto; */
`;

const Box = styled.div`
	width: 66%;
	height: 30rem;
	background: #ffffff;
	margin: 0 auto;
	box-shadow: 0 0 60px 0 #aba7a7;
`;

export default class About extends Component {
	render() {
		return (
			<Container>
				<Box>
					<SectionTitle>About</SectionTitle>
				</Box>
			</Container>
		);
	}
}
