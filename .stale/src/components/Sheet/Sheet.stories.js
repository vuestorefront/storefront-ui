import SheetBase from './SheetBase.vue';

export default {
  title: 'SFUI Components/Sheet',
  component: SheetBase,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: '200px',
      description: {
        component:
          'The sheet component. [link to component docs on the page]',
      },
    },
  },
};

const Template = () => ({
  components: { SheetBase },
  template: `
    <div class="relative">
      <SheetBase />
    </div>
    `,
});

export const Base = Template.bind({});
