import SfLink from "./SfLink.vue";

export default {
  title: "Components/Atoms/Link",
  component: SfLink,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
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
      "c-link": { value: "", control: "text" },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "Creates a NuxtLink, a native (a href) link, or a router link depending on the link property.  A slot can be used to pass content.",
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
    default: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to place content for link",
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
