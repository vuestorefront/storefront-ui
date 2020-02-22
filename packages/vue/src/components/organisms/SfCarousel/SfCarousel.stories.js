/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import SfCarousel from "./SfCarousel.vue";

const StoriesPlaceholder = {
  props: ["index"],
  template: `<div style="display: flex; align-items: center; justify-content: center; height: 300px; background-color: #5ECE7B; color: #FFF; font-size: 2.5rem">{{index}}</div>`
};

storiesOf("Organisms|Carousel", module)
  .add("Common", () => ({
    components: { SfCarousel, StoriesPlaceholder },
    template: `<SfCarousel
        :style="{maxWidth: '1140px', margin: 'auto'}"
      >
        <SfCarouselItem v-for="index in 12">
          <StoriesPlaceholder :index="index"/>
        </SfCarouselItem>
      </SfCarousel>`
  }))
  .add("[slot] next", () => ({
    components: { SfCarousel, StoriesPlaceholder },
    template: `<SfCarousel
        :style="{maxWidth: '1140px', margin: 'auto'}"
    >
      <template #next="{go}">
        <button @click="go">NEXT</button>
      </template>
      <SfCarouselItem v-for="index in 12">
        <StoriesPlaceholder :index="index"/>
      </SfCarouselItem>
    </SfCarousel>`
  }))
  .add("[slot] prev", () => ({
    components: { SfCarousel, StoriesPlaceholder },
    template: `<SfCarousel
        :style="{maxWidth: '1140px', margin: 'auto'}"
    >
      <template #prev="{go}">
        <button @click="go">PREV</button>
      </template>
      <SfCarouselItem v-for="index in 12">
        <StoriesPlaceholder :index="index"/>
      </SfCarouselItem>
    </SfCarousel>`
  }));
