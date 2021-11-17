import { SfDivider } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Divider",
  component: SfDivider,
  parameters: {
    cssprops: {
      "divider-display": { value: "block", control: "text" },
      "divider-margin": { value: "", control: "text" },
      "divider-max-width": { value: "", control: "text" },
      "divider-width": { value: "", control: "text" },
      "divider-border": {
        value:
          "var(--divider-border-style, solid) var(--divider-border-color, var(--c-light))",
        control: "text",
      },
      "divider-border-width": { value: "1px", control: "text" },
    },

    docs: {
      description: {
        component: "The divider component. It's Vue 2 functional component.",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfDivider },
  template: `<div style="margin-top:10vh"> 
		<SfDivider/> 
	</div>`,
});

export const Common = Template.bind({});
Common.args = {};
