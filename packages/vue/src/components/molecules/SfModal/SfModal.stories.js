import { SfModal } from "@storefront-ui/vue";
export default {
  title: "Components/Molecules/Modal",
  component: SfModal,
  argTypes: {
    title: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    visible: {
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
    },
    cross: {
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
