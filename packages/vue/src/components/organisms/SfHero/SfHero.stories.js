/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  number,
  optionsKnob as options
} from "@storybook/addon-knobs";

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

storiesOf("Organisms|Hero", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
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
          { display: "multi-select" },
          "CSS Modifiers"
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
          { display: "multi-select" },
          "CSS Modifiers"
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
          { display: "multi-select" },
          "CSS Modifiers"
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
  }))
  .add("[props] sliderOptions", () => ({
    components: { SfHero },
    props: {
      autoplay: {
        default: number("autoplay option for glide.js", 1000, {}, "Props")
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
  }))

  .add("[slot] controls", () => ({
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
  }))

  .add("[slot] bullets", () => ({
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
  }));
