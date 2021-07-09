import "../styles.scss";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	options: {
		storySort: {
			order: ['*','Setup', 'Introduction', 'Releases', 'Styleguides', 'Components', 'Examples', 'Pages', 'Templates', 'Utilities'],
		},
	},
};