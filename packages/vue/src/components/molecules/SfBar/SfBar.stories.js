import { SfBar } from "@storefront-ui/vue";

export default {
  title: "Components/Molecules/Bar",
  component: SfBar,
  parameters: {
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
    onBackClick: { action: "Back clicked", table: { category: "Events" } },
    onCloseClick: { action: "Close clicked", table: { category: "Events" } },
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
  template: `<SfBar :title="title" :back="back" :close="close" @click:close="onCloseClick" @click:back="onBackClick"/>`,
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
