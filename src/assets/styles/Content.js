import styled from 'styled-components';
import { typewriter, blinkCursor } from './keyFrames';

export const Info = styled.p`
	margin: 0;
	width: auto;
	overflow: hidden;
	white-space: nowrap;
	transform: translateY(-50%);
	text-align: center;
	animation: ${typewriter} 4s steps(${(props) => props.steps}) ${(props) => props.delay} 1 normal both,
		${blinkCursor} 0.3s 0.7s infinite normal;
`;
