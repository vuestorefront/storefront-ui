import { SfLoader, SfImage } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Loader",
  component: SfLoader,
  parameters: {
    cssprops: {
      "loader-overlay-background": { value: "var(--c-white)", control: "text" },
      "loader-spinner-stroke": { value: "var(--c-primary)", control: "text" },
    },

    docs: {
      description: {
        component:
          "The Overlay loading spinner, wrapped around elements for indicating long running tasks like image loading. It's Vue 2 functional component.",
      },
    },
  },
  decorators: [
    () => ({ template: '<div style="margin: 3em;"><story /></div>' }),
  ],
  argTypes: {
    loading: {
      control: "boolean",
      table: {
        category: "Props",
      },
      description: "Shows the loader on top of the existing content",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfLoader, SfImage },
  props: Object.keys(argTypes),
  template: `<SfLoader :loading="loading">
      <SfImage src="/assets/storybook/SfImage/product-216x326.jpg" alt="dress" width="216" height="326"/>
    </SfLoader>`,
});

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const WithLoaderSlot = (args, { argTypes }) => ({
  components: { SfLoader, SfImage },
  props: Object.keys(argTypes),
  template: `
  <SfLoader
    :loading="loading">
    <SfImage src="/assets/storybook/SfImage/product-216x326.jpg" alt="dress" width="216" height="326"/>
    <template #loader>
      loading...
    </template>
  </SfLoader>`,
});

WithLoaderSlot.args = { ...Loading.args };
