import { SfCarousel } from "@storefront-ui/vue";
export default {
  title: "Components/Organisms/Carousel",
  component: SfCarousel,
  argTypes: {
    settings: {
      control: "object",
      table: {
        category: "Props",
        defaultValue: {
          summary: `{}`,
        },
      },
      defaultValue: {},
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfCarousel },
  props: Object.keys(argTypes),
  template: `
  <SfCarousel
  :style="{maxWidth: '1140px', margin: 'auto'}"
  >
    <SfCarouselItem v-for="(item, i) in 12" :key="i">
      <div style="display: flex; align-items: center; justify-content: center; height: 300px; background-color: #5ECE7B; color: #FFF; font-size: 2.5rem">
        {{item}}
      </div>
    </SfCarouselItem>
  </SfCarousel>`,
});

export const Common = Template.bind({});
Common.args = {};

export const UseNextSlot = (args, { argTypes }) => ({
  components: { SfCarousel },
  props: Object.keys(argTypes),
  template: `
  <SfCarousel
  :style="{maxWidth: '1140px', margin: 'auto'}"
  >
    <template #next="{go}">
      <button @click="go">NEXT</button>
    </template>
    <SfCarouselItem v-for="(item, i) in 12" :key="i">
      <div style="display: flex; align-items: center; justify-content: center; height: 300px; background-color: #5ECE7B; color: #FFF; font-size: 2.5rem">
        {{item}}
      </div>
    </SfCarouselItem>
  </SfCarousel>`,
});

export const UsePrevSlot = (args, { argTypes }) => ({
  components: { SfCarousel },
  props: Object.keys(argTypes),
  template: `
  <SfCarousel
  :style="{maxWidth: '1140px', margin: 'auto'}"
  >
    <template #prev="{go}">
      <button @click="go">PREV</button>
    </template>
    <SfCarouselItem v-for="(item, i) in 12" :key="i">
      <div style="display: flex; align-items: center; justify-content: center; height: 300px; background-color: #5ECE7B; color: #FFF; font-size: 2.5rem">
        {{item}}
      </div>
    </SfCarouselItem>
  </SfCarousel>`,
});
