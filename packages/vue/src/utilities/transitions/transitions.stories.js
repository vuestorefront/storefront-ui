import SfButton from "./../../../src/components/atoms/SfButton/SfButton.vue";

const doscTransitions = `<div>
  <p style="font-size: 16px; margin-top: 30px;">
    Transitions are animations that help users understand the flow on a page. 
    You can use our ready-to-use transition effects or modify them according to your needs.
  </p>
  <p style="font-size: 16px">
    Some of our components already have their own transitions for example
    <a
    href="?path=/story/components-atoms-overlay--common"
    target="_self"
    >
      <span>
        SfOverlay, 
      </span>
    </a>
    <a
    href="?path=/story/components-molecules-notification--common"
    target="_self"
    >
      <span>
        SfNotification, 
      </span>
    </a>
    <a
    href="?path=/story/components-molecules-dropdown--common"
    target="_self"
    >
      <span>
        SfDropdown
      </span>
    </a>
  </p>
  <p style="font-size: 18px; margin-top: 40px;">
    <b>Changing transitions</b>
  </p>
  <p style="font-size: 16px">
  If you would like to change exsisting transition, 
  you can override classes that are responsible for the effects: 
  </p>
  <ul>
    <li>.slide-enter-active</li>
    <li>.slide-leave-active</li>
    <li>.slide-leave-active</li>
    <li>.slide-leave-to </li>
  </ul>
  <p style="margin: 40px auto;">
    <span>
      If you want to learn more about vue transitions you can find useful information on the
    </span>
    <a
    href="https://vuejs.org/v2/guide/transitions.html"
    target="_blank"
    >
    <span>
      Vue.js 
    </span>
    </a>
  </p>
  <p style="font-size: 16px;">
    There are available transitions below. To see an exact effect click on a button.
  </p>
</div>`;

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
  parameters: {
    docs: {
      description: {
        component: doscTransitions,
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
