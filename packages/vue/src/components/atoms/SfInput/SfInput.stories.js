import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  boolean,
  optionsKnob as options,
  select,
} from "@storybook/addon-knobs";
import { icons } from "@storefront-ui/shared/icons/icons";
import { iconColorsValues as colors } from "@storefront-ui/shared/variables/colors";
import { SfInput, SfIcon } from "@storefront-ui/vue";
const iconsNames = Object.keys(icons);
storiesOf("Atoms|Input", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfInput, SfIcon },
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
        default: text("errorMessage", "Something is wrong.", "Props"),
      },
      valid: {
        default: boolean("valid", true, "Props"),
      },
      hintMessage: {
        default: text("hintMessage", "Required", "Props"),
      },
      required: {
        default: boolean("required", true, "Props"),
      },
      disabled: {
        default: boolean("disabled", false, "Props"),
      },
      infoMessage: {
        default: text("infoMessage", "", "Props"),
      },
      hasShowPassword: {
        default: boolean("hasShowPassword", false, "Props"),
      },
      icon: {
        default: select("icon", ["", ...iconsNames], "", "Props"),
      },
      colorIcon: {
        default: select("colorIcon", ["", ...colors], "", "Props"),
      },
      sizeIcon: {
        default: text("sizeIcon", "xxs", "Props"),
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
    template: `<div style="padding: 10px">
      <SfInput
        v-model="value"
        :type="type"
        :label="label"
        :name="name"
        :valid="valid"
        :error-message="errorMessage"
        :hintMessage="hintMessage" 
        :infoMessage="infoMessage"
        :required="required"
        :disabled="disabled"
        :icon="icon"
        :colorIcon="colorIcon"
        :sizeIcon="sizeIcon"
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
        default: text("errorMessage", "Something is wrong", "Props"),
      },
      valid: {
        default: boolean("valid", true, "Props"),
      },
      hintMessage: {
        default: text("hintMessage", "Required", "Props"),
      },
      required: {
        default: boolean("required", true, "Props"),
      },
      disabled: {
        default: boolean("disabled", false, "Props"),
      },
      infoMessage: {
        default: text("infoMessage", "", "Props"),
      },
      hasShowPassword: {
        default: boolean("hasShowPassword", false, "Props"),
      },
      icon: {
        default: select("icon", ["", ...iconsNames], "", "Props"),
      },
      colorIcon: {
        default: select("colorIcon", ["", ...colors], "", "Props"),
      },
      sizeIcon: {
        default: text("sizeIcon", "xxs", "Props"),
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
    template: `<SfInput
        v-model="value"
        :type="type"
        :label="label"
        :name="name"
        :valid="valid"
        :error-message="errorMessage"
        :hintMessage="hintMessage" 
        :infoMessage="infoMessage"
        :required="required"
        :disabled="disabled"
        :icon="icon"
        :colorIcon="colorIcon"
        :sizeIcon="sizeIcon"
        :has-show-password="hasShowPassword"
        :class="customClass"
        :placeholder="placeholder"
        >
      <template #label="{label}">
            {{label}} <SfIcon icon="heart_fill" size="10px" style="margin-right: 4px; display: inline-block"/>
      </template>
    </SfInput>`,
  }))
  .add("[slot] info-text", () => ({
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
        default: text("errorMessage", "Something is wrong", "Props"),
      },
      valid: {
        default: boolean("valid", true, "Props"),
      },
      hintMessage: {
        default: text("hintMessage", "Required", "Props"),
      },
      required: {
        default: boolean("required", true, "Props"),
      },
      disabled: {
        default: boolean("disabled", false, "Props"),
      },
      infoMessage: {
        default: text("infoMessage", "", "Props"),
      },
      hasShowPassword: {
        default: boolean("hasShowPassword", false, "Props"),
      },
      icon: {
        default: select("icon", ["", ...iconsNames], "", "Props"),
      },
      colorIcon: {
        default: select("colorIcon", ["", ...colors], "", "Props"),
      },
      sizeIcon: {
        default: text("sizeIcon", "xxs", "Props"),
      },
      placeholder: {
        default: text("placeholder", "", "Props"),
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
      :hintMessage="hintMessage" 
      :infoMessage="infoMessage"
      :required="required"
      :disabled="disabled"
      :icon="icon"
      :colorIcon="colorIcon"
      :sizeIcon="sizeIcon"
      :has-show-password="hasShowPassword"
      :class="customClass"
      :placeholder="placeholder"
      aria-label="Input label"
      >
      <template #show-hint-message="{hintMessage}">
        <div>          
          CUSTOM HELPER TEXT
        </div>
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
        default: text("errorMessage", "Something is wrong", "Props"),
      },
      valid: {
        default: boolean("valid", false, "Props"),
      },
      hintMessage: {
        default: text("hintMessage", "Required", "Props"),
      },
      required: {
        default: boolean("required", true, "Props"),
      },
      disabled: {
        default: boolean("disabled", false, "Props"),
      },
      infoMessage: {
        default: text("infoMessage", "", "Props"),
      },
      hasShowPassword: {
        default: boolean("hasShowPassword", false, "Props"),
      },
      icon: {
        default: select("icon", ["", ...iconsNames], "", "Props"),
      },
      colorIcon: {
        default: select("colorIcon", ["", ...colors], "", "Props"),
      },
      sizeIcon: {
        default: text("sizeIcon", "xxs", "Props"),
      },
      placeholder: {
        default: text("placeholder", "", "Props"),
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
      :hintMessage="hintMessage" 
      :infoMessage="infoMessage"
      :required="required"
      :disabled="disabled"
      :icon="icon"
      :colorIcon="colorIcon"
      :sizeIcon="sizeIcon"
      :has-show-password="hasShowPassword"
      :class="customClass"
      :placeholder="placeholder"
      aria-label="Input label"
      >
      <template #show-error-message="{errorMessage}">
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
        default: text("errorMessage", "Something is wrong", "Props"),
      },
      valid: {
        default: boolean("valid", true, "Props"),
      },
      hintMessage: {
        default: text("hintMessage", "Required", "Props"),
      },
      required: {
        default: boolean("required", true, "Props"),
      },
      disabled: {
        default: boolean("disabled", false, "Props"),
      },
      infoMessage: {
        default: text("infoMessage", "", "Props"),
      },
      hasShowPassword: {
        default: boolean("hasShowPassword", true, "Props"),
      },
      icon: {
        default: select("icon", ["", ...iconsNames], "", "Props"),
      },
      colorIcon: {
        default: select("colorIcon", ["", ...colors], "", "Props"),
      },
      sizeIcon: {
        default: text("sizeIcon", "xxs", "Props"),
      },
      placeholder: {
        default: text("placeholder", "", "Props"),
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
      :hintMessage="hintMessage" 
      :infoMessage="infoMessage"
      :required="required"
      :disabled="disabled"
      :icon="icon"
      :colorIcon="colorIcon"
      :sizeIcon="sizeIcon"
      :has-show-password="hasShowPassword"
      :class="customClass"
      :placeholder="placeholder"
      aria-label="Input label"
      >
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
        default: text("errorMessage", "Something is wrong", "Props"),
      },
      valid: {
        default: boolean("valid", true, "Props"),
      },
      hintMessage: {
        default: text("hintMessage", "Required", "Props"),
      },
      required: {
        default: boolean("required", true, "Props"),
      },
      disabled: {
        default: boolean("disabled", false, "Props"),
      },
      infoMessage: {
        default: text("infoMessage", "", "Props"),
      },
      hasShowPassword: {
        default: boolean("hasShowPassword", false, "Props"),
      },
      icon: {
        default: select("icon", ["", ...iconsNames], "", "Props"),
      },
      colorIcon: {
        default: select("colorIcon", ["", ...colors], "", "Props"),
      },
      sizeIcon: {
        default: text("sizeIcon", "xxs", "Props"),
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
    template: `<SfInput
      v-model="value"
      :type="type"
      :label="label"
      :name="name"
      :valid="valid"
      :error-message="errorMessage"
      :hintMessage="hintMessage" 
      :infoMessage="infoMessage"
      :required="required"
      :disabled="disabled"
      :icon="icon"
      :colorIcon="colorIcon"
      :sizeIcon="sizeIcon"
      :has-show-password="hasShowPassword"
      :class="customClass"
      :placeholder="placeholder"
      aria-label="Input label"
      />`,
  }));
