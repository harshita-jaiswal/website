import React, { Component } from 'react';
import styled from 'styled-components';
import SkillListItem from './SkillListItem';

const Container = styled.div`
	margin: 5rem auto;
	width: 100%;
	color: #ffffff;
`;

const SectionTitle = styled.h3`
	text-align: center;
	font-size: 3.3rem;
	margin: 4rem auto;
	font-family: "Rammetto One", cursive;
`;

const ListContainer = styled.div`
	/* border-top: 1px solid #000000; */
	max-width: 66%;
	margin: 4rem auto 2rem;
	height: 100%;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: space-around;
`;

export default class Skills extends Component {
	constructor(props) {
		super(props);
		// Don't call this.setState() here!
		this.skills = [ 'HTML5', 'CSS', 'Reactjs', 'Vuejs', 'Redux', 'VueX' ];
	}
	render() {
		return (
			<Container>
				<SectionTitle>Skills</SectionTitle>
				<ListContainer>
					{/* {this.skills.map((item, index) => {
            return <SkillListItem name={item} key={index} />
          })} */}
					<SkillListItem list={this.skills} />
				</ListContainer>
			</Container>
		);
	}
}
