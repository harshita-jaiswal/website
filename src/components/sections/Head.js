import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from '../../assets/logo.svg';
import Codepen from '../../assets/codepen.svg';

const Content = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 10vh;
	padding: 60px;
`;

const IcBtn = styled.div`
	display: flex;
	align-items: center;
`;

const ThemeBtn = styled.span`
	font-size: 14px;
	color: #f2f2f2;
	padding: 8px 15px;
	background: #4f4f4f;
	margin-left: 3rem;
	cursor: pointer;
`;

export default class Head extends Component {
	render() {
		return (
			<Content>
				<Logo />
				<IcBtn>
					<Codepen />
					<ThemeBtn>DARK MODE</ThemeBtn>
				</IcBtn>
			</Content>
		);
	}
}
