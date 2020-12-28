import { SfDivider } from "@storefront-ui/vue";

export default {
  title: "Atoms/Divider",
  component: SfDivider,
};

const Template = (args, { argTypes }) => ({
  components: { SfDivider },
  template: `<div style="margin-top:10vh"> 
		<SfDivider/> 
	</div>`,
});
