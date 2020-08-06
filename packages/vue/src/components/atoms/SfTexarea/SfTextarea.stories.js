import { storiesOf } from "@storybook/vue";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { SfTextarea } from "@storefront-ui/vue";
storiesOf("Atoms|Textarea", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfTextarea },
    props: {
      label: {
        default: text("label", "First name", "Props"),
      },
      name: {
        default: text("name", "first-name", "Props"),
      },
      cols: {
        default: text("cols", "40", "Props"),
      },
      rows: {
        default: text("rows", "10", "Props"),
      },
      wrap: {
        default: text("wrap", "soft", "Props"),
      },
      errorMessage: {
        default: text("errorMessage", "Required.", "Props"),
      },
      valid: {
        default: boolean("valid", true, "Props"),
      },
      required: {
        default: boolean("required", true, "Props"),
      },
      disabled: {
        default: boolean("disabled", false, "Props"),
      },
      placeholder: {
        default: text("placeholder", "", "Props"),
      },
    },
    data() {
      return {
        value: "",
      };
    },
    template: `<div style="padding-top: 20px">
      <SfTextarea
        v-model="value"
        :cols="cols"
        :rows="rows"
        :label="label"
        :name="name"
        :wrap="wrap"
        :valid="valid"
        :error-message="errorMessage"
        :required="required"
        :disabled="disabled"
        :placeholder="placeholder"
      />
    </div>`,
  }));
