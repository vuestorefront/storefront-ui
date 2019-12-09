import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  optionsKnob as options
} from "@storybook/addon-knobs";

import SfSearchBar from "./SfSearchBar.vue";

storiesOf("Molecules|SearchBar", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfSearchBar },
    props: {
      customClass: {
        default: options(
          "CSS modifier",
          {
            "sf-search-bar--secondary": "sf-search-bar--secondary",
            "sf-search-bar--position-right": "sf-search-bar--position-right",
            "sf-search-bar--position-right-mobile":
              "sf-search-bar--position-right-mobile",
            "sf-search-bar--position-right-desktop":
              "sf-search-bar--position-right-desktop",
            "sf-search-bar--no-icon": "sf-search-bar--no-icon"
          },
          "null",
          { display: "multi-select" }
        )
      },
      placeholder: {
        default: text("placeholder (prop)", "Search for items")
      }
    },
    data() {
      return {
        value: ""
      };
    },
    template: `<SfSearchBar
      :class="customClass"
      :placeholder="placeholder"
      v-model="value"/>`
  }))
  .add("[slot] icon", () => ({
    components: { SfSearchBar },
    props: {
      customClass: {
        default: options(
          "CSS modifier",
          {
            "sf-search-bar--secondary": "sf-search-bar--secondary",
            "sf-search-bar--position-right": "sf-search-bar--position-right",
            "sf-search-bar--position-right-mobile":
              "sf-search-bar--position-right-mobile",
            "sf-search-bar--position-right-desktop":
              "sf-search-bar--position-right-desktop",
            "sf-search-bar--no-icon": "sf-search-bar--no-icon"
          },
          "null",
          { display: "multi-select" }
        )
      },
      placeholder: {
        default: text("placeholder (prop)", "Search for items")
      }
    },
    data() {
      return {
        value: ""
      };
    },
    template: `<SfSearchBar
      :class="customClass"
      :placeholder="placeholder"
      v-model="value">
      <template #icon>👀</template>
    </SfSearchBar>`
  }))
  .add("[slot] clear-icon", () => ({
    components: { SfSearchBar },
    props: {
      customClass: {
        default: options(
          "CSS modifier",
          {
            "sf-search-bar--secondary": "sf-search-bar--secondary",
            "sf-search-bar--position-right": "sf-search-bar--position-right",
            "sf-search-bar--position-right-mobile":
              "sf-search-bar--position-right-mobile",
            "sf-search-bar--position-right-desktop":
              "sf-search-bar--position-right-desktop",
            "sf-search-bar--no-icon": "sf-search-bar--no-icon"
          },
          "null",
          { display: "multi-select" }
        )
      },
      placeholder: {
        default: text("placeholder (prop)", "Search for items")
      }
    },
    data() {
      return {
        value: ""
      };
    },
    template: `<SfSearchBar
      :class="customClass"
      :placeholder="placeholder"
      v-model="value">
      <template #clear-icon>🧹</template>
    </SfSearchBar>`
  }));
