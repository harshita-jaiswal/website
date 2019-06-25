import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	margin: 5rem 0 3rem;
	width: 100%;
	padding-right: 70px;
	background: #ffffff;
`;

const ListItem = styled.div`
	flex: 0 1 66%;
	display: flex;
	max-width: 66%;
	margin: 0 auto;
	padding: 64px 16px;
	border-bottom: 1px solid #000000;
	border-top: 1px solid #000000;
`;

const Name = styled.h3`
	text-transform: uppercase;
	letter-spacing: 7px;
	display: inline;
	padding-top: 0.6rem;
	margin: 0;
`;
const SerialNumber = styled.h5`
	font-size: 1rem;
	display: inline;
	margin: 0;
`;

const Border = styled.div`
	border-bottom: 1.5px solid #000000;
	height: 5px;
	width: 20px;
	margin-right: 10px;
	/* transform: rotate(90deg); */
`;

const SerialCont = styled.div`
	display: flex;
	align-items: center;
	padding-right: 2.2rem;
`;

const DescriptionList = styled.div``;

export default class Work extends Component {
	render() {
		return (
			<Container>
				<ListItem>
					<SerialCont>
						<Border />
						<SerialNumber>01</SerialNumber>
					</SerialCont>
					<Name>Salzbur­gring</Name>
					<DescriptionList />
				</ListItem>
			</Container>
		);
	}
}
