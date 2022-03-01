import { SfSidebar } from "@storefront-ui/vue";
export default {
  title: "Components/Organisms/Sidebar",
  component: SfSidebar,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "sidebar-top": { value: "", control: "text" },
      "sidebar-left": { value: "", control: "text" },
      "sidebar-right": { value: "", control: "text" },
      "sidebar-bottom": { value: "0", control: "text" },
      "sidebar-z-index": { value: "1", control: "text" },
      "sidebar-width": { value: "", control: "text" },
      "sidebar-background": { value: "var(--c-white)", control: "text" },
      "sidebar-box-shadow": {
        value: "0px 4px 11px rgba(29, 31, 34, 0.1)",
        control: "text",
      },
      "sidebar-top-padding": { value: "", control: "text" },
      "sidebar-content-display": { value: "flex", control: "text" },
      "sidebar-content-flex-direction": { value: "column", control: "text" },
      "sidebar-content-width": { value: "", control: "text" },
      "sidebar-content-padding": { value: "", control: "text" },
      "sidebar-content-color": { value: "var(--c-text)", control: "text" },
      "sidebar-content-font": { value: "", control: "text" },
      "sidebar-content-font-weight": {
        value: "var(--font-weight--medium)",
        control: "text",
      },
      "sidebar-content-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "sidebar-content-font-line-height": { value: "1.6", control: "text" },
      "sidebar-content-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "sidebar-title-display": { value: "", control: "text" },
      "sidebar-title": { value: "0 0 var(--spacer-lg) 0", control: "text" },
      "sidebar-bottom-padding": { value: "var(--spacer-sm)", control: "text" },
      "sidebar-circle-icon-display": { value: "flex", control: "text" },
      "sidebar-circle-icon-left": { value: "", control: "text" },
      "sidebar-circle-icon-top": { value: "", control: "text" },
      "sidebar-circle-icon-right": { value: "0", control: "text" },
      "sidebar-circle-icon-transform": { value: "", control: "text" },
      "heading-title-color": {
        value: "var(--c-dark-variant)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "heading-title-font-size": {
        value: "",
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
      "button-background": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "icon-color": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-box-shadow-opacity": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
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
    position: {
      control: "text",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "left",
        },
      },
      description: "Animation class name based on position value",
    },
    close: {
      action: "close event emitted",
      table: { category: "Events", type: { summary: null } },
      description: "Emits close event when close button or overlay is clicked",
    },
    default: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to add sidebar content",
    },
    bar: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to place content inside the modal bar",
    },
    "content-top": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to add sticky top content",
    },
    "circle-icon": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to replace close button",
    },
    "content-bottom": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to add content to sticky bottom",
    },
    "title ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to replace SfHeading component",
    },
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
    :position="position"
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
  position: "right",
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
