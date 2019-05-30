/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import notes from "./SfCarousel.md";
import SfCarousel from "./SfCarousel.vue";

storiesOf("Organisms|[WIP] Carousel", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { SfCarousel },
      data() {
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
      },
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
    }),
    {
      info: true,
      notes
    }
  );
