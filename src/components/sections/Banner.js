import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	margin: 17rem 10% 0;
	width: 100%;
	padding-right: 70px;
`;
const LogoContainer = styled.div`height: ${(props) => props.height};`;

const Logo = styled.div`
	& {
		height: ${(props) => props.width};
		width: calc(${(props) => props.width} * 3.2);
		display: block;
		position: relative;
		background: #4e4e50;
		&:before {
			content: "";
			height: ${(props) => props.height};
			width: ${(props) => props.width};
			top: calc(-${(props) => props.height} / 2 + 9px);
			background: ${(props) => props.color};
			position: absolute;
		}
		&:after {
			content: "";
			height: ${(props) => props.height};
			width: ${(props) => props.width};
			background: ${(props) => props.color};
			position: absolute;
			right: -54px;
			top: calc(-${(props) => props.height} / 2 + 9px);
		}
	}
`;

const Intro = styled.p`
	font-size: calc(2.5rem + 1vw);
	color: #ffffff;
	line-height: 45px;
	font-weight: 700;
	font-family: 'Inconsolata';
`;

const Role = styled.p`
	line-height: 25px;
	font-weight: 400;
	font-family: 'Noto Sans';
	font-size: calc(1rem + 1vw);
	color: #ffffff;
`;

export default class Banner extends Component {
	render() {
		return (
			<Container>
				<LogoContainer height="120px">
					<Logo height="160px" width="25px" color="#950740" />
				</LogoContainer>
				<Intro>Harshita Jaiswal</Intro>
				<Role>Full Stack Developer</Role>
			</Container>
		);
	}
}
