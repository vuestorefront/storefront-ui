import { SfSearchBar } from "@storefront-ui/vue";
export default {
  title: "Molecules/SearchBar",
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
      control: "number",
      table: {
        category: "Props",
        defaultValue: {
          summary: null,
        },
      },
      description: "Value that will be displayed in search bar",
    },
    iconSize: {
      control: "text",
      table: {
        category: "Props",
      },
      name: "icon.size",
      description: "Define size of the search icon",
    },
    iconColor: {
      control: "color",
      table: {
        category: "Props",
      },
      name: "icon.color",
      description: "Define color of the search icon",
    },
    input: { action: "Input changed", table: { category: "Events" } },
    enter: { action: "Enter pressed", table: { category: "Events" } },
    blur: { action: "Not focus anymore", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfSearchBar },
  props: Object.keys(argTypes),
  computed: {
    icon() {
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
  :icon="icon"
  :class="classes"
  :placeholder="placeholder"
  @enter="enter"
  @input="input"
  @blur="blur"
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
  props: Object.keys(argTypes),
  template: `
  <SfSearchBar
    :class="customClass"
    :placeholder="placeholder"
    @click="alert(value)"
    @enter="enter"
    @input="input"
    @blur="blur"
    aria-label="Search"
    v-model="value">
    <template #icon>👀</template>
  </SfSearchBar>`,
});
UseIconSlot.args = { ...Common.args };
