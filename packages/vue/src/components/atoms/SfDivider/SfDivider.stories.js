import { SfDivider } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Divider",
  component: SfDivider,
  parameters: {
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
