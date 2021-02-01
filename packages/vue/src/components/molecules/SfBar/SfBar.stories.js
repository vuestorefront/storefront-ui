import { SfBar } from "@storefront-ui/vue";

export default {
  title: "Components/Molecules/Bar",
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
