import React, { Component } from 'react';
import styled from 'styled-components';

const Footer = styled.div`/* position: absolute;
	bottom: 0;
	width: 65%;
	padding: 0 60px; */`;

const List = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	list-style-type: none;
	font-size: 18px;
	line-height: 18px;
	color: #f2f2f2;
	font-family: "Archivo Black";
	margin: 0;
`;

const Inst = styled.p`
	text-align: center;
	font-size: 16px;
	line-height: 32px;
	color: #f2f2f2;
	font-family: "Source Code Pro";
	margin: 0;
`;

export default class Banner extends Component {
	render() {
		return (
			<Footer>
				<List>
					<li>ABOUT ME</li>
					<li>MY WORK</li>
					<li>CONTACT ME</li>
				</List>
				<Inst>Please select an option or scroll down ...</Inst>
			</Footer>
		);
	}
}
