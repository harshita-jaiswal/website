import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const Container = styled.div`
	width: 100%;
	position: absolute;
	top: 50%;
	left: 10%;
	padding: 70px 0 0;
	transform: translateY(-50%);
`;
const Body = styled.div`
	background: #000;
	width: 100%;
	height: 100vh;
`;
const LayoutAlignment = styled.div`
	margin: 0 auto;
	max-width: 1440px;
	position: relative;
	height: 100%;
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

// const Scroll = styled.div`
// 	text-align: center;
// 	width: 100%;
// 	color: #ffffff;
// 	margin-top: 25%;
// 	/* margin: auto 0; */
// 	/* margin-top: 100%; */
// 	height: 100%;
// `;

export default class Banner extends Component {
	render() {
		return (
			<Body>
				<LayoutAlignment>
					<Container>
						<LogoContainer height="120px">
							<Logo height="160px" width="25px" color="#950740" />
						</LogoContainer>
						<Intro>Harshita Jaiswal</Intro>
						<Role>Full Stack Developer</Role>
					</Container>
					{/* <div> */}
					<Navbar />
					{/* </div> */}
					{/* <Scroll>
					<p>Scroll</p>
					<div />
				</Scroll> */}
				</LayoutAlignment>
			</Body>
		);
	}
}
