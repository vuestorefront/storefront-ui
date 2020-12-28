import { SfBar } from "@storefront-ui/vue";

export default {
  title: "Molecules/Bar",
  component: SfBar,
  argTypes: {
    title: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    back: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
    close: {
      control: "boolean",
      table: {
        category: "Props",
      },
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

export const UseBackSlot = (args, { argTypes }) => ({
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
UseBackSlot.args = { ...WithBackBtn.args };

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
UseBackSlot.args = { ...WithCloseBtn.args };
