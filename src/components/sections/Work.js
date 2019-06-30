import React, { Component } from 'react';
import styled from 'styled-components';
import WorkListItem from '../Work/WorkListItem';

const Container = styled.div`
	margin: 5rem auto;
	width: 100%;
	background: #ffffff;
`;

const SectionTitle = styled.h3`
	text-align: center;
	font-size: 1.7rem;
	margin: 2rem auto;
`;

const ListContainer = styled.div`
	border-top: 1px solid #000000;
	max-width: 66%;
	margin: 4rem auto 2rem;
`;

export default class Work extends Component {
	constructor(props) {
		super(props);
		// Don't call this.setState() here!
		this.work = [
			{
				title: 'Cyware',
				description: '',
				img: ''
			},
			{
				title: 'Senzopt',
				description: '',
				img: ''
			},
			{
				title: 'IT Hub',
				description: '',
				img: ''
			}
		];
	}
	render() {
		return (
			<Container>
				<SectionTitle>My Work</SectionTitle>
				<ListContainer>
					{this.work.map((item, index) => {
						return <WorkListItem work={item} number={index} key={index} />;
					})}
				</ListContainer>
			</Container>
		);
	}
}
