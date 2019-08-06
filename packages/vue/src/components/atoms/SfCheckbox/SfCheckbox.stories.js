import { storiesOf } from "@storybook/vue";
import SfCheckbox from "./SfCheckbox.vue";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

const vm = {
  components: { SfCheckbox },
  data: () => {
    return {
      status: false
    };
  }
};

export default storiesOf("Atoms|Checkbox", module)
  .addDecorator(withKnobs)

  .add(
    "Basic",
    () => ({
      ...vm,

      props: {
        checkedValue: {
          default: boolean("checkedValue (prop)", true)
        },
        uncheckedValue: {
          default: boolean("uncheckedValue (prop)", false)
        },
        id: {
          default: text("id (prop)", "sf-checkbox-default")
        },
        name: {
          default: text("id (prop)", "sf-checkbox-default")
        },
        disabled: {
          default: boolean("disabled (prop)", false)
        }
      },

      template: `<SfCheckbox
        :id="id"
        :name="name"
        :disabled="disabled"
        v-model="status"/>`
    }),

    {
      info: {
        summary: `
          <h2>
            Description
          </h2>
          <p>
            Single input checkbox component,
            called by \`<SfCheckbox>\`.
            <br>
            You should use it with \`v-model\`, default value is boolean
            (false when unchecked and true when checked), and may also use default slot
            to fill label content.
          </p>
          <h2> Usage </h2>
          <pre><code>import { SfCheckbox } from "@storefrontui/vue"</code></pre>
          `
      }
    }
  )

  .add(
    "[slot] content",
    () => ({
      ...vm,

      template: `<SfCheckbox
        id="sf-checkbox-slot"
        name="sf-checkbox-slot"
        v-model="status">
        <template #content>
          Accept terms
        </template>
      </SfCheckbox>`
    }),
    {
      info: true
    }
  )

  .add(
    "[slot] icon",
    () => ({
      ...vm,

      template: `<SfCheckbox
        id="sf-checkbox-slot-icon"
        name="sf-checkbox-slot-icon"
        v-model="status"
        :disabled="true">
        <template #content>
          Accept terms
        </template>
        <template #icon="{ isChecked, disabled }">
          <div style="margin-right: 10px;">
            <span v-if="isChecked && !disabled">yes</span>
            <span v-if="!isChecked && !disabled">no</span>
            <span v-if="disabled">stop</span>
          </div>
        </template>
      </SfCheckbox>`
    }),
    {
      info: true
    }
  );
