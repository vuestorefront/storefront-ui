// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  select,
  number,
  optionsKnob as options
} from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfHero from "./SfHero.vue";
import { string } from "postcss-selector-parser";

const data = () => {
  return {
    items: [
      {
        title: "Colorful summer dresses are already in store",
        buttonText: "Learn more",
        subtitle: "SUMMER COLLECTION 2019",
        background: "#eceff1",
        image: "https://i.ibb.co/Jn6JRGh/hero-bg-left.png"
      },
      {
        title: "Colorful summer dresses are already in store",
        subtitle: "SUMMER COLLECTION 2019",
        buttonText: "Learn more",
        background: "#efebe9",
        image: "https://i.ibb.co/6HS24vc/hero-bg-removebg-preview.png"
      },
      {
        title: "Colorful summer dresses are already in store",
        subtitle: "SUMMER COLLECTION 2019",
        buttonText: "Learn more",
        background: "#fce4ec",
        image: "https://i.ibb.co/6HS24vc/hero-bg-removebg-preview.png"
      }
    ]
  };
};

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$hero--mobile-breakpoint", "$mobile-max"],

    ["$hero__controls-top", "50%"],
    ["$hero__controls-padding-h", "1rem"],
    ["$hero__controls-width", "calc(100% - 2 * #{$hero__controls-padding-h})"],

    ["$hero__bullets-position-offset", "0.5rem"],
    ["$hero__bullets-position-offset--desktop", "2.5rem"],
    ["$hero__bullets-width", "100%"],
    [("$hero-item-height", "14rem")],
    ["$hero-item-height--desktop", "30rem"],
    ["$hero-item-width", "100%"],
    ["$hero-item-padding", "1rem"],
    ["$hero-item-padding--desktop", "5rem"],
    ["$hero-item-bg-size", "cover"],
    ["$hero-item-bg-repeat", "no-repeat"],

    ["$hero-item__container-width--desktop", "50%"],
    ["$hero-item__container-width", "60%"],
    ["$hero-item__container-height", "100%"],
    ["$hero-item__container-padding--desktop", "0 2rem"],
    ["$hero-item__container-padding", "0"],

    ["$hero-item__subtitle-width", "100%"],
    ["$hero-item__subtitle-width--desktop", "min-content"],
    ["$hero-item__subtitle-color", "$c-gray-secondary"],
    [
      "$hero-item__subtitle-border-left",
      "$hero-item__subtitle-color solid 1px"
    ],
    ["$hero-item__subtitle-border", "0"],
    ["$hero-item__subtitle-font", "10px"],
    ["$hero-item__subtitle-font--desktop", "12px"],
    ["$hero-item__subtitle-line-height--desktop", "17px"],
    ["$hero-item__subtitle-line-height", "14px"],
    ["$hero-item__subtitle-padding-left--desktop", "36px"],
    ["$hero-item__subtitle-padding-left", "18px"],

    ["$hero-item__title-font", "18px"],
    ["$hero-item__title-font--desktop", "36px"],
    ["$hero-item__title-line-height--desktop", "50px"],
    ["$hero-item__title-line-height", "25px"],
    ["$hero-item__title-color", "$c-dark-primary"]
  ]
};

storiesOf("Organisms|Hero", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { SfHero },
      props: {
        customClass_1: {
          default: options(
            "CSS Modifier for 1st item",
            {
              null: "null",
              "bg-bottom-left": "sf-hero-item--position-bg-bottom-left",
              "bg-top-right": "sf-hero-item--position-bg-top-right",
              "bg-top-left": "sf-hero-item--position-bg-top-left",
              "align-right": "sf-hero-item--align-right"
            },
            "sf-hero-item--position-bg-top-right",
            { display: "multi-select" }
          )
        },
        customClass_2: {
          default: options(
            "CSS Modifier for 2nd item",
            {
              null: "null",
              "bg-bottom-left": "sf-hero-item--position-bg-bottom-left",
              "bg-top-right": "sf-hero-item--position-bg-top-right",
              "bg-top-left": "sf-hero-item--position-bg-top-left",
              "align-right": "sf-hero-item--align-right"
            },
            "sf-hero-item--position-bg-bottom-left sf-hero-item--align-right",
            { display: "multi-select" }
          )
        },
        customClass_3: {
          default: options(
            "CSS Modifier for 3rd item",
            {
              null: "null",
              "bg-bottom-left": "sf-hero-item--position-bg-bottom-left",
              "bg-top-right": "sf-hero-item--position-bg-top-right",
              "bg-top-left": "sf-hero-item--position-bg-top-left",
              "align-right": "sf-hero-item--align-right"
            },
            "null",
            { display: "multi-select" }
          )
        }
      },
      template: `<SfHero>
        <SfHeroItem 
          title="Colorful summer dresses are already in store"
          subtitle="SUMMER COLLECTION 2019"
          buttonText="Learn more"
          background="#eceff1"
          image="https://i.ibb.co/6HS24vc/hero-bg-removebg-preview.png"
          :class="customClass_1"
        ></SfHeroItem>
        <SfHeroItem 
          title="Colorful summer dresses are already in store"
          subtitle="SUMMER COLLECTION 2019"
          buttonText="Learn more"
          background="#efebe9"
          image="assets/storybook/Banner1.png"
          :class="customClass_2"
        ></SfHeroItem>
        <SfHeroItem 
          title="Colorful summer dresses are already in store"
          subtitle="SUMMER COLLECTION 2019"
          buttonText="Learn more"
          background="#fce4ec"
          image="assets/storybook/Banner2.png"
          :class="customClass_3"
        ></SfHeroItem>
      </SfHero>`
    }),
    {
      info: {
        summary: `
        <h2>Description</h2>
        <p>
          Swappable gallery for large web banner images.
          <br><br>
          This story shows how to use it with <code>slots</code>.
          <br><br>
          You passes any number of <code>&lt;SfHeroItem&gt;</code> with the optional <code>props</code> as below:
          <br><br>
          <code>
          title?: string,<br>
          buttonText?: string,<br>
          subtitle?: string,<br>
          background?: string,<br>
          image?: string,<br>
          </code>
          <br><br>
        </p>
        <h2>Usage</h2>
        <pre><code>import { SfHero } from "@storefront-ui/vue/dist/SfHero.vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        `
      }
    }
  )
  .add(
    "[props] items",
    () => ({
      components: { SfHero },
      data,
      template: `<SfHero :items="items">
        </SfHero>`
    }),
    {
      info: {
        summary: `
        <h2>Description</h2>
        <p>
          Swappable gallery for large web banner images.
          <br><br>
          This story shows how to use it with <code>props</code>.
          <br><br>
          You passes an array of objects (<code>items</code>) with the format below:
          <br><br>
          <code>
          items: [<br>
            &nbsp;{<br>
            &nbsp;&nbsp;title?: string,<br>
            &nbsp;&nbsp;buttonText?: string,<br>
            &nbsp;&nbsp;subtitle?: string,<br>
            &nbsp;&nbsp;background?: string,<br>
            &nbsp;&nbsp;image?: string,<br>
            &nbsp;}<br>
            ];
          </code>
          <br><br>
          
          This example uses below items props:<br><br>
          <code>
          items: [<br>
            &nbsp;{<br>
            &nbsp;&nbsp;title: "Colorful summer dresses are already in store",<br>
            &nbsp;&nbsp;buttonText: "Learn more",<br>
            &nbsp;&nbsp;subtitle: "SUMMER COLLECTION 2019",<br>
            &nbsp;&nbsp;background: "#eceff1",<br>
            &nbsp;&nbsp;image: "https://i.ibb.co/Jn6JRGh/hero-bg-left.png",<br>
            &nbsp;},<br>
            &nbsp;{<br>
            &nbsp;&nbsp;title: "Colorful summer dresses are already in store",<br>
            &nbsp;&nbsp;subtitle: "SUMMER COLLECTION 2019",<br>
            &nbsp;&nbsp;buttonText: "Learn more",<br>
            &nbsp;&nbsp;background: "#efebe9",<br>
            &nbsp;&nbsp;image: "https://i.ibb.co/6HS24vc/hero-bg-removebg-preview.png"<br>
            &nbsp;},<br>
            &nbsp;{<br>
            &nbsp;&nbsp;title: "Colorful summer dresses are already in store",<br>
            &nbsp;&nbsp;subtitle: "SUMMER COLLECTION 2019",<br>
            &nbsp;&nbsp;buttonText: "Learn more",<br>
            &nbsp;&nbsp;background: "#fce4ec",<br>
            &nbsp;&nbsp;image: "https://i.ibb.co/6HS24vc/hero-bg-removebg-preview.png"<br>
            &nbsp;}<br>
          ]<br>
          </code>
        </p>
        <h2>Usage</h2>
        <pre><code>import { SfHero } from "@storefront-ui/vue/dist/SfHero.vue"</code></pre>
        `
      }
    }
  )
  .add(
    "[props] sliderOptions",
    () => ({
      components: { SfHero },
      props: {
        autoplay: {
          default: number("autoplay option for glide.js", 1000)
        }
      },
      data,
      template: `<SfHero :items="items" :sliderOptions="{ autoplay }">
        </SfHero>`
    }),
    {
      info: {
        summary: `
        <h2>Usage</h2>
        <pre><code>import { SfHero } from "@storefront-ui/vue/dist/SfHero.vue"</code></pre>
        `
      }
    }
  )
  .add(
    "[slot] controls icons",
    () => ({
      components: { SfHero },
      data,
      template: `
      <SfHero :items="items">
        <template #prev>
          <span style="margin: 12px; cursor: pointer; font-weight: 900; font-size: 18px;">&lt; PREV</span>
        </template>
        <template #next>
          <span style="margin: 12px; cursor: pointer; font-weight: 900; font-size: 18px;">NEXT &gt;</span>
        </template>
      </SfHero>`
    }),
    {
      info: {
        summary: `
        <h2>Usage</h2>
        <pre><code>import { SfHero } from "@storefront-ui/vue/dist/SfHero.vue"</code></pre>
        `
      }
    }
  )
  .add(
    "[slot] bullets",
    () => ({
      components: { SfHero },
      data,
      template: `
      <SfHero :items="items">
        <template #inactive>
          <span style="margin: 3px; cursor: pointer;">O</span>
        </template>
        <template #active>
          <span style="margin: 3px; cursor: pointer;">X</span>
        </template>
      </SfHero>`
    }),
    {
      info: {
        summary: `
        <h2>Usage</h2>
        <pre><code>import { SfHero } from "@storefront-ui/vue/dist/SfHero.vue"</code></pre>
        `
      }
    }
  );
