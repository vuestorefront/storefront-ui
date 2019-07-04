import { storiesOf } from "@storybook/vue";
import SfCharacteristic from "@/components/molecules/SfCharacteristic/SfCharacteristic.vue";

storiesOf("Molecules|Characteristic", module).add(
  "Default",
  () => ({
    components: {
      SfCharacteristic
    }
  }),
  {
    info: {
      summary: `
        <h2> Description </h2>
        <p>Characteristic component. Place desired content into its named slots.</p>
        <h2> Usage </h2>
        <pre><code>import { SfCharacteristic } from "@storefrontui/vue"</code></pre>
        `
    }
  }
);
