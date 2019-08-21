import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const Container = styled.div`
	width: 100%;
	/* position: absolute;
	top: 50%;
	left: 10%;
	padding: 70px 0 0; */
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100vh;
	/* transform: translateY(-50%); */
`;
const Body = styled.div`
	background: #000000;
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
		left: -20px;
		/* height: 100px;
		width: 100px;
		border: 1px solid #ffffff;
		border-radius: 100%; */
		/* text-align: center; */
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
			right: -33px;
			top: calc(-${(props) => props.height} / 2 + 9px);
		}
	}
`;

const Intro = styled.p`
	font-size: calc(3.6rem + 1vw);
	color: #ffffff;
	text-align: center;
	line-height: 65px;
	font-weight: 700;
	font-family: 'Inconsolata';
`;

const Role = styled.p`
	line-height: 25px;
	font-weight: 400;
	font-family: 'Noto Sans';
	justify-self: flex-end;
	margin-top: 70px;
	font-size: calc(0.8rem + 1vw);
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
							<Logo height="88px" width="15px" color="#950740" />
						</LogoContainer>
						<Intro>
							harshita<br /> jaiswal
						</Intro>
						<Role>full stack developer</Role>
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
