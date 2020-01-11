import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";
import SfScrollable from "./SfScrollable.vue";
import SfProductOption from "../SfProductOption/SfProductOption.vue";
storiesOf("Molecules|Scrollable", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfScrollable, SfProductOption },
    props: {
      showText: {
        default: text("showText", "View all colors", "Props")
      },
      hideText: {
        default: text("hideText", "Hide colors", "Props")
      },
      maxContentHeight: {
        default: text("maxContentHeight", "6.875rem", "Props")
      }
    },
    data() {
      return {
        options: [
          {
            color: "red",
            label: "Red"
          },
          {
            color: "blue",
            label: "Blue"
          },
          {
            color: "green",
            label: "Green"
          },
          {
            color: "black",
            label: "Black"
          },
          {
            color: "navy",
            label: "Navy"
          },
          {
            color: "pink",
            label: "Pink"
          }
        ]
      };
    },
    template: `<SfScrollable 
        :show-text="showText" 
        :hide-text="hideText"
        :max-content-height="maxContentHeight"
        style="max-width: 13.75rem"
      >
        <SfProductOption 
          v-for="(option, key) in options" 
          :key="option.color" 
          :color="option.color" 
          :label="option.label"
          :style="{marginBottom: key < options.length - 1 ? '8px' : undefined}"/>
      </SfScrollable>`
  }))
  .add("Content height by CSS", () => ({
    components: { SfScrollable, SfProductOption },
    props: {
      showText: {
        default: text("showText", "View all colors", "Props")
      },
      hideText: {
        default: text("hideText", "Hide colors", "Props")
      }
    },
    data() {
      return {
        options: [
          {
            color: "red",
            label: "Red"
          },
          {
            color: "blue",
            label: "Blue"
          },
          {
            color: "green",
            label: "Green"
          },
          {
            color: "black",
            label: "Black"
          },
          {
            color: "navy",
            label: "Navy"
          },
          {
            color: "pink",
            label: "Pink"
          }
        ]
      };
    },
    template: `<SfScrollable
      :show-text="showText"
      :hide-text="hideText"
      style="max-width: 13.75rem; --max-height: 1.375rem"
    >
      <SfProductOption
        v-for="(option, key) in options"
        :key="option.color"
        :color="option.color"
        :label="option.label"
        :style="{marginBottom: key < options.length - 1 ? '8px' : undefined}"/>
    </SfScrollable>`
  }));
