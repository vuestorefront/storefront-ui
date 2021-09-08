import "../styles.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: [
        "*",
        "Getting Started",
        "Releases",
        "Components",
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
