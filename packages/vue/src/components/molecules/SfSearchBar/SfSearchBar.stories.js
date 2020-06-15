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
        default: text(
          "placeholder",
          "Search for items and promotions",
          "Props"
        ),
      },
      icon: {
        default: text("icon", "search", "Props" )
      },
      colorIcon: {
        default: text("colorIcon", "--c-secondary-variant", "Props")
      },
      sizeIcon: {
        default: text("sizeIcon", "1.25rem", "Props")
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
      :icon="icon"
      :colorIcon="colorIcon"
      :sizeIcon="sizeIcon"
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
        default: text(
          "placeholder",
          "Search for items and promotions",
          "Props"
        ),
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
      <template #show-icon>👀</template>
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
        default: text(
          "placeholder",
          "Search for items and promotions",
          "Props"
        ),
        icon: {
          default: text("icon", "search", "Props")
        },
        colorIcon: {
          default: text("colorIcon", "--c-secondary-variant", "Props")
        },
        sizeIcon: {
          default: text("sizeIcon", "1.25rem", "Props")
        },
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
      :icon="icon"
      :colorIcon="colorIcon"
      :sizeIcon="sizeIcon"
      aria-label="Search"
      v-model="value">
    </SfSearchBar>`,
  }));
