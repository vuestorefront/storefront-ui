/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";
import SfOptions from "./SfOptions.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "$sf-options__label-font-size",
      "$font-size-big-mobile",
      "font-size for label"
    ],
    [
      "sf-options__label-margin-bottom",
      "0.5rem",
      "margin between label and options"
    ],
    ["$sf-options__transition", "all 0.3s ease-in-out", "transistion on label"],
    ["sf-options__option-margin", "0.75rem", "margin between options"],
    ["$sf-options__option-size", "2rem", "width and height of option"],
    [
      "$sf-options-desktop__option-color-size",
      "1rem",
      "width and height of color"
    ],
    [
      "$sf-options__option-font-size",
      "$font-size-regular-mobile",
      "font size of text option"
    ],
    [
      "$sf-options-mobile__option-text-color",
      "$c-gray",
      "color of text option on mobile"
    ],
    [
      "$sf-options-desktop__option-text-color",
      "$c-black",
      "color of text option on desktop"
    ]
  ]
};

const cssTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [
    ["sf-options__option-text--selected", "sets selected for text option"],
    ["sf-options__option-color--selected", "sets selected for color option"],
    ["sf-options__option-image--selected", "sets selected for image option"]
  ]
};
storiesOf("Molecules|Options", module)
  .addDecorator(withKnobs)
  .add(
    "Text",
    () => ({
      components: { SfOptions },
      props: {
        label: {
          default: text("Label", "Size")
        },
        options: {
          default: [
            {
              text: "XS",
              value: "XS"
            },
            {
              text: "S",
              value: "S"
            },
            {
              text: "M",
              value: "M"
            },
            {
              text: "L",
              value: "L"
            },
            {
              text: "XL",
              value: "XL"
            }
          ]
        }
      },
      template:
        '<SfOptions :label="label" v-model="selected" :options="options" />',
      data() {
        return {
          selected: "XS"
        };
      }
    }),
    {
      info: {
        summary: `<h2> Usage </h2>
        <pre><code>import { SfOptions } from "@storefront-ui/vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        ${generateStorybookTable(cssTableConfig, "CSS modifiers")}
        `
      }
    }
  )
  .add(
    "Color",
    () => ({
      components: { SfOptions },
      props: {
        label: {
          default: text("Label", "Color")
        },
        options: {
          default: [
            {
              color: "Orange",
              value: "Orange"
            },
            {
              color: "Pink",
              value: "Pink"
            },
            {
              color: "Yellow",
              value: "Yellow"
            },
            {
              color: "Blue",
              value: "Blue"
            },
            {
              color: "Green",
              value: "Green"
            }
          ]
        }
      },
      template:
        '<SfOptions type="color" :label="label" v-model="selected" :options="options" />',
      data() {
        return {
          selected: "Orange"
        };
      }
    }),
    {
      info: true
    }
  )
  .add(
    "Image",
    () => ({
      components: { SfOptions },
      props: {
        label: {
          default: text("Label", "Image")
        },
        options: {
          default: [
            {
              image: "/assets/logo.svg",
              value: "logo"
            },
            {
              image: "/assets/heart.svg",
              value: "heart"
            },
            {
              image: "/assets/home.svg",
              value: "home"
            },
            {
              image: "/assets/profile.svg",
              value: "profile"
            }
          ]
        }
      },
      template:
        '<SfOptions type="image" :label="label" v-model="selected" :options="options" />',
      data() {
        return {
          selected: "heart"
        };
      }
    }),
    {
      info: true
    }
  )
  .add(
    "[slot] Text",
    () => ({
      components: { SfOptions },
      template: `
      <SfOptions
        v-model="selected"
        :options="[
          {
            text: 'XS',
            value: 'XS'
          },
          {
            text: 'S',
            value: 'S'
          },
          {
            text: 'M',
            value: 'M'
          },
          {
            text: 'L',
            value: 'L'
          },
          {
            text: 'XL',
            value: 'XL'
          }
        ]"
      >
        <template #label><h1>Size</h1></template>
        <template #text="{ text }"><h2>{{ text }}</h2></template>
      </SfOptions>`,
      data() {
        return {
          selected: "XS"
        };
      }
    }),
    {
      info: true
    }
  )
  .add(
    "[slot] Color",
    () => ({
      components: { SfOptions },
      template: `
      <SfOptions
        type="color"
        v-model="selected"
        :options="[
          {
            color: 'Orange',
            value: 'Orange'
          },
          {
            color: 'Pink',
            value: 'Pink'
          },
          {
            color: 'Yellow',
            value: 'Yellow'
          },
          {
            color: 'Blue',
            value: 'Blue'
          },
          {
            color: 'Green',
            value: 'Green'
          }
        ]"
      >
        <template #label><h1>Color</h1></template>
        <template #color="{ color }">
          <div
            :style="{
              width: '32px', height: '32px', borderRadius: '10px', backgroundColor: color
            }"
          />
        </template>
      </SfOptions>`,
      data() {
        return {
          selected: "Orange"
        };
      }
    }),
    {
      info: true
    }
  )
  .add(
    "[slot] Image",
    () => ({
      components: { SfOptions },
      template: `
      <SfOptions
        type="image"
        v-model="selected"
        :options="[
          {
            image: '/assets/logo.svg',
            value: 'logo'
          },
          {
            image: '/assets/heart.svg',
            value: 'heart'
          },
          {
            image: '/assets/home.svg',
            value: 'home'
          },
          {
            image: '/assets/profile.svg',
            value: 'profile'
          }
        ]"
      >
        <template #label><h1>Image</h1></template>
        <template #image="{ image }">
          <div
            :style="{
              width: '32px', height: '32px', border: '1px solid green', background: 'url(' + image + ')', backgroundSize: 'cover'
            }"
          />
        </template>
      </SfOptions>`,
      data() {
        return {
          selected: "heart"
        };
      }
    }),
    {
      info: true
    }
  );
