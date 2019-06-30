import React, { Component } from 'react';
import styled from 'styled-components';

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
	justify-content: center;
`;
const Info = styled.div`
	/* margin: 2rem auto; */
	max-width: 1440px;
	font-size: 0.89rem;
	position: relative;
	height: 100%;
	padding-left: 4rem;
	color: #ffffff;
	opacity: 0.8;
`;

const Detail = styled.span`padding-left: 0.7rem;`;

export default class Contact extends Component {
	render() {
		return (
			<Body>
				<Info>
					<p>
						Contact: <Detail>8971025107 ∙ harshitajaiswal2693@gmail.com</Detail>
					</p>
				</Info>
			</Body>
		);
	}
}
