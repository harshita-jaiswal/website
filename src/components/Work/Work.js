import React, { Component } from 'react';
import styled from 'styled-components';
import WorkListItem from './WorkListItem';

const Container = styled.div`
	margin: 5rem auto;
	width: 100%;
	color: #ffffff;
`;

const SectionTitle = styled.h3`
	text-align: center;
	font-size: 3.3rem;
	margin: 2rem auto;
	font-family: "Rammetto One", cursive;
`;

const ListContainer = styled.div`
	max-width: 66%;
	margin: 4rem auto 2rem;
`;

export default class Work extends Component {
	constructor(props) {
		super(props);
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
