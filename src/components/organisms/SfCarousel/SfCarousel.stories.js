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
          products: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
        };
      },
      template: `
      <div style="max-width: 1140px">
        <SfCarousel>
          <SfCarouselItem v-for="(product, key) in products">
            <div :style="'color: #FFF; display: flex; justify-content: center; font-size: 72px; align-items: center; height: 300px; background: rgb('+ Math.random() * 255 +',' + Math.random() * 255 +', '+ Math.random() * 255 +')'">
             {{key + 1}}
            </div>
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
