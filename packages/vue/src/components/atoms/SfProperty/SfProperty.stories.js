import { storiesOf } from "@storybook/vue";
import SfProperty from "./SfProperty.vue";
import { withKnobs, text } from "@storybook/addon-knobs";

export default storiesOf("Atoms|Property", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
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
        summary: `<p>Simple label and data component created for product description</p>
        <h2> Usage </h2>
        <pre><code>import { SfProperty } from "@storefront-ui/vue"</code></pre>`
      }
    }
  );
