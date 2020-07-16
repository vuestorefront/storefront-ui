import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import { SfSearchBar } from "@storefront-ui/vue";
storiesOf("Molecules|SearchBar", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfSearchBar },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-search-bar--position-center": "sf-search-bar--position-center",
            "sf-search-bar--no-icon": "sf-search-bar--no-icon",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      placeholder: {
        default: text("placeholder", "Search for items", "Props"),
      },
    },
    data() {
      return {
        value: "",
      };
    },
    template: `<SfSearchBar
      :class="customClass"
      :placeholder="placeholder"
      aria-label="Search"
      v-model="value"/>`,
  }))
  .add("[slot] icon", () => ({
    components: { SfSearchBar },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-search-bar--position-center": "sf-search-bar--position-center",
            "sf-search-bar--no-icon": "sf-search-bar--no-icon",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      placeholder: {
        default: text("placeholder", "Search for items", "Props"),
      },
    },
    data() {
      return {
        value: "",
      };
    },
    template: `<SfSearchBar
      :class="customClass"
      :placeholder="placeholder"
      aria-label="Search"
      v-model="value">
      <template #icon>👀</template>
    </SfSearchBar>`,
  }))
  .add("with modifier --no-icon", () => ({
    components: { SfSearchBar },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-search-bar--position-center": "sf-search-bar--position-center",
            "sf-search-bar--no-icon": "sf-search-bar--no-icon",
          },
          "sf-search-bar--no-icon",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      placeholder: {
        default: text("placeholder", "Search for items", "Props"),
      },
    },
    data() {
      return {
        value: "",
      };
    },
    template: `<SfSearchBar
      :class="customClass"
      :placeholder="placeholder"
      aria-label="Search"
      v-model="value">
    </SfSearchBar>`,
  }));
