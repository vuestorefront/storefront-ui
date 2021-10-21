import { SfBullets } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Bullets",
  component: SfBullets,
  parameters: {
    docs: {
      description: {
        component:
          "Bullet-style indicator for paginated view containers. It's Vue 2 functional component.",
      },
    },
  },
  argTypes: {
    total: {
      control: {
        type: "number",
      },
      table: {
        category: "Props",
        defaultValue: {
          summary: 0,
        },
      },
      defaultValue: 0,
      description: "Number of bullets in total (active + inactive)",
    },
    current: {
      control: "number",
      table: {
        category: "Props",
        defaultValue: {
          summary: 0,
        },
      },
      defaultValue: 0,
      description: "Index of the currently active bullet (0-indexed)",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfBullets },
  props: Object.keys(argTypes),
  data() {
    return {
      curr: this.current,
    };
  },
  methods: {
    handleClick(value) {
      this.curr = value;
    },
  },
  template: `
  <SfBullets
    :total="total"
    :current="curr"
    @click="handleClick"
  />`,
});

export const Common = Template.bind({});
Common.args = {
  total: 3,
  current: 1,
};

export const WithActiveSlot = (args, { argTypes }) => ({
  components: { SfBullets },
  props: Object.keys(argTypes),
  data() {
    return {
      curr: this.current,
    };
  },
  template: `
    <SfBullets
      :total="total"
      :current="curr"
      @click="value => curr = value">
      <template #active>
        <li style="width: 10px; height: 10px; background-color:#9EE2B0"/>
      </template>
    </SfBullets>`,
});

WithActiveSlot.args = {
  total: 3,
};

export const WithInactiveSlot = (args, { argTypes }) => ({
  components: { SfBullets },
  props: Object.keys(argTypes),
  data() {
    return {
      curr: this.current,
    };
  },
  template: `
    <SfBullets
      :total="total"
      :current="curr"
      @click="value => curr = value">
      <template #inactive>
        <li style="width: 10px; height: 10px; background-color:#CCC; transform: rotate(45deg)"/>
      </template>
    </SfBullets>`,
});

WithInactiveSlot.args = { ...Common.args };
