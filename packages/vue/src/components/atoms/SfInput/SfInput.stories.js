/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import SfInput from "./SfInput.vue";
import SfIcon from "../SfIcon/SfIcon.vue";

storiesOf("Atoms|Input", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfInput },
    props: {
      label: {
        default: text("label", "First name", "Props")
      },
      name: {
        default: text("name", "first-name", "Props")
      },
      errorMessage: {
        default: text("errorMessage", "Field is required.", "Props")
      },
      valid: {
        default: boolean("valid", true, "Props")
      },
      required: {
        default: boolean("required", true, "Props")
      },
      disabled: {
        default: boolean("disabled", false, "Props")
      }
    },
    data() {
      return {
        value: ""
      };
    },
    template: `<SfInput
      v-model="value"
      :label="label"
      :name="name"
      :valid="valid"
      :error-message="errorMessage"
      :required="required"
      :disabled="disabled"/>`
  }))
  .add("[slot] label", () => ({
    components: {
      SfInput,
      SfIcon
    },
    props: {
      label: {
        default: text("label", "First name", "Props")
      },
      name: {
        default: text("name", "first-name", "Props")
      },
      errorMessage: {
        default: text("errorMessage", "Field is required.", "Props")
      },
      valid: {
        default: boolean("valid", true, "Props")
      },
      required: {
        default: boolean("required", true, "Props")
      },
      disabled: {
        default: boolean("disabled", false, "Props")
      }
    },
    data() {
      return {
        value: ""
      };
    },
    template: `<SfInput
      v-model="value"
      :label="label"
      :name="name"
      :valid="valid"
      :error-message="errorMessage"
      :required="required"
      :disabled="disabled">
      <template #label="{label}">
            <SfIcon icon="heart_fill" size="10px" style="margin-right: 4px; display: inline-block"/>{{label}}
      </template>
    </SfInput>`
  }))
  .add("[slot] errorMessage", () => ({
    components: {
      SfInput,
      SfIcon
    },
    props: {
      label: {
        default: text("label", "First name", "Props")
      },
      name: {
        default: text("name", "first-name", "Props")
      },
      errorMessage: {
        default: text("errorMessage", "Field is required.", "Props")
      },
      valid: {
        default: boolean("valid", false, "Props")
      },
      required: {
        default: boolean("required", false, "Props")
      },
      disabled: {
        default: boolean("disabled", false, "Props")
      }
    },
    data() {
      return {
        value: "Adam"
      };
    },
    template: `<SfInput
      v-model="value"
      :label="label"
      :name="name"
      :valid="valid"
      :error-message="errorMessage"
      :required="required"
      :disabled="disabled">
      <template #errorMessage="{errorMessage}">
        <SfIcon icon="info_shield" size="10px" color="#E22326" style="margin-right: 4px; display: inline-block"/> CUSTOM ERROR MESSAGE
      </template>
    </SfInput>`
  }));
