import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100px;
	color: white;
	top: 250px;
	position: fixed;
	right: 0;
	/* position: absolute; */
	/* // transform: rotate(180deg); */
`;

const Nav = styled.ul`
	color: #4e4e50;
	font-size: 12px;
	list-style: none;
`;

const NavItem = styled.li`
	transform: rotate(270deg);
	margin: 33px 11px;
	width: 100%;
	min-height: 70px;
	font-size: 0.9rem;
	cursor: pointer;
`;

export default class Navbar extends Component {
	render() {
		return (
			<Container>
				<Nav>
					<NavItem>About</NavItem>
					<NavItem>Work</NavItem>
					<NavItem>Contact</NavItem>
				</Nav>
			</Container>
		);
	}
}
