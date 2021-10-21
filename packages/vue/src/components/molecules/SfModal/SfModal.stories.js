import { SfModal } from "@storefront-ui/vue";
export default {
  title: "Components/Molecules/Modal",
  component: SfModal,
  parameters: {
    cssprops: {
      "modal-width": {
        value: "29.375rem",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "modal-top": {
        value: "50%",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "modal-left": {
        value: "50%",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "modal-bottom": {
        value: "none",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "modal-right": {
        value: "none",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "modal-transform": {
        value: "translate3d(-50%, -50%, 0)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "modal-height": {
        value: "auto",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "modal-max-height": {
        value: "90%",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "modal-content-padding": {
        value: "var(--spacer-sm) var(--spacer-lg)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },

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
    close: { action: "Close modal clicked", table: { category: "Events" } },
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
