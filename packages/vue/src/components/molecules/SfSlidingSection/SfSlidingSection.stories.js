import { SfSlidingSection } from "@storefront-ui/vue";
export default {
  title: "Components/Molecules/SlidingSection",
  component: SfSlidingSection,
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
