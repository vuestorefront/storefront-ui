module.exports = {
  extends: ["@vue-storefront/eslint-config/vue3", "prettier", "plugin:vuejs-accessibility/recommended"],
  plugins: ["vuejs-accessibility"],
  rules: {
    "vuejs-accessibility/form-control-has-label": [
      "off",
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'both',
        depth: 25,
      },
    ],
    // Bug https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility/issues/54
    "vuejs-accessibility/label-has-for": ["error", {
      required: {
        some: ["nesting", "id"],
      }
    }],
    "vuejs-accessibility/mouse-events-have-key-events": "off"
  }
};
