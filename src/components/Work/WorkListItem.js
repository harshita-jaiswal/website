import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	margin: 5rem 0 3rem;
	width: 100%;
	padding-right: 70px;
	background: #ffffff;
`;

const Border = styled.div`
	border-bottom: 1.5px solid #000000;
	height: 5px;
	width: 20px;
	margin-right: 10px;
	transition: width 0.3s;
	z-index: 10;
`;

const CardBackground = styled.div`
	position: absolute;
	top: 0px;
	left: 0px;
	bottom: 0px;
	right: 0px;
	z-index: -1;
	opacity: 0;
	overflow: hidden;
	transition: all 0.25s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
	background-color: gray;
`;

const ListItem = styled.div`
	position: relative;
	flex: 0 1 66%;
	display: flex;
	max-width: 66%;
	margin: 0 auto;
	padding: 50px 16px;
	border-bottom: 1px solid #000000;
	border-top: 1px solid #000000;
	align-items: flex-start;
	&:hover {
		${Border} {
			width: 120px;
		}
		${CardBackground} {
			z-index: 1;
			opacity: 0.4;
		}
	}
`;

const Content = styled.div`
	margin-top: 15px;
	z-index: 10;
`;

const Name = styled.h3`
	text-transform: uppercase;
	letter-spacing: 7px;
	display: inline;
	padding-top: 0.6rem;
	margin: 0;
	padding-bottom: 50px;
`;
const SerialNumber = styled.h5`
	font-size: 1rem;
	display: inline;
	margin: 0;
	z-index: 10;
`;

const SerialCont = styled.div`
	display: flex;
	align-items: center;
	padding-right: 2.2rem;
`;

const DescriptionList = styled.div`
	display: block;
	margin-top: 35px;
	max-width: 650px;
	z-index: 10;
`;

const Desc = styled.p`
	font-size: 0.8rem;
	margin: 0;
	/* line-height: 10px; */
`;

export default class WorkListItem extends Component {
	render() {
		return (
			<Container>
				<ListItem>
					<CardBackground>
						<img
							src="https://stefanprosch.com/uploads/images/_1200x1200_crop_center-center_82_line/salzburgring_title.jpg.webp"
							height="auto"
							width="1200"
						/>
					</CardBackground>
					<SerialCont>
						<Border />
						<SerialNumber>01</SerialNumber>
					</SerialCont>
					<Content>
						<Name>Salzbur­gring</Name>
						<DescriptionList>
							<Desc>
								Victories and defeats, triumphs and tragedies, and oodles of passion for motor racing:
								with the start of construction works for the Ring in…
							</Desc>
							<Desc>
								Victories and defeats, triumphs and tragedies, and oodles of passion for motor racing:
								with the start of construction works for the Ring in…
							</Desc>
						</DescriptionList>
					</Content>
				</ListItem>
			</Container>
		);
	}
}
