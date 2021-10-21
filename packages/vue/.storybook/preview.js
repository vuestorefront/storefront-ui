import "../styles.scss";

export const parameters = {
  viewMode: 'docs',
  previewTabs: { 'storybook/docs/panel': { index: -1 } },
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: [
        "*",
        "Getting Started",
        "Releases",
        ["v0.11.x - Latest Minor", "v0.10.x", "v0.9.x"],
        "Components",
        ["Atoms", "Molecules", "Organisms", "Templates", "Pages"],
        "Layouts",
        "Utilities",
        "Contributing Guide"
      ],
    },
  },
};
