import React, { Component } from 'react';
import styled from 'styled-components';
import Github from '../../assets/github.svg';
import LinkedIn from '../../assets/linkedIn.svg';
import Codepen from '../../assets/codepen.svg';

// const Container = styled.div`
// 	width: 100%;
// 	position: absolute;
// 	top: 50%;
// 	left: 10%;
// 	padding: 70px 0 0;
// 	transform: translateY(-50%);
// `;
const Body = styled.div`
	background: #262228;
	width: 100%;
	height: 12vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const Info = styled.div`
	/* margin: 2rem auto; */
	max-width: 1440px;
	font-size: 0.89rem;
	position: relative;
	/* height: 100%; */
	padding-left: 4rem;
	color: #ffffff;
	opacity: 0.8;
`;

const ContainerIc = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 30px;
`;

const Icon = styled.span`
	height: 20px;
	width: 20px;
	color: #e5e5e5;
	margin-right: 35px;
	cursor: pointer;
	transition: transform 0.3s;
	transform: scale(1);
	&:hover {
		transform: scale(1.25);
	}
`;

const Detail = styled.span`padding-left: 0.19rem;`;

export default class Contact extends Component {
	render() {
		return (
			<Body>
				<Info>
					{/* <p> */}
					Contact: <Detail>8971025107 ∙ harshitajaiswal2693@gmail.com</Detail>
					{/* </p> */}
				</Info>
				<ContainerIc>
					<Icon>
						<Github />
					</Icon>
					<Icon>
						<LinkedIn />
					</Icon>
					<Icon>
						<Codepen />
					</Icon>
				</ContainerIc>
			</Body>
		);
	}
}
