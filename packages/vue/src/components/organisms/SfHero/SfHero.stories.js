/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  number,
  optionsKnob as options
} from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfHero from "./SfHero.vue";

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
    ["$hero-item-height", "14rem"],
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
    ["$hero-item__subtitle-color", "$c-gray-variant"],
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
    ["$hero-item__title-color", "$c-dark"]
  ]
};

storiesOf("Organisms|Hero", module)
  .addDecorator(withKnobs)

  .add(
    "Basic",
    () => ({
      data,
      components: { SfHero },
      props: {
        customClass1: {
          default: options(
            "CSS Modifier for 1st item",
            {
              "bg-bottom-left": "sf-hero-item--position-bg-bottom-left",
              "bg-top-right": "sf-hero-item--position-bg-top-right",
              "bg-top-left": "sf-hero-item--position-bg-top-left",
              "align-right": "sf-hero-item--align-right"
            },
            "sf-hero-item--position-bg-top-right",
            { display: "multi-select" }
          )
        },
        customClass2: {
          default: options(
            "CSS Modifier for 2nd item",
            {
              "bg-bottom-left": "sf-hero-item--position-bg-bottom-left",
              "bg-top-right": "sf-hero-item--position-bg-top-right",
              "bg-top-left": "sf-hero-item--position-bg-top-left",
              "align-right": "sf-hero-item--align-right"
            },
            "sf-hero-item--position-bg-bottom-left sf-hero-item--align-right",
            { display: "multi-select" }
          )
        },
        customClass3: {
          default: options(
            "CSS Modifier for 3rd item",
            {
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
      template: `<div style="max-width: 1240px; margin: auto"><SfHero :sliderOptions="{autoplay: false}">
        <template>
          <div v-for="(item, index) in items">
            <SfHeroItem
              :title="item.title"
              :subtitle="item.subtitle"
              :buttonText="item.buttonText"
              :background="item.background"
              :image="item.image"
              :class="index === 0 ? customClass1 : index === 1 ? customClass2 : customClass3"
            />
          </div>
        </template>
      </SfHero></div>`
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
    "[props] sliderOptions",
    () => ({
      components: { SfHero },
      props: {
        autoplay: {
          default: number("autoplay option for glide.js", 1000)
        }
      },
      data,
      template: `<SfHero :sliderOptions="{ autoplay }">
        <template>
          <div v-for="(item, index) in items">
            <SfHeroItem
              :title="item.title"
              :subtitle="item.subtitle"
              :buttonText="item.buttonText"
              :background="item.background"
              :image="item.image"
            />
          </div>
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
    "[slot] controls",
    () => ({
      components: { SfHero },
      data,
      template: `
      <SfHero>
        <template>
          <div v-for="(item, index) in items">
            <SfHeroItem
              :title="item.title"
              :subtitle="item.subtitle"
              :buttonText="item.buttonText"
              :background="item.background"
              :image="item.image"
            />
          </div>
        </template>

        <template v-slot:prev="{ go }">
          <div @click="go">
            <span style="margin: 12px; cursor: pointer; font-weight: 900; font-size: 18px;">&lt; PREV</span>
          </div>
        </template>
        <template v-slot:next="{ go }">
          <div @click="go">
            <span style="margin: 12px; cursor: pointer; font-weight: 900; font-size: 18px;">NEXT &gt;</span>
          </div>
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
      <SfHero>
        <template>
          <div v-for="(item, index) in items">
            <SfHeroItem
              :title="item.title"
              :subtitle="item.subtitle"
              :buttonText="item.buttonText"
              :background="item.background"
              :image="item.image"
            />
          </div>
        </template>

        <template v-slot:bullets="{ numberOfPages, page, go }">
          <span v-for="n in numberOfPages">
            <span @click="go(n - 1)" style="margin-right: 5px">
              <template v-if="page === n">
                &lt; {{ n }} &gt;
              </template>
              <template v-else>
                {{ n }}
              </template>
            </span>
          </span>
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
