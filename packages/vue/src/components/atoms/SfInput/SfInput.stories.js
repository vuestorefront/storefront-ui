/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import SfInput from "./SfInput.vue";
import SfIcon from "../SfIcon/SfIcon.vue";

storiesOf("Atoms|Input", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfInput },
    props: {
      label: {
        default: text("label (prop)", "First name")
      },
      name: {
        default: text("name (prop)", "first-name")
      },
      errorMessage: {
        default: text("error-message (prop)", "Field is required.")
      },
      valid: {
        default: boolean("valid (prop)", true)
      },
      required: {
        default: boolean("required (prop)", true)
      },
      disabled: {
        default: boolean("disabled (prop)", false)
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
        default: text("label (prop)", "First name")
      },
      name: {
        default: text("name (prop)", "first-name")
      },
      errorMessage: {
        default: text("error-message (prop)", "Field is required.")
      },
      valid: {
        default: boolean("valid (prop)", true)
      },
      required: {
        default: boolean("required (prop)", true)
      },
      disabled: {
        default: boolean("disabled (prop)", false)
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
        default: text("label (prop)", "First name")
      },
      name: {
        default: text("name (prop)", "first-name")
      },
      errorMessage: {
        default: text("error-message (prop)", "Field is required.")
      },
      valid: {
        default: boolean("valid (prop)", false)
      },
      required: {
        default: boolean("required (prop)", false)
      },
      disabled: {
        default: boolean("disabled (prop)", false)
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
