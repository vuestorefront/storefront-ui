import SfSheet from "../../components/SfSheet/SfSheet.vue";

export default {
  title: "SFUI Components/Sheet",
  component: SfSheet,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: "200px",
      description: {        
        component:
          "The sheet component. [link to component docs on the page]",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfSheet },
  template: `
    <div class="relative">
      <SfSheet />
    </div>
    `
});

export const Common = Template.bind({});