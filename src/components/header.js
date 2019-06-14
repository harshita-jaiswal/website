import React, { Component } from 'react';
import styled from 'styled-components';

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }
// const height = '180px';
// const top = `-${height} / 2 + 9`;
// const width = '25px';
// const color = '#000000';

const AppHeader = styled.div`height: 100%;`;
const Logo = styled.div`
	& {
		height: ${(props) => props.width};
		width: calc(${(props) => props.width} * 3.2);
		display: block;
		position: relative;
		margin-bottom: 30px;
		top: 27px;
		left: 16px;
		background: #4e4e50;
		&:before {
			content: "";
			height: ${(props) => props.height};
			width: ${(props) => props.width};
			top: calc(-${(props) => props.height} / 2 + 4px);
			background: ${(props) => props.color};
			position: absolute;
		}
		&:after {
			content: "";
			height: ${(props) => props.height};
			width: ${(props) => props.width};
			background: ${(props) => props.color};
			position: absolute;
			right: -16px;
			top: calc(-${(props) => props.height} / 2 + 4px);
		}
	}
`;

export default class Header extends Component {
	render() {
		return (
			<AppHeader>
				<Logo height="42px" width="10px" color="#950740" />
			</AppHeader>
		);
	}
}
