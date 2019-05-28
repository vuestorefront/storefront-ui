import { storiesOf } from "@storybook/vue";
import SfProperty from "./SfProperty.vue";
import { withKnobs, text } from "@storybook/addon-knobs";

export default storiesOf("Molecules|[Property", module)
  .addDecorator(withKnobs)
  .add(
    "Props",
    () => ({
      components: { SfProperty },
      props: {
        property: {
          default: text("property (prop)", "Material")
        },
        value: {
          default: text("value (prop)", "Cotton")
        }
      },
      template: `
      <div style="width: 300px">
        <SfProperty
          :property="property"
          :value="value"
        />
      </div>
    `
    }),
    {
      info: {
        summary: `<h2> Usage </h2>
        <pre><code>import SfProperty from "@storefrontui/vue/dist/SfProperty.vue"</code></pre>`
      }
    }
  );
