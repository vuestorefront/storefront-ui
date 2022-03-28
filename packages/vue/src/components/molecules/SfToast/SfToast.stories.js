import { SfToast } from "@storefront-ui/vue";

export default {
  title: "Components/Molecules/Toast",
  component: SfToast,
  parameters: {
    // do not modify cssprops manually, they are generated automatically  by update-components-docs script
    cssprops: {
      "toast-item-background-color": { value: "", control: "text" },
      "toast-item-color": {
        value: "var(--c-white)",
        control: "text",
      },
      "toast-item-font": { value: "", control: "text" },
      "toast-item-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "toast-item-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "toast-item-font-line-height": { value: "1.6", control: "text" },
      "toast-item-font-family": {
        value: "var(--font-family--primary)",
        control: "text",
      },
      "toast-item-padding": {
        value: "var(--spacer-xs) var(--spacer-base)",
        control: "text",
      },
      "toast-item-bottom-margin": {
        value: "0 0 var(--spacer-xs) 0",
        control: "text",
      },
      "toast-item-opacity": { value: "", control: "text" },
      "toast-item-border-radius": { value: "", control: "text" },
      "toast-item-display": { value: "", control: "text" },
      "toast-position": { value: "", control: "text" },
      "toast-padding": { value: "0", control: "text" },
      "toast-z-index": { value: "", control: "text" },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "The component used for displaying short text messages for user.",
      },
    },
  },
  decorators: [
    () => ({
      template: "<div style='height: 70px; margin: 0 100px'><story/></div>",
    }),
  ],
  argTypes: {
    message: {
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
      description: "Message that will be displayed in Toast.",
      defaultValue: "",
    },
    type: {
      control: {
        type: "select",
        options: ["", "secondary", "info", "success", "warning", "danger"],
      },
      table: {
        category: "Props",
      },
      description:
        "Toast type ('secondary', 'info', 'success', 'warning', 'danger'). Check 'Knobs' section to see how they look like.",
      defaultValue: "secondary",
    },
    position: {
      control: {
        type: "select",
        options: [
          "top",
          "top-left",
          "top-right",
          "bottom",
          "bottom-right",
          "bottom-left",
        ],
      },
      table: {
        category: "Props",
      },
      description:
        "Toast position ('top', 'top-left', 'top-right', 'bottom', 'bottom-right', 'bottom-left'). Check 'Knobs' section to see how they look like.",
      defaultValue: "top",
    },
    transition: {
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
      description: "Transition name that will be applied in Toast.",
      defaultValue: "sf-collapse-top",
    },
    duration: {
      control: "text",
      table: {
        category: "Props",
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: "",
        },
      },
      description: "Duration time that will be applied in Toast.",
      defaultValue: "2000",
    },
    default: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Default slot for `SfToast` component. This slot content will replace default message <span> tag",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfToast },
  props: Object.keys(argTypes),
  template: `
    <SfToast 
      style="position: absolute;" 
      :position="position"
      :transition="transition"
    >
      <SfToastItem
        message="Toast example message"
        :type="type"
      />
      <SfToastItem
        message="Toast example message"
        :type="type"
      />
    </SfToast>`,
});

export const Default = Template.bind({});
Default.args = {
  message: "Item added to cart",
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args,
  type: "secondary",
};
export const Info = Template.bind({});
Info.args = {
  ...Default.args,
  type: "info",
};

export const Success = Template.bind({});
Success.args = {
  ...Default.args,
  type: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  ...Default.args,
  type: "warning",
};

export const Danger = Template.bind({});
Danger.args = {
  ...Default.args,
  type: "danger",
};

export const WithTopRightPosition = Template.bind({});
WithTopRightPosition.args = {
  ...Default.args,
  position: "top-right",
};

export const WithTopLeftPosition = Template.bind({});
WithTopLeftPosition.args = {
  ...Default.args,
  position: "top-left",
};

export const WithBottomPosition = Template.bind({});
WithBottomPosition.args = {
  ...Default.args,
  position: "bottom",
  transition: "sf-collapse-bottom",
};

export const WithBottomLeftPosition = Template.bind({});
WithBottomLeftPosition.args = {
  ...Default.args,
  position: "bottom-left",
  transition: "sf-collapse-bottom",
};

export const WithBottomRightPosition = Template.bind({});
WithBottomRightPosition.args = {
  ...Default.args,
  position: "bottom-right",
  transition: "sf-collapse-bottom",
};

export const WithDefaultSlot = (args, { argTypes }) => ({
  components: { SfToast },
  props: Object.keys(argTypes),
  template: `
    <SfToast
      style="position: absolute; top: 10px; bottom: 10px; margin: 0 100px;"
      :position="position"
      :transition="transition"
    >
      <SfToastItem
        type="success"
        message="CUSTOM SLOT"
      >
        <template #default="{ message }">
          <p style="color: white; width: 300px; margin: 0; text-align: center">{{ message }}</p>
        </template>
      </SfToastItem>
    </SfToast>`,
});
