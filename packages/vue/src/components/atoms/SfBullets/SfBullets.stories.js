import { SfBullets } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Bullets",
  component: SfBullets,
  parameters: {
    cssprops: {
      "bullet-width": { value: "var(--bullet-size, 0.5rem)", control: "text" },
      "bullet-height": { value: "var(--bullet-size, 0.5rem)", control: "text" },
      "bullet-margin": { value: "var(--spacer-2xs)", control: "text" },
      "bullet-border-radius": { value: "100%", control: "text" },
      "bullet-background": { value: "var(--c-gray)", control: "text" },
      "bullet-box-shadow-transition": {
        value:
          "opacity var(--bullet-box-shadow-transition-opacity-duration, 200ms) var(--bullet-box-shadow-transition-opacity-timing-function, ease-in-out), box-shadow var(--bullet-box-shadow-transition-box-shadow-duration, 200ms) var(--bullet-box-shadow-transition-box-shadow-timing-function, ease-in-out)",
        control: "text",
      },
      "bullet-box-shadow-opacity": { value: "", control: "text" },
      "bullet-box-shadow": {
        value:
          "var(--bullet-box-shadow-h-offset, 0px) var(--bullet-box-shadow-v-offset, 4px) var(--bullet-box-shadow-blur, 4px) var(--bullet-box-shadow-spread, 0px) var(--bullet-box-shadow-color, var(--c-black))",
        control: "text",
      },
    },

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
