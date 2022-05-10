import { SfSearchBar } from "@storefront-ui/vue";

export default {
  title: "Components/Molecules/SearchBar",
  component: SfSearchBar,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "search-bar-display": { value: "flex", control: "text" },
      "search-bar-background": { value: "", control: "text" },
      "search-bar-padding": { value: "", control: "text" },
      "search-bar-width": { value: "", control: "text" },
      "search-bar-height": { value: "2rem", control: "text" },
      "search-bar-button-right": { value: "0", control: "text" },
      "search-bar-icon-display": { value: "", control: "text" },
      "search-bar-input-text-align": { value: "", control: "text" },
      "search-bar-font": { value: "", control: "text" },
      "search-bar-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "search-bar-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "search-bar-font-line-height": { value: "1.6", control: "text" },
      "search-bar-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "search-bar-border": {
        value:
          "var(--search-bar-border-style, solid) var(--search-bar-border-color, var(--c-dark-variant))",
        control: "text",
      },
      "search-bar-border-width": { value: "0 0 2px 0", control: "text" },
      "search-bar-placeholder-color": {
        value: "var(--c-gray)",
        control: "text",
      },
      "search-bar-placeholder-transition": {
        value: "color 0.2s ease-in",
        control: "text",
      },
      "search-bar-placeholder-color-focus": {
        value: "transparent",
        control: "text",
      },
      "search-bar-icon-flex-direction": { value: "", control: "text" },
      "icon-size": {
        value: "1.25rem",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "search-bar-border-color": {
        value: "",
        control: "text",
      },
    },

    docs: {
      description: {
        component: "Search bar component with placeholder text and icon.",
      },
    },
  },
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: [
          "",
          "sf-search-bar--position-center",
          "sf-search-bar--no-icon",
        ],
      },
      table: {
        category: "CSS Modifiers",
      },
      description: "CSS classes to modify component styling",
    },
    placeholder: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: {
          summary: "",
        },
      },
      description: "Text for placeholder",
    },
    value: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: {
          summary: "null",
        },
      },
      defaultValue: null,
      description: "Value that will be displayed in search bar",
    },
    icon: {
      control: "object",
      table: {
        category: "Props",
        defaultValue: {
          icon: null,
          size: "1.25rem",
          color: "#43464E",
        },
      },
      defaultValue: {
        icon: "",
        size: "",
        color: "",
      },
      name: "icon",
      description: "Define the type, size and color of the search icon ",
    },
    iconSize: {
      control: "text",
      name: "icon.size",
      description:
        "Define size of the search icon. Property in icon object prop (for testing purposes).Custom size of the icon. It can be our standard sizes, or `12px` or `1.2rem` or nothing. Standard sizes: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `xl3`, `xl4`. See icon prop below.",
      defaultValue: "",
    },
    iconColor: {
      control: "color",
      name: "icon.color",
      description:
        "Define color of the search icon. Property in icon object prop (for testing purposes). Custom color of the icon. It can be according to our standard colors, or legitimate CSS color such as `#fff`, `rgb(255,255,255)`), and `lightgray` or nothing. Standard colors: `white`, `black`, `green-primary`, `green-secondary`, `gray-primary`, `gray-secondary`, `light-primary`, `light-secondary`, `pink-primary`, `pink-secondary`, `yellow-primary`, `yellow-secondary`, `blue-primary`, `blue-secondary`, `accent`. See icon prop below.",
    },
    input: {
      action: "input event emitted",
      table: { category: "Events", type: { summary: null } },
      description:
        "Emits input event when search value is changed or enter or esc keys are pressed",
    },
    blur: {
      action: "blur event emitted",
      table: { category: "Events", type: { summary: null } },
      description: "Emits blur event when search field loses focus",
    },
    focus: {
      action: "focus event emitted",
      table: { category: "Events", type: { summary: null } },
      description:
        "Emits focus event when search field gains focus. It is passed via v-on='$listeners'",
    },
    "click:icon": {
      action: "click:icon event emitted",
      table: { category: "Events", type: { summary: null } },
      description: "Emits click:icon event when search icon is clicked",
    },
    "icon ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to replace the icon",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfSearchBar },
  props: Object.keys(argTypes),
  data() {
    return {
      searchValue: this.value,
    };
  },
  computed: {
    iconCheck() {
      return this.iconSize || this.iconColor
        ? {
            icon: this.icon.icon,
            size: this.iconSize,
            color: this.iconColor,
          }
        : {
            icon: this.icon.icon,
            size: this.icon.size,
            color: this.icon.color,
          };
    },
  },
  template: `
  <SfSearchBar
  :icon="iconCheck"
  :class="classes"
  :placeholder="placeholder"
  @blur="blur"
  @focus="focus"
  @input="input"
  @click:icon="this['click:icon']"
  aria-label="Search"
  v-model="searchValue"/>`,
});

export const Common = Template.bind({});
Common.args = {
  placeholder: "Search for items",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Common.args,
  icon: {
    icon: "search",
    color: "#43464E",
    size: "1.25rem",
  },
};

export const WithValue = Template.bind({});
WithValue.args = {
  ...Common.args,
  value: "hello",
};

export const HideIconCSS = Template.bind({});
HideIconCSS.args = {
  ...WithIcon.args,
  classes: "sf-search-bar--no-icon",
};

export const Centered = Template.bind({});
Centered.args = {
  ...WithIcon.args,
  classes: "sf-search-bar--position-center",
};

export const UseIconSlot = (args, { argTypes }) => ({
  components: { SfSearchBar },
  data() {
    return {
      searchValue: this.value,
    };
  },
  props: Object.keys(argTypes),
  template: `
  <SfSearchBar
    :placeholder="placeholder"
    @click:icon="this['click:icon']"
    @blur="blur"
    @focus="focus"
    @input="input"
    aria-label="Search"
    v-model="searchValue">
    <template #icon>👀</template>
  </SfSearchBar>`,
});
UseIconSlot.args = { ...Common.args };
