import {
  withKnobs,
  text,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import SfSearchBar from "./SfSearchBar.vue";

export default {
  title: "Molecules|SearchBar",
  decorators: [withKnobs],
};

export const Common = () => ({
  components: { SfSearchBar },
  props: {
    customClass: {
      default: options(
        "CSS modifiers",
        {
          "sf-search-bar--position-center": "sf-search-bar--position-center",
          "sf-search-bar--no-icon": "sf-search-bar--no-icon",
        },
        "null",
        { display: "multi-select" },
        "CSS Modifiers"
      ),
    },
    placeholder: {
      default: text("placeholder", "Search for items", "Props"),
    },
    ariaLabel: {
      default: text("ariaLabel", "Search", "Props"),
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
      :aria-label="ariaLabel"
      v-model="value"/>`,
});

export const SlotIcon = () => ({
  components: { SfSearchBar },
  props: {
    customClass: {
      default: options(
        "CSS modifiers",
        {
          "sf-search-bar--position-center": "sf-search-bar--position-center",
          "sf-search-bar--no-icon": "sf-search-bar--no-icon",
        },
        "null",
        { display: "multi-select" },
        "CSS Modifiers"
      ),
    },
    placeholder: {
      default: text("placeholder", "Search for items", "Props"),
    },
    ariaLabel: {
      default: text("ariaLabel", "Search", "Props"),
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
      :aria-label="ariaLabel"
      v-model="value">
      <template #icon>👀</template>
    </SfSearchBar>`,
});

SlotIcon.story = {
  name: "[slot] icon",
};

export const WithModifierNoIcon = () => ({
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
    ariaLabel: {
      default: text("ariaLabel", "Search", "Props"),
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
      :aria-label="ariaLabel"
      v-model="value">
    </SfSearchBar>`,
});

WithModifierNoIcon.story = {
  name: "with modifier --no-icon",
};
