import React, { Component } from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
	padding: 12px 12px;
	flex: 0 0 40px;
	/* position: absolute;
	bottom: 0;
	width: 65%;
	padding: 0 60px; */
`;

const List = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	list-style-type: none;
	font-size: 14px;
	opacity: 0.8;
	line-height: 14px;
	color: ${(props) => props.theme.footerTextColor};
	margin: 0;
	li {
		margin: 0;
	}
`;

// const Inst = styled.p`
// 	text-align: center;
// 	font-size: 16px;
// 	line-height: 32px;
// 	color: #f2f2f2;
// 	font-family: "Source Code Pro";
// 	margin: 0;
// `;

export default function Footer(props) {
	return (
		<Foot>
			<List theme={props.theme}>
				<li>👩🏻‍💻 New updates coming soon !! </li>
				{/* <li>MY WORK</li>
					<li>CONTACT ME</li> */}
			</List>
			{/* <Inst>Please select an option or scroll down ...</Inst> */}
		</Foot>
	);
}
