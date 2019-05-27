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
        return {};
      },
      template: `
      <div style="max-width: 960px">
        <SfCarousel :per-page="4">
          <SfCarouselItem>
            <SfProductCard
              :title="Product"
              :price="{ regularPrice: '10,99 $'}"
              :rating="{ max: 5, score: 4 }"/>
          </SfCarouselItem>
          <SfCarouselItem>
            <SfProductCard
              :title="Product"
              :price="{ regularPrice: '10,99 $'}"
              :rating="{ max: 5, score: 4 }"/>
          </SfCarouselItem>
          <SfCarouselItem>
            <SfProductCard
              :title="Product"
              :price="{ regularPrice: '10,99 $'}"
              :rating="{ max: 5, score: 4 }"/>
          </SfCarouselItem>
          <SfCarouselItem>
            <SfProductCard
              :title="Product"
              :price="{ regularPrice: '10,99 $'}"
              :rating="{ max: 5, score: 4 }"/>
          </SfCarouselItem>
          <SfCarouselItem>
            <SfProductCard
              :title="Product"
              :price="{ regularPrice: '10,99 $'}"
              :rating="{ max: 5, score: 4 }"/>
          </SfCarouselItem>
          <SfCarouselItem>
            <SfProductCard
              :title="Product"
              :price="{ regularPrice: '10,99 $'}"
              :rating="{ max: 5, score: 4 }"/>
          </SfCarouselItem>
          <SfCarouselItem>
            <SfProductCard
              :title="Product"
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
