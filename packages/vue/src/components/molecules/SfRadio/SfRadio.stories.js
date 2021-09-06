import { SfRadio } from "@storefront-ui/vue";
export default {
  title: "Components/Molecules/Radio",
  component: SfRadio,
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: ["sf-radio--transparent", ""],
      },
      table: {
        category: "CSS Modifiers",
      },
      description: "CSS classes modifiers",
    },
    selected: {
      control: "text",
      table: {
        category: "Props",
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
      },
      defaultValue: "",
      description: "Label for option",
    },
    details: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
      description: "Option details",
    },
    description: {
      control: "text",
      table: {
        category: "Props",
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
        defaultValue: {
          summary: false,
        },
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
    v-model="selected"
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
};

export const Selected = Template.bind({})
Selected.args = {
  ...Common.args,
  selected: "store",
};

export const TransparentSelected = Template.bind({})
TransparentSelected.args = {
  ...Selected.args,
  classes: "sf-radio--transparent",
};

export const Disabled = Template.bind({})
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
