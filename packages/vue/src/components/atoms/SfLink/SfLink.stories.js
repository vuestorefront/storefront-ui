import SfLink from "./SfLink.vue";

export default {
  title: "Components/Atoms/Link",
  component: SfLink,
  parameters: {
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
