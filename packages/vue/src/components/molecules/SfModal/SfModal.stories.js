import { SfModal, SfButton } from "@storefront-ui/vue";
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

export const ModalWithoutJs = (args, { argTypes }) => ({
  components: { SfModal, SfButton },
  props: Object.keys(argTypes),
  data() {
    return {
      openedModal: false,
      jsEnabled: false,
    };
  },
  methods: {
    modalToggler() {
      this.openedModal = !this.openedModal;
    },
  },
  mounted() {
    this.$nextTick(() => {
      return (this.jsEnabled = "block");
    });
  },
  template: `
  <div>
    <noscript inline-template>
      <SfButton link="#modal">
        open
      </SfButton>
    </noscript>      
    <SfButton :style="{ display: jsEnabled }" @click="modalToggler">
      open
    </SfButton>
    <SfModal
      :visible="openedModal"
      :title="title"
      :overlay="overlay"
      :cross="cross"
      :persistent="persistent"
      @close="modalToggler"
      id="modal"
    >
      <p>HELLO STOREFRONT UI!  </p>    
    </SfModal>
  </div>`,
});
ModalWithoutJs.args = {
  ...Common.args,
};
