import { SfSidebar } from "@storefront-ui/vue";
export default {
  title: "Components/Organisms/Sidebar",
  component: SfSidebar,
  parameters: {
    cssprops: {
      "heading-title-color": {
        value: "var(--c-dark-variant)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "heading-title-font-size": {
        value: "var(--font-size--xl)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "heading-title-font-weight": {
        value: "var(--font-weight--semibold)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "heading-description-font-size": {
        value: "var(--font-size--xl)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "circle-icon-position": {
        value: "absolute",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "sidebar-width": {
        value: "25.5rem",
        control: "text",
      },
      "sidebar-content-padding": {
        value: "var(--spacer-base) var(--spacer-xl)",
        control: "text",
      },
      "sidebar-left": {
        value: "",
        control: "text",
      },
      "sidebar-right": {
        value: "",
        control: "text",
      },
      "sidebar-top-padding": {
        value: "",
        control: "text",
      },
      "sidebar-circle-icon-top": {
        value: "",
        control: "text",
      },
      "sidebar-circle-icon-transform": {
        value: "",
        control: "text",
      },
      "button-background": {
        value: "transparent",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "icon-color": {
        value: "var(--c-link)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-box-shadow-opacity": {
        value: "0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },

    docs: {
      inlineStories: false,
      iframeHeight: "20em",
      description: {
        component: "Sidebar component disabling on Cancel button click.",
      },
    },
  },
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: ["sf-sidebar--right", ""],
      },
      table: {
        category: "CSS Modifiers",
      },
      description: "CSS classes to modify component styling",
    },
    title: {
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
      description: "The sidebar's title",
    },
    subtitle: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
      description: "The sidebar's subtitle",
    },
    headingLevel: {
      control: "number",
      table: {
        category: "Props",
      },
      defaultValue: 3,
      description: "The heading's level",
    },
    button: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: true,
      description: "The close button",
    },
    visible: {
      control: "boolean",
      table: {
        category: "Props",
      },
      description: "The sidebar's visibility",
    },
    persistent: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: false,
      description: "If true clicking outside will not dismiss the sidebar",
    },
    overlay: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: true,
      description: "The overlay's visibility",
    },
    close: { action: "Close sidebar clicked", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfSidebar },
  props: Object.keys(argTypes),
  template: `
  <SfSidebar
    :visible="visible"
    @close="close"
    :title="title"
    :subtitle="subtitle"
    :heading-level="headingLevel"
    :button="button"
    :overlay="overlay"
    :class="classes"
    :persistent="persistent"
  >
    Total items: 0
  </SfSidebar>`,
});

export const Common = Template.bind({});
Common.args = {
  visible: true,
  title: "My Cart",
};

export const OnTheRight = Template.bind({});
OnTheRight.args = {
  ...Common.args,
  classes: "sf-sidebar--right",
};

export const NoOverlay = Template.bind({});
NoOverlay.args = {
  ...Common.args,
  overlay: false,
};

export const Persistent = Template.bind({});
Persistent.args = {
  ...Common.args,
  persistent: true,
};

export const UseTitleSlot = (args, { argTypes }) => ({
  components: { SfSidebar },
  props: Object.keys(argTypes),
  template: `
  <SfSidebar
    :visible="visible"
    @close="close"
    :title="title"
    :subtitle="subtitle"
    :heading-level="headingLevel"
    :button="button"
    :overlay="overlay"
    :class="classes"
    :persistent="persistent"
  >
    <template #title="{title, subtitle, headingLevel}">
      <div>CUSTOM TITLE</div>
    </template>
    Total items: 0
  </SfSidebar>`,
});
UseTitleSlot.args = { ...Common.args };

export const UseCircleIconSlot = (args, { argTypes }) => ({
  components: { SfSidebar },
  props: Object.keys(argTypes),
  template: `
  <SfSidebar
    :visible="visible"
    @close="close"
    :title="title"
    :subtitle="subtitle"
    :heading-level="headingLevel"
    :button="button"
    :overlay="overlay"
    :class="classes"
    :persistent="persistent"
  >
    <template #circle-icon="{close}">
      <div 
        :style="{position: 'absolute', top: '3rem', right: '-20px', fontSize: '42px', cursor: 'pointer'}" 
        @click="close">🙊</div>
    </template>
    Total items: 0
  </SfSidebar>`,
});
UseCircleIconSlot.args = { ...Common.args };
