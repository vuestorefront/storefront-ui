/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";
import notes from "./README.md";
import SfOptions from "./SfOptions.vue";

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
      notes,
      info: {
        summary: `<h2> Usage </h2>
        <pre><code>import SfOptions from "@storefrontui/vue/dist/SfOptions.vue"</code></pre>`
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
      notes,
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
      notes,
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
      notes,
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
      notes,
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
      notes,
      info: true
    }
  );
