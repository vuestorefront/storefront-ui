import SfButton from "./../../../src/components/atoms/SfButton/SfButton.vue";

export default {
  title: "Utilities/Transitions",
  argTypes: {
    effect: {
      control: {
        type: "select",
        options: [
          "sf-fade",
          "sf-slide-left",
          "sf-slide-right",
          "sf-collapse-top",
          "sf-collapse-bottom",
        ],
      },
      table: {
        category: "Class",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfButton },
  props: Object.keys(argTypes),
  data() {
    return { show: false };
  },
  template: `
  <div>
    <SfButton v-on:click="show = !show">
      Click to see effect
    </SfButton>
    <transition :name="effect">
      <p v-if="show">hello</p>
    </transition>
  </div>`,
});

export const FadeInOut = Template.bind({});
FadeInOut.args = {
  effect: "sf-fade",
};

export const SlideLeft = Template.bind({});
SlideLeft.args = {
  effect: "sf-slide-left",
};

export const SlideRight = Template.bind({});
SlideRight.args = {
  effect: "sf-slide-right",
};

export const CollapseTop = Template.bind({});
CollapseTop.args = {
  effect: "sf-collapse-top",
};

export const CollapseBottom = Template.bind({});
CollapseBottom.args = {
  effect: "sf-collapse-bottom",
};
