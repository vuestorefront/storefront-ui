import { SfDivider } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Divider",
  component: SfDivider,
};

const Template = (args, { argTypes }) => ({
  components: { SfDivider },
  template: `<div style="margin-top:10vh"> 
		<SfDivider/> 
	</div>`,
});
