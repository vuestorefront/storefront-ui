import SfColorPicker from "./SfColorPicker.vue";
import SfColor from "../../atoms/SfColor/SfColor.vue";

export default {
  title: "Components/Molecules/ColorPicker",
  component: SfColorPicker,
  decorators: [
    () => ({
      template:
        '<div style="position: relative; min-height: 250px; height: 100vh"><div>Switch to smaller viewport mode to view better</div><story /></div>',
    }),
  ],
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: [
          "sf-color-picker--vertical",
          "sf-color-picker--left sf-color-picker--vertical",
          "",
        ],
      },
      table: {
        category: "CSS Modifiers",
      },
    },
    label: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    hasClose: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
    isOpen: {
      control: "boolean",
      defaultValue: 0,
      table: {
        category: "Props",
      },
    },
    "click:toggle": { action: "Toggle isOpen", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfColorPicker, SfColor },
  props: Object.keys(argTypes),
  template: `
  <SfColorPicker
    :class="classes"
    :label="label"
    :has-close="hasClose"
    :isOpen="isOpen"
    @click:toggle="() => {this['click:toggle'](); this.isOpen = !this.isOpen}"
  >
    <SfColor style="margin: 0.4375rem" v-for="color in colors" :key="color.value" :color="color.color" :selected="color.selected" @click="color.selected = !color.selected"/>
  </SfColorPicker>`,
});

export const Common = Template.bind({});
Common.args = {
  isOpen: true,
  label: "Choose color",
  colors: [
    { label: "Sand", value: "sand", color: "#EDCBB9", selected: false },
    { label: "Mint", value: "mint", color: "#ABD9D8", selected: false },
    {
      label: "Light Gray",
      value: "light gray",
      color: "#F1F2F3",
      selected: false,
    },
    {
      label: "Vivid rose",
      value: "vivid rose",
      color: "#DB5593",
      selected: false,
    },
    { label: "Peach", value: "peach", color: "#F59F93", selected: false },
    {
      label: "Citrus",
      value: "citrus",
      color: "#FFEE97",
      selected: false,
    },
  ],
};

export const IsOpen = Template.bind({});
IsOpen.args = {
  ...Common.args,
};

export const WithCloseBtn = Template.bind({});
WithCloseBtn.args = {
  ...Common.args,
  hasClose: true,
};

export const VerticalDisplay = Template.bind({});
VerticalDisplay.args = {
  ...WithCloseBtn.args,
  classes: "sf-color-picker--vertical",
};

export const VerticalLeftDisplay = Template.bind({});
VerticalLeftDisplay.args = {
  ...WithCloseBtn.args,
  classes: "sf-color-picker--left sf-color-picker--vertical",
};
