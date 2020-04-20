import {
  withKnobs,
  text,
  boolean,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import SfInput from "./SfInput.vue";
import SfIcon from "../SfIcon/SfIcon.vue";
export default {
  title: "Atoms|Input",
  decorators: [withKnobs],
};
export const Common = () => ({
  components: { SfInput },
  props: {
    customClass: {
      default: options(
        "CSS modifiers",
        {
          "sf-input--filled": "sf-input--filled",
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
    ariaLabel: {
      default: text("ariaLabel", "First name", "Props"),
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
      :aria-label="ariaLabel"
      :has-show-password="hasShowPassword"
      :class="customClass"
      />`,
});
export const SlotLabel = () => ({
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
    ariaLabel: {
      default: text("ariaLabel", "First name", "Props"),
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
        :aria-label="ariaLabel"
      >
      <template #label="{label}">
            <SfIcon icon="heart_fill" size="10px" style="margin-right: 4px; display: inline-block"/>{{label}}
      </template>
    </SfInput>`,
});
SlotLabel.story = {
  name: "[slot] label",
};
export const SlotErrorMessage = () => ({
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
    ariaLabel: {
      default: text("ariaLabel", "First name", "Props"),
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
      :aria-label="ariaLabel"
      >
      <template #error-message="{errorMessage}">
        <div>
          <SfIcon icon="info_shield" size="10px" color="#E22326" style="margin-right: 4px; display: inline-block"/> 
          CUSTOM ERROR MESSAGE
        </div>
      </template>
    </SfInput>`,
});
SlotErrorMessage.story = {
  name: "[slot] error-message",
};
export const SlotWithPasswordIcon = () => ({
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
      default: boolean("valid", false, "Props"),
    },
    required: {
      default: boolean("required", false, "Props"),
    },
    disabled: {
      default: boolean("disabled", false, "Props"),
    },
    ariaLabel: {
      default: text("ariaLabel", "First name", "Props"),
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
      :aria-label="ariaLabel"
      >
      <template #error-message="{errorMessage}">
        <SfIcon icon="info_shield" size="10px" color="#E22326" style="margin-right: 4px; display: inline-block"/> CUSTOM ERROR MESSAGE
      </template>
    </SfInput>`,
});
SlotWithPasswordIcon.story = {
  name: "[slot] with password icon",
};
export const WithModifierFilled = () => ({
  components: { SfInput },
  props: {
    customClass: {
      default: options(
        "CSS modifiers",
        {
          "sf-input--filled": "sf-input--filled",
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
    ariaLabel: {
      default: text("ariaLabel", "First name", "Props"),
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
      :aria-label="ariaLabel"
      :has-show-password="hasShowPassword"
      :class="customClass"
      />`,
});
WithModifierFilled.story = {
  name: "with modifier --filled",
};
