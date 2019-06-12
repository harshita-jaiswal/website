// import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
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
// $height: 180px;
// $top: -$height / 2 + 9;
// $width: 25px;
// $color: #000000;
const AppHeader = styled.div`
	display: flex;
	align-items: center;
	height: 400px;
	justify-content: flex-start;
	margin: 0;
	padding: 0;
	width: 100%;
	background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);
	margin-bottom: 1.45rem;
`;
const Logo = styled.div`
	& {
		height: 25px;
		width: calc(25px * 3.2);
		display: block;
		position: relative;
		background: #053582;
		&:before {
			content: "";
			height: 180px;
			width: 25px;
			top: -180px / 2 + 9;
			background: #000000;
			position: absolute;
		}
		&:after {
			content: "";
			height: 180px;
			width: 25px;
			background: #000000;
			position: absolute;
			right: -50px;
			top: -180px / 2 + 9;
		}
	}
`;

export default class Header extends Component {
	render() {
		return (
			<AppHeader>
				{/* <Logo /> */}
				hello
			</AppHeader>
		);
	}
}
