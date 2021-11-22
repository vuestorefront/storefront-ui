import { SfBar } from "@storefront-ui/vue";

export default {
  title: "Components/Molecules/Bar",
  component: SfBar,
  parameters: {
    cssprops: {
      "bar-height": { value: "3.125rem", control: "text" },
      "bar-padding": { value: "0 var(--spacer-base)", control: "text" },
      "bar-background": { value: "var(--c-light)", control: "text" },
      "bar-font": { value: "", control: "text" },
      "bar-font-weight": {
        value: "var(--font-weight--medium)",
        control: "text",
      },
      "bar-font-size": { value: "var(--font-size--base)", control: "text" },
      "bar-font-line-height": { value: "1.6", control: "text" },
      "bar-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "icon-width": {
        value: "0.875rem",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },

    docs: {
      description: {
        component: "The bar component for mobile components.",
      },
    },
  },
  argTypes: {
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
      description: "Title text",
    },
    back: {
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
      description: "Sets visibility of back button",
    },
    close: {
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
      description: "Sets visibility of close button",
    },
    clickBack: {
      action: "click:back event emitted",
      table: { category: "Events", type: { summary: null } },
      description: "Emits click:back event when back button is clicked",
    },
    clickClose: {
      action: "click:close event emitted",
      table: { category: "Events", type: { summary: null } },
      description: "Emits click:close event when close button is clicked",
    },
  },
  args: {
    title: "Dresses",
    back: false,
    close: false,
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfBar },
  props: Object.keys(argTypes),
  template: `<SfBar :title="title" :back="back" :close="close" @click:close="clickClose" @click:back="clickBack"/>`,
});

export const Common = Template.bind({});
export const WithBackBtn = Template.bind({});
WithBackBtn.args = {
  back: true,
};

export const WithCloseBtn = Template.bind({});
WithCloseBtn.args = {
  close: true,
};

export const UseTitleSlot = (args, { argTypes }) => ({
  components: { SfBar },
  props: Object.keys(argTypes),
  template: `
  <SfBar
    :title="title"
    :back="back"
    :close="close"
  >
    <template #title="{title}">CUSTOM TITLE</template>
  </SfBar>`,
});
UseTitleSlot.args = { ...WithBackBtn.args };

export const UseBackSlot = (args, { argTypes }) => ({
  components: { SfBar },
  props: Object.keys(argTypes),
  template: `
  <SfBar
    :title="title"
    :close="close"
  >
    <template #back>CUSTOM BACK</template>
  </SfBar>`,
});
UseBackSlot.args = { ...WithCloseBtn.args };

export const UseCloseSlot = (args, { argTypes }) => ({
  components: { SfBar },
  props: Object.keys(argTypes),
  template: `
  <SfBar
    :title="title"
    :back="back"
    :close="close"
  >
    <template #close>CUSTOM CLOSE</template>
  </SfBar>`,
});
UseCloseSlot.args = { ...WithCloseBtn.args };
