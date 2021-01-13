import { SfInput, SfIcon } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Input",
  component: SfInput,
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: ["", "sf-input--filled", "sf-input--outline"],
      },
      table: {
        category: "CSS Modifiers",
      },
    },
    type: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    label: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    name: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    errorMessage: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    valid: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
    required: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
    disabled: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
    hasShowPassword: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
    placeholder: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    value: {
      control: "text",
    },
    onChange: { action: "input changed!", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfInput },
  props: Object.keys(argTypes),
  data() {
    return {
      inputValue: this.value,
    };
  },
  template: `
  <SfInput
    v-model="inputValue"
    :class="classes"
    :type="type"
    :label="label"
    :name="name"
    :valid="valid"
    :error-message="errorMessage"
    :required="required"
    :disabled="disabled"
    :has-show-password="hasShowPassword"
    @change="onChange"
  />`,
});

export const Common = Template.bind({});
Common.args = {
  type: "text",
  label: "First name",
  name: "name",
};

export const WithError = Template.bind({});
WithError.args = {
  ...Common.args,
  errorMessage: "Required",
  valid: false,
};

export const Invalid = Template.bind({});
Invalid.args = {
  ...WithError.args,
};

export const AsRequired = Template.bind({});
AsRequired.args = {
  ...Common.args,
  required: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Common.args,
  disabled: true,
};

export const ShowPassword = Template.bind({});
ShowPassword.args = {
  ...Common.args,
  type: "password",
  hasShowPassword: true,
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  ...Common.args,
  placeholder: "I'm a placeholder",
};

export const Filled = Template.bind({});
Filled.args = {
  ...Common.args,
  classes: "sf-input--filled",
  value: "Storefront",
};

export const WithLabelSlot = (args, { argTypes }) => ({
  components: { SfInput, SfIcon },
  props: Object.keys(argTypes),
  data() {
    return {
      inputValue: this.value,
    };
  },
  template: `
  <SfInput
    v-model="inputValue"
    :type="type"
    :label="label"
    :name="name"
    :valid="valid"
    :error-message="errorMessage"
    :required="required"
    :disabled="disabled"
    :has-show-password="hasShowPassword"
    @change="onChange"
    >
    <template #label="{label}">
      <SfIcon 
        icon="heart_fill" 
        size="10px" 
        :style="disabled ? {'--icon-color': 'var(--c-text-disabled)'} : ''"
        style="margin-right: 4px; display: inline-block"
      />
      {{label}}
    </template>
  </SfInput>`,
});

WithLabelSlot.args = {
  ...Common.args,
};

export const WithErrorSlot = (args, { argTypes }) => ({
  components: { SfInput, SfIcon },
  props: Object.keys(argTypes),
  data() {
    return {
      inputValue: this.value,
    };
  },
  template: `
  <SfInput
    v-model="inputValue"
    :type="type"
    :label="label"
    :name="name"
    :valid="valid"
    :error-message="errorMessage"
    :required="required"
    :disabled="disabled"
    :has-show-password="hasShowPassword"
    @change="onChange"
    >
    <template #error-message="{errorMessage}">
      <div>
        <SfIcon icon="info_shield" size="10px" color="#E22326" style="margin-right: 4px; display: inline-block"/> 
        CUSTOM ERROR MESSAGE
      </div>
    </template>
  </SfInput>`,
});

WithErrorSlot.args = {
  ...Invalid.args,
};
