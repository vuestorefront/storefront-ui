import { SfSearchBar } from "@storefront-ui/vue";
export default {
  title: "Components/Molecules/SearchBar",
  component: SfSearchBar,
  parameters: {
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
      control: "number",
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
        type: {
          summary: "object",
        },
        defaultValue: {
          summary: "{}",
        },
      },
      defaultValue: {
        size: "",
        color: "",
      },
      description:
        "Object to define icon look. Should have values for color and size",
    },
    iconSize: {
      control: "text",
      name: "icon.size",
      description:
        "Define size of the search icon. Property in icon object prop (for testing purposes).Custom size of the icon. It can be our standard sizes, or `12px` or `1.2rem` or nothing. Standard sizes: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `xl3`, `xl4`.",
      defaultValue: "",
    },
    iconColor: {
      control: "color",
      name: "icon.color",
      description:
        "Define color of the search icon. Property in icon object prop (for testing purposes). Custom color of the icon. It can be according to our standard colors, or legitimate CSS color such as `#fff`, `rgb(255,255,255)`), and `lightgray` or nothing. Standard colors: `white`, `black`, `green-primary`, `green-secondary`, `gray-primary`, `gray-secondary`, `light-primary`, `light-secondary`, `pink-primary`, `pink-secondary`, `yellow-primary`, `yellow-secondary`, `blue-primary`, `blue-secondary`, `accent`.",
    },
    input: { action: "Input changed", table: { category: "Events" } },
    blur: { action: "Not focus anymore", table: { category: "Events" } },
    focus: { action: "Focus", table: { category: "Events" } },
    click: { action: "Button click", table: { category: "Events" } },
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
            size: this.iconSize,
            color: this.iconColor,
          }
        : null;
    },
  },
  template: `
  <SfSearchBar
  :icon="iconCheck"
  :class="classes"
  :placeholder="placeholder"
  @click="click"
  @blur="blur"
  @focus="focus"
  @input="input"
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
  iconColor: "#43464E",
  iconSize: "1.25rem",
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
    @click="click"
    @blur="blur"
    @focus="focus"
    @input="input"
    aria-label="Search"
    v-model="searchValue">
    <template #icon>👀</template>
  </SfSearchBar>`,
});
UseIconSlot.args = { ...Common.args };
