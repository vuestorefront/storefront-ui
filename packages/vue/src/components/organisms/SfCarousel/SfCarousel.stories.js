/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";
import SfCarousel from "./SfCarousel.vue";
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$carousel-mobile-breakpoint", "$mobile-max", "default mobile breakpoint"]
  ]
};

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
  .add(
    "Basic",
    () => ({
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
    }),
    {
      info: {
        summary: `<h2> Usage </h2>
        <pre><code>import { SfCarousel } from "@storefront-ui/vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        `
      }
    }
  )
  .add(
    "[slot] prev",
    () => ({
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
          
          <template #prev>
            <span style="margin: 12px; cursor: pointer; font-weight: 900; font-size: 18px;">&lt; PREV</span>
          </template>

        </SfCarousel>
      </div>
      `
    }),
    {
      info: {
        summary: `<h2> Usage </h2>
        <pre><code>import { SfCarousel } from "@storefront-ui/vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        `
      }
    }
  )
  .add(
    "[slot] next",
    () => ({
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

          <template #next>
            <span style="margin: 12px; cursor: pointer; font-weight: 900; font-size: 18px;">NEXT &gt;</span>
          </template>

        </SfCarousel>
      </div>
      `
    }),
    {
      info: {
        summary: `<h2> Usage </h2>
        <pre><code>import { SfCarousel } from "@storefront-ui/vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        `
      }
    }
  );
