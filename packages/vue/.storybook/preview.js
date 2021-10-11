import "../styles.scss";

export const parameters = {
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
        "Contributing"
      ],
    },
  },
  docs: {
    disabled: true,
  }
};
