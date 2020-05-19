import { storiesOf } from "@storybook/vue";
import { SfCarousel } from "@storefront-ui/vue";

storiesOf("Organisms|Carousel", module)
  .add("Common", () => ({
    components: { SfCarousel },
    template: `<SfCarousel
      :style="{maxWidth: '1140px', margin: 'auto'}"
    >
        <SfCarouselItem v-for="index in 12">
          <div style="display: flex; align-items: center; justify-content: center; height: 300px; background-color: #5ECE7B; color: #FFF; font-size: 2.5rem">
            {{index}}
          </div>
        </SfCarouselItem>
      </SfCarousel>`,
  }))
  .add("[slot] next", () => ({
    components: { SfCarousel },
    template: `<SfCarousel
      :style="{maxWidth: '1140px', margin: 'auto'}"
    >
      <template #next="{go}">
        <button @click="go">NEXT</button>
      </template>
      <SfCarouselItem v-for="index in 12">
        <div style="display: flex; align-items: center; justify-content: center; height: 300px; background-color: #5ECE7B; color: #FFF; font-size: 2.5rem">
          {{index}}
        </div>
      </SfCarouselItem>
    </SfCarousel>`,
  }))
  .add("[slot] prev", () => ({
    components: { SfCarousel },
    template: `<SfCarousel
      :style="{maxWidth: '1140px', margin: 'auto'}"
    >
      <template #prev="{go}">
        <button @click="go">PREV</button>
      </template>
      <SfCarouselItem v-for="index in 12">
        <div style="display: flex; align-items: center; justify-content: center; height: 300px; background-color: #5ECE7B; color: #FFF; font-size: 2.5rem">
          {{index}}
        </div>
      </SfCarouselItem>
    </SfCarousel>`,
  }));
