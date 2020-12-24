const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/components/atoms/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../src/components/molecules/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../src/components/organisms/**/*.stories.@(js|jsx|ts|tsx)",
    // "../src/components/pages/**.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/preset-scss",
  ],
}