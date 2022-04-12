import SfRadio from "../../components/SfRadio/SfRadio.vue";

export default {
  title: "SFUI Components/Radio",
  component: SfRadio,
  parameters: {
    docs: {
      description: {
        component:
          "The base radio component. [link to component docs on the page]",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfRadio },
  props: Object.keys(argTypes),
  template: `
  <div>
    <SfRadio />
  </div>`
});

export const Common = Template.bind({});

const DisabledRadio = (args, { argTypes }) => ({
  components: { SfRadio },
  props: Object.keys(argTypes),
  template: `
  <div class="flex flex-col">
    <div class="flex">
      <input
        id="radio"
        type="radio"
        class="order-1 peer h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-500 hover:border-green-500 checked:bg-green-500 checked:border-green-500 checked:shadow-m-inset disabled:cursor-not-allowed disabled:opacity-20"
        name="radio" 
        value="1"
        disabled
      >
      <div class="order-2 flex flex-col ml-2 mr-2 peer-disabled:text-gray-500/40">
        <label
          for="radio" 
          class="leading-4 text-base text-gray-900"
        > Option 1</label>
        <span class="mt-2 text-gray-500 text-base">Help text</span>
      </div>
    </div>
    <span class="hidden mt-1 text-sm font-medium peer-invalid:block text-negative-400">Error message</span>
  </div>`
});

export const Disabled = DisabledRadio.bind({});

const RightPositionRadio = (args, { argTypes }) => ({
  components: { SfRadio },
  props: Object.keys(argTypes),
  template: `
  <div class="flex flex-col">
    <div class="flex">
      <input
        id="radio"
        type="radio"
        class="order-2 peer h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-500 hover:border-green-500 checked:bg-green-500 checked:border-green-500 checked:shadow-m-inset disabled:cursor-not-allowed disabled:opacity-20"
        name="radio" 
        value="1"
      >
      <div class="order-1 flex flex-col ml-2 mr-2 peer-disabled:text-gray-500/40">
        <label
          for="radio" 
          class="leading-4  text-base text-gray-900"
        > Option 1</label>
        <span class="mt-2 text-gray-500 text-base">Help text</span>
      </div>
    </div>
    <span class="hidden mt-1 text-sm font-medium peer-invalid:block text-negative-400">Error message</span>
  </div>`
});

export const Right = RightPositionRadio.bind({});