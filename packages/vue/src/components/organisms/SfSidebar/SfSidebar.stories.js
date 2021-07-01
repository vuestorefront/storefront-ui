import { SfSidebar } from "@storefront-ui/vue";
export default {
  title: "Components/Organisms/Sidebar",
  component: SfSidebar,
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: ["sf-sidebar--right", ""],
      },
      table: {
        category: "CSS Modifiers",
      },
    },
    title: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    subtitle: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    headingLevel: {
      control: "number",
      table: {
        category: "Props",
      },
    },
    button: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: true,
    },
    visible: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
    persistent: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
    overlay: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: true,
    },
    close: { action: "Close sidebar clicked", table: { category: "Events" } },
  },
  parameters: {
    docs: {
      inlineStories: false,
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
