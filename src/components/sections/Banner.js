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
	color: ${(props) => props.theme.textColor};
	font-size: 22px;
	line-height: 46px;
`;

const Symbol = styled.p`
	font-size: 2rem;
	font-weight: bolder;
`;

export default function Banner(props) {
	return (
		<Body>
			<Info theme={props.theme} steps="32" delay="1s">
				Hello there, nice to meet you !!
			</Info>
			<Info steps="22" delay="4s">
				I am Harshita Jaiswal.
			</Info>
			<Symbol>\ ( o _ o ) /</Symbol>
		</Body>
	);
}
