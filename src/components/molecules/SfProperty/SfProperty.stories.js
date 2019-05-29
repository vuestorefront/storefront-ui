import { storiesOf } from "@storybook/vue";
import SfProperty from "./SfProperty.vue";
import { withKnobs, text } from "@storybook/addon-knobs";

export default storiesOf("Molecules|Property", module)
  .addDecorator(withKnobs)
  .add(
    "Props",
    () => ({
      components: { SfProperty },
      props: {
        name: {
          default: text("name (prop)", "Material")
        },
        value: {
          default: text("value (prop)", "Cotton")
        }
      },
      template: `
      <div>
        <SfProperty
          :name="name"
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
