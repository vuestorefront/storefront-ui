import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  object,
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
      icon: {
        default: object(
          "icon",
          {
            color: "#43464E",
            size: "1.25rem",
            icon: "search",
          },
          "Props"
        ),
      },
    },
    data() {
      return {
        value: "",
      };
    },
    methods: {
      alert(label) {
        alert(label);
      },
    },
    template: `<SfSearchBar
      :icon="icon"
      :class="customClass"
      :placeholder="placeholder"
      @click="alert(value)"
      @enter="alert(value)"
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
    methods: {
      alert(label) {
        alert(label);
      },
    },
    template: `<SfSearchBar
      :class="customClass"
      :placeholder="placeholder"
      @click="alert(value)"
      @enter="alert(value)"
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
    methods: {
      alert(label) {
        alert(label);
      },
    },
    template: `<SfSearchBar
      :class="customClass"
      :placeholder="placeholder"
      @enter="alert(value)"
      aria-label="Search"
      v-model="value">
    </SfSearchBar>`,
  }));
