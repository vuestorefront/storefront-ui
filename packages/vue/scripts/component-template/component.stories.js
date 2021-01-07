import ComponentNameCamelCase from "./ComponentNameCamelCase.vue";

export default {
  title: "ComponentType/ComponentName",
  component: ComponentNameCamelCase,
  argTypes: {
    propsName: {
      control: "text",
      table: {
        category: "Props",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { ComponentNameCamelCase },
  props: Object.keys(argTypes),
  template: `
    <ComponentNameCamelCase
      :props-name="propsName"
    />`,
});

export const Common = Template.bind({});
Common.args = {
  propsName: "",
};
