import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  boolean,
  object,
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
      icon: {
        default: object(
          "icon",
          {
            icon: "show_password",
            size: "1.5rem",
          },
          "Props"
        ),
      },
      button: {
        default: object(
          "button",
          {
            disabled: false,
          },
          "Props"
        ),
      },
    },
    data() {
      return {
        value: "",
      };
    },
    template: `<div style="padding: 10px">
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
        :icon="icon"
        :button="button"
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
      icon: {
        default: object(
          "icon",
          {
            icon: "show_password",
            size: "1.5rem",
          },
          "Props"
        ),
      },
      button: {
        default: object(
          "button",
          {
            disabled: false,
          },
          "Props"
        ),
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
        :icon="icon"
        :button="button"
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
      icon: {
        default: object(
          "icon",
          {
            icon: "show_password",
            size: "1.5rem",
          },
          "Props"
        ),
      },
      button: {
        default: object(
          "button",
          {
            disabled: false,
          },
          "Props"
        ),
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
      :icon="icon"
      :button="button"
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
      <template #show-password>
        <SfButton class="sf-input__password-button">
          <SfIcon class="sf-input__password-icon" icon="info_shield" size="1.5rem" color="#E22326"/>      
        </SfButton>
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
      icon: {
        default: object(
          "icon",
          {
            icon: "show_password",
            size: "1.5rem",
          },
          "Props"
        ),
      },
      button: {
        default: object(
          "button",
          {
            disabled: false,
          },
          "Props"
        ),
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
      :icon="icon"
      :button="button"
      />`,
  }));
