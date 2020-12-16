import { storiesOf } from "@storybook/vue";
import { SfDivider } from "@storefront-ui/vue";
storiesOf("Atoms|Divider", module).add("Common", () => ({
  components: { SfDivider },
  template: `<div style="margin-top:10vh"> 
		<SfDivider/> 
	</div>`,
}));
