import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  boolean,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import { SfInput, SfIcon } from "@storefront-ui/vue";
storiesOf("Atoms|Input", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfInput },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-input--filled": "sf-input--filled",
            "sf-input--outline": "sf-input--outline",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      type: {
        default: text("type", "text", "Props"),
      },
      label: {
        default: text("label", "First name", "Props"),
      },
      name: {
        default: text("name", "first-name", "Props"),
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
      hasShowPassword: {
        default: boolean("hasShowPassword", false, "Props"),
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
    template: `
      <div style="padding: 10px">
      <SfInput
          v-model="value"
          :type="type"
          :label="label"
          :name="name"
          :valid="valid"
          :error-message="errorMessage"
          :required="required"
          :disabled="disabled"
          :has-show-password="hasShowPassword"
          :class="customClass"
          :placeholder="placeholder"
      />
      </div>`,
  }))
  .add("[slot] label", () => ({
    components: {
      SfInput,
      SfIcon,
    },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-input--filled": "sf-input--filled",
            "sf-input--outline": "sf-input--outline",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      type: {
        default: text("type", "text", "Props"),
      },
      label: {
        default: text("label", "First name", "Props"),
      },
      name: {
        default: text("name", "first-name", "Props"),
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
      hasShowPassword: {
        default: boolean("hasShowPassword", false, "Props"),
      },
    },
    data() {
      return {
        value: "",
      };
    },
    template: `<SfInput
        v-model="value"
        :type="type"
        :label="label"
        :name="name"
        :valid="valid"
        :error-message="errorMessage"
        :required="required"
        :disabled="disabled"
        :has-show-password="hasShowPassword"
        >
      <template #label="{label}">
            <SfIcon 
              icon="heart_fill" 
              size="10px" 
              :style="disabled ? {'--icon-color': 'var(--c-text-disabled)'} : ''"
              style="margin-right: 4px; display: inline-block"
            />{{label}}
      </template>
    </SfInput>`,
  }))
  .add("[slot] error-message", () => ({
    components: {
      SfInput,
      SfIcon,
    },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-input--filled": "sf-input--filled",
            "sf-input--outline": "sf-input--outline",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      type: {
        default: text("type", "text", "Props"),
      },
      label: {
        default: text("label", "First name", "Props"),
      },
      name: {
        default: text("name", "first-name", "Props"),
      },
      errorMessage: {
        default: text("errorMessage", "Required.", "Props"),
      },
      valid: {
        default: boolean("valid", false, "Props"),
      },
      required: {
        default: boolean("required", false, "Props"),
      },
      disabled: {
        default: boolean("disabled", false, "Props"),
      },
      hasShowPassword: {
        default: boolean("hasShowPassword", false, "Props"),
      },
    },
    data() {
      return {
        value: "Adam",
      };
    },
    template: `<SfInput
      v-model="value"
      :type="type"
      :label="label"
      :name="name"
      :valid="valid"
      :error-message="errorMessage"
      :required="required"
      :disabled="disabled"
      :has-show-password="hasShowPassword"
      >
      <template #error-message="{errorMessage}">
        <div>
          <SfIcon icon="info_shield" size="10px" color="#E22326" style="margin-right: 4px; display: inline-block"/> 
          CUSTOM ERROR MESSAGE
        </div>
      </template>
    </SfInput>`,
  }))
  .add("[slot] with password icon", () => ({
    components: {
      SfInput,
      SfIcon,
    },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-input--filled": "sf-input--filled",
            "sf-input--outline": "sf-input--outline",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      type: {
        default: text("type", "password", "Props"),
      },
      label: {
        default: text("label", "First name", "Props"),
      },
      name: {
        default: text("name", "first-name", "Props"),
      },
      errorMessage: {
        default: text("errorMessage", "Required.", "Props"),
      },
      valid: {
        default: boolean("valid", true, "Props"),
      },
      required: {
        default: boolean("required", false, "Props"),
      },
      disabled: {
        default: boolean("disabled", false, "Props"),
      },
      hasShowPassword: {
        default: boolean("hasShowPassword", true, "Props"),
      },
    },
    data() {
      return {
        value: "Adam",
      };
    },
    template: `<SfInput
      v-model="value"
      :type="type"
      :label="label"
      :name="name"
      :valid="valid"
      :error-message="errorMessage"
      :required="required"
      :disabled="disabled"
      :has-show-password="hasShowPassword"
      >
      <template #error-message="{errorMessage}">
        <div style="display: flex; align-items: center">
          <SfIcon icon="info_shield" size="0.875rem" color="#E22326" style="margin-right: 4px; display: inline-block"/>
          <span>CUSTOM ERROR MESSAGE</span>
        </div>
      </template>
    </SfInput>`,
  }))
  .add("with modifier --filled", () => ({
    components: { SfInput },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-input--filled": "sf-input--filled",
            "sf-input--outline": "sf-input--outline",
          },
          "sf-input--filled",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      type: {
        default: text("type", "text", "Props"),
      },
      label: {
        default: text("label", "First name", "Props"),
      },
      name: {
        default: text("name", "first-name", "Props"),
      },
      errorMessage: {
        default: text("errorMessage", "Required.", "Props"),
      },
      valid: {
        default: boolean("valid", true, "Props"),
      },
      required: {
        default: boolean("required", false, "Props"),
      },
      disabled: {
        default: boolean("disabled", false, "Props"),
      },
      hasShowPassword: {
        default: boolean("hasShowPassword", false, "Props"),
      },
    },
    data() {
      return {
        value: "",
      };
    },
    template: `<SfInput
      v-model="value"
      :type="type"
      :label="label"
      :name="name"
      :valid="valid"
      :error-message="errorMessage"
      :required="required"
      :disabled="disabled"
      :has-show-password="hasShowPassword"
      :class="customClass"
      />`,
  }));
