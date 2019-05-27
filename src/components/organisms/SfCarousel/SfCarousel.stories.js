/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import notes from "./SfCarousel.md";
import SfCarousel from "./SfCarousel.vue";
import SfProductCard from "../../molecules/SfProductCard/SfProductCard.vue";

storiesOf("Organisms|[WIP] Carousel", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { SfCarousel, SfProductCard },
      data() {
        return {
          products: [{title: "Product 1"}, {title: "Product 2"}, {title: "Product 3"}, {title: "Product 4"}]
        };
      },
      template: `
      <div style="width: 500px">
        <SfCarousel :per-page="2">
          <SfCarouselItem v-for="product in products">
            <SfProductCard
              :title="product.title"
              :price="{ regularPrice: '10,99 $'}"
              :rating="{ max: 5, score: 4 }"/>
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
