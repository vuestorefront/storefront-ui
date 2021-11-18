import { SfRadio } from "@storefront-ui/vue";
export default {
  title: "Components/Molecules/Radio",
  component: SfRadio,
  parameters: {
    cssprops: {},

    docs: {
      description: {
        component: "Radio button component with label and description.",
      },
    },
  },
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: ["sf-radio--transparent", ""],
      },
      table: {
        category: "CSS Modifiers",
      },
      description: "CSS classes to modify component styling",
    },
    selected: {
      control: "text",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "Value of the selected option",
    },
    name: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
      description: "Name of the option",
    },
    value: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
      description: "Value of the option",
    },
    label: {
      control: "text",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "Label for option",
    },
    details: {
      control: "text",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      type: {
        summary: "string",
      },
      defaultValue: "",
      description: "Option details",
    },
    description: {
      control: "text",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "Additional description to the radio option to display",
    },
    disabled: {
      control: "boolean",
      table: {
        category: "Props",
        defaultValue: {
          summary: false,
        },
      },
      defaultValue: "",
      description: "Indicate if this option is disabled",
    },
    required: {
      control: "boolean",
      table: {
        category: "Props",
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: false,
        },
      },
      defaultValue: false,
    },
    "v-model": {
      table: {
        disable: true,
      },
    },
    change: {
      action: "Toggle selection: change event",
      table: { category: "Events" },
    },
    input: {
      action: "Toggle selection: input event",
      table: { category: "Events" },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfRadio },
  props: Object.keys(argTypes),
  data() {
    return {
      selectedValue: "",
    };
  },
  template: `
  <SfRadio
    :class="classes"
    :label="label"
    :details="details"
    :description="description"
    :name="name"
    :value="value"
    :disabled="disabled"
    :required="required"
    v-model="selectedValue"
    @change="change"
    @input="input"
  />`,
});

export const Common = Template.bind({});
Common.args = {
  label: "Pickup in the store",
  details: "Delivery from 4-6 business days",
  description:
    "Novelty! From now on you have the option of picking up an order in the selected InPack parceler. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
  name: "Shipping",
  value: "store",
  disabled: false,
};

export const TransparentSelected = Template.bind({});
TransparentSelected.args = {
  ...Common.args,
  classes: "sf-radio--transparent",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Common.args,
  disabled: true,
};

export const UseCheckmarkSlot = (args, { argTypes }) => ({
  components: { SfRadio },
  props: Object.keys(argTypes),
  template: `
  <SfRadio
    :class="classes"
    :label="label"
    :details="details"
    :description="description"
    :name="name"
    :value="value"
    :disabled="disabled"
    :required="required"
    @change="change"
    @input="input"
  >
    <template #checkmark="{isChecked, disabled}">
      <div v-if="isChecked">😀</div>
      <div v-else>😔</div>
    </template>
  </SfRadio>`,
});
UseCheckmarkSlot.args = { ...Common.args };

export const UseLabelSlot = (args, { argTypes }) => ({
  components: { SfRadio },
  props: Object.keys(argTypes),
  template: `
  <SfRadio
    :class="classes"
    :label="label"
    :details="details"
    :description="description"
    :name="name"
    :value="value"
    :disabled="disabled"
    :required="required"
    @change="change"
    @input="input"
  >
    <template #label="{label, isChecked, disabled}">
      CUSTOM LABEL
    </template>
  </SfRadio>`,
});
UseLabelSlot.args = { ...Common.args };

export const UseDetailsSlot = (args, { argTypes }) => ({
  components: { SfRadio },
  props: Object.keys(argTypes),
  template: `
  <SfRadio
    :class="classes"
    :label="label"
    :details="details"
    :description="description"
    :name="name"
    :value="value"
    :disabled="disabled"
    :required="required"
    @change="change"
    @input="input"
  >
    <template #details="{details}">
      CUSTOM DETAILS
    </template>
  </SfRadio>`,
});
UseDetailsSlot.args = { ...Common.args };

export const UseDescriptionSlot = (args, { argTypes }) => ({
  components: { SfRadio },
  props: Object.keys(argTypes),
  template: `
  <SfRadio
    :class="classes"
    :label="label"
    :details="details"
    :description="description"
    :name="name"
    :value="value"
    :disabled="disabled"
    :required="required"
    @change="change"
    @input="input"
  >
    <template #description="{description}">
      CUSTOM DESCRIPTION
    </template>
  </SfRadio>`,
});
UseDescriptionSlot.args = { ...Common.args };
