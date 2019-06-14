import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	margin: 250px 80px;
	width: 100%;
`;

const Intro = styled.p`
	font-size: 80px;
	color: #ffffff;
	line-height: 75px;
	font-family: 'Inconsolata';
`;

const Role = styled(Intro)`
	font-size: 70px;
	color: #6f2232;
`;

export default class Banner extends Component {
	render() {
		return (
			<Container>
				<Intro>I am Harshita Jaiswal</Intro>
				<Role>Full Stack Developer</Role>
			</Container>
		);
	}
}
