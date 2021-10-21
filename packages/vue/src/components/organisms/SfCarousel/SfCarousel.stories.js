import { SfCarousel } from "@storefront-ui/vue";
export default {
  title: "Components/Organisms/Carousel",
  component: SfCarousel,
  parameters: {
    cssprops: {
      "carousel-width": {
        value: "calc(100% - var(--carousel-controls-size))",
        control: "text",
      },
      "carousel-padding": { value: "", control: "text" },
      "carousel-controls-position": { value: "absolute", control: "text" },
      "carousel-controls-top": { value: "50%", control: "text" },
      "carousel-controls-left": { value: "0", control: "text" },
      "carousel-controls-transform": {
        value: "translate3d(0, -50%, 0)",
        control: "text",
      },
      "carousel-controls-display": { value: "none", control: "text" },
      "carousel-controls-justify-content": {
        value: "space-between",
        control: "text",
      },
      "carousel-controls-width": { value: "100%", control: "text" },
      "carousel-controls-size": {
        value: "15rem",
        control: "text",
      },
    },

    docs: {
      description: {
        component:
          "Carousel component with swipe and arrow navigation. Constructed from main component - SfCarousel and internal components - SfCarouselItem.",
      },
    },
  },
  argTypes: {
    settings: {
      control: "object",
      table: {
        category: "Props",
        defaultValue: {
          summary: `{
            type: "carousel",
            rewind: true,
            perView: 4,
            slidePerPage: true,
            gap: 0,
            breakpoints: {
              1023: {
                perView: 2,
                peek: {
                  before: 0,
                  after: 50,
                },
              },
            },
          }`,
        },
      },
      defaultValue: {
        type: "carousel",
        rewind: true,
        perView: 4,
        slidePerPage: true,
        gap: 0,
        breakpoints: {
          1023: {
            perView: 2,
            peek: {
              before: 0,
              after: 50,
            },
          },
        },
      },
      description:
        "Carousel options after glide.js (https://glidejs.com/docs/)",
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
