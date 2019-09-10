module.exports = {
	siteMetadata: {
		title: `Harshita Jaiswal`,
		description: `I am full stack developer`,
		author: `@harshitajaiswal`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-plugin-styled-components`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#0F1626`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/assets/favicon/favicon-32x32.png` // This path is relative to the root of the site.
			}
		},
		// {
		// 	resolve: 'gatsby-plugin-web-font-loader',
		// 	options: {
		// 		google: {
		// 			families: [ 'Archivo+Black', 'Source Code Pro', 'Oxygen Mono', 'Ubuntu:400,500' ]
		// 		}
		// 	}
		// },
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /assets/ // See below to configure properly
				}
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
