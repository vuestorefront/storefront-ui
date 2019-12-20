/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs } from "@storybook/addon-knobs";
import SfCarousel from "./SfCarousel.vue";

const data = () => {
  return {
    style: {
      color: "#FFF",
      display: "flex",
      "justify-content": "center",
      "font-size": "3rem",
      "align-items": "center",
      height: "300px",
      "background-color": "#5ECE7B"
    },
    options: {
      perView: 4
    }
  };
};

storiesOf("Organisms|Carousel", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfCarousel },
    data,
    template: `
      <div style="max-width: 1140px">
        <SfCarousel :options="options">
          <SfCarouselItem>
            <div :style="style">1</div>
          </SfCarouselItem>
          <SfCarouselItem>
            <div :style="style">2</div>
          </SfCarouselItem>
          <SfCarouselItem>
            <div :style="style">3</div>
          </SfCarouselItem>
          <SfCarouselItem>
            <div :style="style">4</div>
          </SfCarouselItem>
          <SfCarouselItem>
            <div :style="style">5</div>
          </SfCarouselItem>
          <SfCarouselItem>
            <div :style="style">6</div>
          </SfCarouselItem>
          <SfCarouselItem>
            <div :style="style">7</div>
          </SfCarouselItem>
          <SfCarouselItem>
            <div :style="style">8</div>
          </SfCarouselItem>
        </SfCarousel>
      </div>
      `
  }))
  .add("[slot] prev", () => ({
    components: { SfCarousel },
    data,
    template: `
      <div style="max-width: 1140px">
        <SfCarousel :options="options">
          <SfCarouselItem>
            <div :style="style">1</div>
          </SfCarouselItem>
          <SfCarouselItem>
            <div :style="style">2</div>
          </SfCarouselItem>
          <SfCarouselItem>
            <div :style="style">3</div>
          </SfCarouselItem>
          <SfCarouselItem>
            <div :style="style">4</div>
          </SfCarouselItem>
          <SfCarouselItem>
            <div :style="style">5</div>
          </SfCarouselItem>
          <SfCarouselItem>
            <div :style="style">6</div>
          </SfCarouselItem>
          <SfCarouselItem>
            <div :style="style">7</div>
          </SfCarouselItem>
          <SfCarouselItem>
            <div :style="style">8</div>
          </SfCarouselItem>

          <template v-slot:prev="{ go }">
            <div @click="go">
              <span style="margin: 12px; cursor: pointer; font-weight: 900; font-size: 18px;">&lt; PREV</span>
            </div>
          </template>

        </SfCarousel>
      </div>
      `
  }))
  .add("[slot] next", () => ({
    components: { SfCarousel },
    data,
    template: `
      <div style="max-width: 1140px">
        <SfCarousel :options="options">
          <SfCarouselItem>
            <div :style="style">1</div>
          </SfCarouselItem>
          <SfCarouselItem>
            <div :style="style">2</div>
          </SfCarouselItem>
          <SfCarouselItem>
            <div :style="style">3</div>
          </SfCarouselItem>
          <SfCarouselItem>
            <div :style="style">4</div>
          </SfCarouselItem>
          <SfCarouselItem>
            <div :style="style">5</div>
          </SfCarouselItem>
          <SfCarouselItem>
            <div :style="style">6</div>
          </SfCarouselItem>
          <SfCarouselItem>
            <div :style="style">7</div>
          </SfCarouselItem>
          <SfCarouselItem>
            <div :style="style">8</div>
          </SfCarouselItem>

          <template v-slot:next="{ go }">
            <div @click="go">
              <span style="margin: 12px; cursor: pointer; font-weight: 900; font-size: 18px;">NEXT &gt;</span>
            </div>
          </template>

        </SfCarousel>
      </div>
      `
  }));
