import SfSpinner from "../../components/SfSpinner/SfSpinner.vue";
import SfSpinnerLinear from "../../components/SfSpinner/SfSpinnerLinear.vue";

export default {
  title: "SFUI Components/Spinner",
  component: SfSpinner,
  parameters: {    
    docs: {      
      description: {
        component:
          "The component to show users that loading is underway of content. [link to component docs on the page]",
      },
    },
  },
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfSpinner },
  props: Object.keys(argTypes),
  template: `
  <div>
    <div class="relative h-4 mb-2">
      <div class="absolute w-4 h-4 bg-transparent border-2 border-gray-200 rounded-3xl"></div>
      <div class="absolute w-[10px] h-[10px] bg-transparent border-2 border-transparent rounded-tl-xl animate-spin border-t-primary-600"></div>
    </div>
    <div class="relative h-6 mb-2">
      <div class="absolute w-6 h-6 bg-transparent border-2 border-gray-200 rounded-full"></div>
      <div class="absolute w-3 h-3 bg-transparent border-2 border-transparent rounded-tl-full animate-spin border-t-primary-600"></div>
    </div>    
    <div class="relative h-10 mb-2">
      <div class="absolute w-10 h-10 bg-transparent border-2 border-gray-200 rounded-full"></div>
      <div class="absolute w-5 h-5 bg-transparent border-2 border-transparent rounded-tl-full animate-spin border-t-primary-600"></div>
    </div>
    <div class="relative h-14 mb-2">
      <div class="absolute w-14 h-14 bg-transparent border-[3px] border-gray-200 rounded-full"></div>
      <div class="absolute w-7 h-7 bg-transparent border-[3px] border-transparent rounded-tl-full animate-spin border-t-primary-600"></div>
    </div>
    <div class="relative h-24 mb-4">
      <div class="absolute w-24 h-24 bg-transparent border-4 border-gray-200 rounded-full"></div>
      <div class="absolute w-12 h-12 bg-transparent border-4 border-transparent rounded-tl-full animate-spin border-t-primary-600"></div>
    </div>
    <div class="relative h-48">
      <div class="absolute w-48 h-48 bg-transparent border-8 border-gray-200 rounded-[9999px]"></div>
      <div class="absolute w-24 h-24 bg-transparent border-8 border-transparent rounded-tl-[9999px] animate-spin border-t-primary-600"></div>
    </div>
  </div>`
});

export const Common = Template.bind({});

const Linear = (args, { argTypes }) => ({
  components: { SfSpinnerLinear },
  props: Object.keys(argTypes),
  template: `
  <div>
    <SfSpinnerLinear />
  </div>`
});

export const SpinnerLinear = Linear.bind({});