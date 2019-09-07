import { keyframes } from 'styled-components';

export const typewriter = keyframes`
  0% {
    width: 0;
  }
  1% {
    border-right: 2px solid #f4efef;
  }
  100% {
    width: 100%;
    border-right: 0;
  }
`;

export const blinkCursor = keyframes`
    0% {
        border-right-color: #f4efef;
    }
    100% {
        border-right-color: #252835;
    }
`;
