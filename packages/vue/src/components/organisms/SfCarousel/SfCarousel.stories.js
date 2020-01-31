/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, number, object } from "@storybook/addon-knobs";

import SfCarousel from "./SfCarousel.vue";

const StoriesPlaceholder = {
  props: ["index"],
  template: `<div style="display: flex; align-items: center; justify-content: center; height: 300px; background-color: #5ECE7B; color: #FFF; font-size: 2.5rem">{{index}}</div>`
};

storiesOf("Organisms|Carousel", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfCarousel, StoriesPlaceholder },
    props: {
      settings: {
        default: object("settings", { perView: 4 }, "Props")
      },
      slidesNumber: {
        default: number("slidesNumber", 8, {}, "Stories")
      }
    },
    template: `<SfCarousel
        :settings="settings"
        :style="{maxWidth: '1140px'}"
      >
        <SfCarouselItem v-for="index in slidesNumber">
          <StoriesPlaceholder :index="index"/>
        </SfCarouselItem>
      </SfCarousel>`
  }))
  .add("[slot] next", () => ({
    components: { SfCarousel, StoriesPlaceholder },
    props: {
      settings: {
        default: object("settings", { perView: 4 }, "Props")
      },
      slidesNumber: {
        default: number("slidesNumber", 8, {}, "Stories")
      }
    },
    template: `<SfCarousel
        :settings="settings"
        :style="{maxWidth: '1140px'}"
    >
      <template #next="{go}">
        <button @click="go">NEXT</button>
      </template>
      <SfCarouselItem v-for="index in slidesNumber">
        <StoriesPlaceholder :index="index"/>
      </SfCarouselItem>
    </SfCarousel>`
  }))
  .add("[slot] prev", () => ({
    components: { SfCarousel, StoriesPlaceholder },
    props: {
      settings: {
        default: object("settings", { perView: 4 }, "Props")
      },
      slidesNumber: {
        default: number("slidesNumber", 8, {}, "Stories")
      }
    },
    template: `<SfCarousel
        :settings="settings"
        :style="{maxWidth: '1140px'}"
    >
      <template #prev="{go}">
        <button @click="go">PREV</button>
      </template>
      <SfCarouselItem v-for="index in slidesNumber">
        <StoriesPlaceholder :index="index"/>
      </SfCarouselItem>
    </SfCarousel>`
  }));
