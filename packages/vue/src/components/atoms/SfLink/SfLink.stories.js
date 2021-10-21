import SfLink from "./SfLink.vue";

export default {
  title: "Components/Atoms/Link",
  component: SfLink,
  parameters: {
    cssprops: {
      "link-color": { value: "var(--c-text)", control: "text" },
      "link-font": { value: "", control: "text" },
      "link-font-weight": {
        value: "var(--font-weight--medium)",
        control: "text",
      },
      "link-font-size": { value: "var(--font-size--sm)", control: "text" },
      "link-font-line-height": { value: "1.4", control: "text" },
      "link-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "link-text-decoration": { value: "underline", control: "text" },
    },

    docs: {
      description: {
        component:
          "The link component with route and nuxt options and slot to pass content.",
      },
    },
  },
  argTypes: {
    link: {
      control: "text",
      table: {
        category: "Props",
      },
      description: "Page route",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfLink },
  props: Object.keys(argTypes),
  template: `
  <SfLink
    target="_blank"
    :link="link"
  >
  Check this out!
  </SfLink>
`,
});

export const Common = Template.bind({});
Common.args = {
  link: "https://www.storefrontui.io/",
};
