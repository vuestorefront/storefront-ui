import { SfModal } from "@storefront-ui/vue";
export default {
  title: "Components/Molecules/Modal",
  component: SfModal,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "modal-top": { value: "0", control: "text" },
      "modal-right": { value: "0", control: "text" },
      "modal-bottom": { value: "0", control: "text" },
      "modal-left": { value: "0", control: "text" },
      "modal-index": { value: "1", control: "text" },
      "modal-transform": { value: "", control: "text" },
      "modal-flex-direction": { value: "column", control: "text" },
      "modal-width": { value: "", control: "text" },
      "modal-height": { value: "", control: "text" },
      "modal-border": { value: "", control: "text" },
      "modal-max-height": { value: "", control: "text" },
      "modal-background": { value: "var(--c-white)", control: "text" },
      "modal-content-padding": {
        value: "var(--spacer-base) var(--spacer-sm)",
        control: "text",
      },
      "modal-content-font": { value: "", control: "text" },
      "modal-content-font-weight": {
        value: "var(--font-weight--light)",
        control: "text",
      },
      "modal-content-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "modal-content-font-line-height": { value: "1.6", control: "text" },
      "modal-content-font-family": {
        value: "var(--font-family--primary)",
        control: "text",
      },
      "modal-close-right": { value: "var(--spacer-sm)", control: "text" },
      "modal-close-top": { value: "var(--spacer-sm)", control: "text" },
    },
    // end of code generated automatically
    docs: {
      inlineStories: false,
      iframeHeight: "300px",
      description: {
        component:
          "Modal component with overlay. Example usage can involve many cases like informative or decision dialogue.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      table: {
        category: "Props",
      },
      description: "Heading title of the modal",
    },
    visible: {
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
      description: "Visibility of the modal",
    },
    overlay: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: true,
      description: "Whether to show the overlay",
    },
    cross: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: true,
      description: "Cross closing modal button",
    },
    persistent: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: false,
      description: "If true clicking outside will not dismiss the modal",
    },
    transitionOverlay: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "sf-fade",
      description:
        "Overlay transition effect. Could be one of [the default ones](https://docs.storefrontui.io/?path=/docs/utilities-transitions-docs--page).",
    },
    transitionModal: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "sf-fade",
      description:
        "Modal transition effect. Could be one of [the default ones](https://docs.storefrontui.io/?path=/docs/utilities-transitions-docs--page).",
    },
    "v-model": {
      table: {
        disable: true,
      },
    },
    close: {
      action: "close event emitted",
      table: { category: "Events", type: { summary: null } },
      description:
        "Emits close event when clicked on close button or outside modal",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfModal },
  props: Object.keys(argTypes),
  template: `
  <SfModal
    :visible="visible"
    :title="title"
    :overlay="overlay"
    :cross="cross"
    :persistent="persistent"
    @close="close"
  >
    <p>HELLO STOREFRONT UI!</p>
    <form action="">
      <input type="text">
      <input type="text">
      <button type="button">hello</button>
    </form>
  </SfModal>`,
});

export const Common = Template.bind({});
Common.args = {
  title: "My title",
  visible: true,
};

export const WithoutOverlay = Template.bind({});
WithoutOverlay.args = {
  ...Common.args,
  overlay: false,
};

export const Persistent = Template.bind({});
Persistent.args = {
  ...Common.args,
  persistent: true,
};

export const Cross = Template.bind({});
Cross.args = {
  ...Common.args,
  cross: true,
};

export const UseCloseSlot = (args, { argTypes }) => ({
  components: { SfModal },
  props: Object.keys(argTypes),
  template: `
  <SfModal
    :visible="visible"
    :title="title"
    :overlay="overlay"
    :cross="cross"
    :persistent="persistent"
    @close="close"
  >
    HELLO STOREFRONT UI!
    <template #close>
      close
    </template>
  </SfModal>`,
});
UseCloseSlot.args = {
  ...Common.args,
};
