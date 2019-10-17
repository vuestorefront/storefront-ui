// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {withKnobs, text, select, boolean} from "@storybook/addon-knobs";

import SfInput from "./SfInput.vue";

storiesOf("Atoms|Input", module)
  .addDecorator(withKnobs)
  .add(
    "Default",
    () => ({
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
        },
      },
      data(){
        return {
          value: ""
        }
      },
      template: `<SfInput
        v-model="value"
        :label="label"
        :name="name"
        :valid="valid"
        :error-message="errorMessage"
        :required="required"
        :disabled="disabled"/>`
    })
  )
  .add(
    "[slot] label",
    () => ({
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
        },
      },
      data(){
        return {
          value: ""
        }
      },
      template: `<SfInput
        v-model="value"
        :label="label"
        :name="name"
        :valid="valid"
        :error-message="errorMessage"
        :required="required"
        :disabled="disabled">
        <template #label>
          <span></span>
        </template>
      </SfInput>`
    })
  )
  .add(
    "[slote] errorMessage",
    () => ({
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
          default: boolean("valid (prop)", false)
        },
        required: {
          default: boolean("required (prop)", true)
        },
        disabled: {
          default: boolean("disabled (prop)", false)
        },
      },
      data(){
        return {
          value: ""
        }
      },
      template: `<SfInput
        v-model="value"
        :label="label"
        :name="name"
        :valid="valid"
        :error-message="errorMessage"
        :required="required"
        :disabled="disabled">
        <template #errorMessage>
          <span></span>
        </template>
      </SfInput>`
    })
  );
