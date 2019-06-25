import React, { Component } from 'react';
import styled from 'styled-components';
import WorkListItem from '../Work/WorkListItem';

const Container = styled.div`
	margin: 5rem 0 3rem;
	width: 100%;
	background: #ffffff;
`;

const SectionTitle = styled.h3`
	text-align: center;
	font-size: 1.7rem;
`;

export default class Work extends Component {
	render() {
		return (
			<Container>
				<SectionTitle>Projects</SectionTitle>
				<WorkListItem />
			</Container>
		);
	}
}
