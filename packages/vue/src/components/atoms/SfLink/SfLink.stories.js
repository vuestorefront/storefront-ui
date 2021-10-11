import SfLink from "./SfLink.vue";

export default {
  title: "Components/Atoms/Link",
  component: SfLink,
  argTypes: {
    link: {
      control: "text",
      table: {
        category: "Props",
      },
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
