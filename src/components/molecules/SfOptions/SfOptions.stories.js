/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withKnobs, text } from "@storybook/addon-knobs";

import SfOptions from "./SfOptions.vue";

storiesOf("Options", module)
  .addDecorator(withKnobs)
  .add(
    "Props text",
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
        '<sf-options :label="label" v-model="selected" :options="options" />',
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
    "Slots text",
    () => ({
      components: { SfOptions },
      template: `
      <sf-options
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
      </sf-options>`,
      data() {
        return {
          selected: "XS"
        };
      }
    }),
    {
      info: true
    }
  );
