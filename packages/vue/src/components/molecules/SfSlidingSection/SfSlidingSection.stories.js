import { SfSlidingSection } from "@storefront-ui/vue";
export default {
  title: "Components/Molecules/SlidingSection",
  component: SfSlidingSection,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "sliding-section-display": { value: "", control: "text" },
      "sliding-section-margin": { value: "0", control: "text" },
      "sliding-section-static-height": { value: "", control: "text" },
      "sliding-section-static-transition": {
        value: "height 150ms ease-in-out",
        control: "text",
      },
      "sliding-section-sliding-padding": {
        value: "0 var(--spacer-xl)",
        control: "text",
      },
      "sliding-section-mobile-bar-display": { value: "", control: "text" },
      "sliding-section-mobile-bar-padding": {
        value: "var(--spacer-lg) 0",
        control: "text",
      },
      "sliding-section-sliding-margin": {
        value: "",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component: "Section for content with sliding property.",
      },
    },
  },
  argTypes: {
    static: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to place static content",
    },
    close: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to replace close button",
    },
    sliding: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to place sliding content",
    },
  },
  decorators: [
    () => ({
      template: `<div style="max-width: 64rem; margin: auto"><story/></div>`,
    }),
  ],
};

const Template = (args, { argTypes }) => ({
  components: { SfSlidingSection },
  props: Object.keys(argTypes),
  template: `
  <SfSlidingSection>
    <template #static>
      <div style="display: flex; align-items:center; justify-content:center; height: 34.6875rem; background-color: #f2f2f2;">
        [#static slot content]
      </div>
    </template>
    <template #sliding>
      <div style="display: flex; align-items:center; justify-content:center; height: 18.75rem; background-color: #f2f2f2;">
        [#sliding slot content]
      </div>
    </template>
  </SfSlidingSection>`,
});

export const Common = Template.bind({});
