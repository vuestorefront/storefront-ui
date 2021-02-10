import { SfSearchBar } from "@storefront-ui/vue";

export default {
  title: "Components/Molecules/SearchBar",
  component: SfSearchBar,
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
          summary: null,
        },
      },
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
      name: "icon object",
      description: "Define size of the search icon",
    },
    input: { action: "Input changed", table: { category: "Events" } },
    enter: { action: "Enter pressed", table: { category: "Events" } },
    click: { action: "Search button clicked", table: { category: "Events" } },
    blur: { action: "Not focus anymore", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfSearchBar },
  props: Object.keys(argTypes),
  template: `
  <SfSearchBar
  :icon="icon"
  :class="classes"
  :placeholder="placeholder"
  @enter="enter"
  @input="input"
  @blur="blur"
  @click="click"
  aria-label="Search"
  v-model="value"/>`,
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
