import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/logo.svg';
import LogoColor from '../../assets/logo-color.svg';
import Codepen from '../../assets/codepen.svg';
import Github from '../../assets/github-white.svg';

const Content = styled.header`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	max-height: 120px;
	padding: 0 20px;
	flex: 0 0 20vh;
`;

const IcBtn = styled.div`
	display: flex;
	align-items: center;
`;

const ThemeBtn = styled.button`
	font-size: 14px;
	font-weight: 600;
	width: auto;
	color: #f2f2f2;
	padding: 5px 15px;
	text-transform: capitalize;
	border: 0;
	background: #4f4f4f;
	margin-left: 3rem;
	cursor: pointer;
	text-transform: uppercase;
	display: inline-block;
`;

const Icon = styled.a`
	cursor: pointer;
	margin: 0 0 0 30px;
	svg {
		transition: color 0.3s;
		color: ${(props) => props.theme.iconColor};
		vertical-align: middle;
	}
`;

export default function Head(props) {
	function shouldToggleTheme() {
		console.log('theme', props);
		props.toggleTheme();
	}
	return (
		<Content>
			{props.active.type === 'dark' ? <Logo /> : <LogoColor />}
			{/* <Logo /> */}
			<IcBtn>
				<Icon theme={props.active} href="https://github.com/harshita-jaiswal/website">
					<Github />
				</Icon>
				<Icon theme={props.active} href="https://codepen.io/harshitaj">
					<Codepen />
				</Icon>
				<ThemeBtn onClick={shouldToggleTheme}>{props.active.type} Mode</ThemeBtn>
			</IcBtn>
		</Content>
	);
}
