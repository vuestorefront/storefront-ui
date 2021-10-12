import { SfLoader, SfImage } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Loader",
  component: SfLoader,
  parameters: {
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
  template: `<SfLoader :loading="loading"><SfImage src="/assets/storybook/SfImage/product-216x326.jpg" alt="dress" /></SfLoader>`,
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
    <SfImage src="/assets/storybook/SfImage/product-216x326.jpg" alt="dress" />
    <template #loader>
      loading...
    </template>
  </SfLoader>`,
});

WithLoaderSlot.args = { ...Loading.args };
