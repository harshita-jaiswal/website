import React, { Component } from 'react';
import styled from 'styled-components';
import { Info } from '../../assets/styles/Content';

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

export default class Banner extends Component {
	render() {
		return (
			<Body>
				<Info steps="32" delay="1s">
					Hello there, nice to meet you !!
				</Info>
				<Info steps="22" delay="4s">
					I am Harshita Jaiswal.
				</Info>
			</Body>
		);
	}
}
