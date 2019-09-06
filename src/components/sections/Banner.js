import React, { Component } from 'react';
import styled from 'styled-components';

const Body = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-family: "Source Code Pro";
	color: #f4efef;
	font-size: 28px;
	line-height: 46px;
`;

const Info = styled.p`margin: 0;`;

export default class Banner extends Component {
	render() {
		return (
			<Body>
				<Info>Hello there, nice to meet you !!</Info>
				<Info> I am Harshita Jaiswal.</Info>
			</Body>
		);
	}
}
