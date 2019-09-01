import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const Container = styled.div`
	width: 100%;
	padding: 20px;
	height: 100vh;
`;

const Intro = styled.div`
	display: flex;
	align-items: center;
	height: 88vh;
	justify-content: center;
	flex-direction: column;
	/* background: yellowgreen; */
`;
const Body = styled.div`
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
		background: #ffffff;
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

const Info = styled.p`
	font-size: calc(3.6rem + 1vw);
	text-align: center;
	line-height: 1.6;
	font-weight: 700;
	font-family: "Rammetto One", cursive;
`;

const Role = styled.p`
	line-height: 25px;
	font-weight: 400;
	justify-self: flex-end;
	margin-top: 70px;
	font-size: calc(0.8rem + 1vw);
	color: #ffffff;
`;

const Scroll = styled.div`
	text-align: center;
	width: 100%;
	color: #ffffff;
	/* position: absolute;
	bottom: 30px; */
	margin-bottom: 10%;
	/* margin-top: 25%; */
	/* margin: auto 0; */
	/* margin-top: 100%; */
	height: 100%;
`;

export default class Banner extends Component {
	render() {
		return (
			<Body>
				<LayoutAlignment>
					<Container>
						<Intro>
							<LogoContainer height="120px">
								<Logo height="88px" width="15px" color="#950740" />
							</LogoContainer>
							<Info>
								harshita
								<br /> jaiswal
							</Info>
						</Intro>
						<Scroll>hello</Scroll>
					</Container>
					<Navbar />
				</LayoutAlignment>
			</Body>
		);
	}
}
