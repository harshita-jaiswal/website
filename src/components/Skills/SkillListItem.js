import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	margin: 100px auto 0;
	width: 100%;
	/* padding-right: 70px; */
	height: auto;
	background: #000000;
	color: #ffffff;
`;

const ThreeBoxRow = styled.div`margin-top: 35px;`;

const ThreeBox = styled.div`
	height: 200px;
	width: 200px;
	background: #950740;
	color: #ffffff;
	display: inline-flex;
	margin: -100px 50px 50px;
	transform: rotate(45deg);
`;
const TwoBoxRow = styled.div`
	display: flex;
	justify-content: center;
`;
const TwoBox = styled.div`
	height: 200px;
	width: 200px;
	background: #950740;
	color: #ffffff;
	display: inline-flex;
	margin: -100px 62px 20px 38px;
	transform: rotate(45deg);
`;

export default class SkillListItem extends Component {
	render() {
		return (
			<Container>
				<ThreeBoxRow>
					{this.props.list.slice(0, 3).map((item, index) => {
						return (
							<ThreeBox>
								<img
									src="https://stefanprosch.com/uploads/images/_1200x1200_crop_center-center_82_line/salzburgring_title.jpg.webp"
									height="auto"
									width="1200"
								/>
							</ThreeBox>
						);
					})}
				</ThreeBoxRow>
				<TwoBoxRow>
					{this.props.list.slice(3, 5).map((item, index) => {
						return <TwoBox>{}</TwoBox>;
					})}
				</TwoBoxRow>
				<ThreeBoxRow>
					{this.props.list.slice(0, 3).map((item, index) => {
						return <ThreeBox>{}</ThreeBox>;
					})}
				</ThreeBoxRow>
			</Container>
		);
	}
}
