import { SfCarousel } from "@storefront-ui/vue";
const StoriesPlaceholder = {
  props: ["index"],
  template: `<div style="display: flex; align-items: center; justify-content: center; height: 300px; background-color: #5ECE7B; color: #FFF; font-size: 2.5rem">{{index}}</div>`,
};
export default {
  title: "Organisms|Carousel",
};
export const Common = () => ({
  components: { SfCarousel, StoriesPlaceholder },
  template: `<SfCarousel
      :style="{maxWidth: '1140px', margin: 'auto'}"
    >
        <SfCarouselItem v-for="index in 12">
          <StoriesPlaceholder :index="index"/>
        </SfCarouselItem>
      </SfCarousel>`,
});
export const SlotNext = () => ({
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
    </SfCarousel>`,
});
SlotNext.story = {
  name: "[slot] next",
};
export const SlotPrev = () => ({
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
    </SfCarousel>`,
});
SlotPrev.story = {
  name: "[slot] prev",
};
