import { SfDropdown, SfList, SfButton } from "@storefront-ui/vue";

export default {
  title: "Components/Molecules/Dropdown",
  component: SfDropdown,
  parameters: {
    cssprops: {
      "dropdown-position": { value: "fixed", control: "text" },
      "dropdown-top": { value: "", control: "text" },
      "dropdown-bottom": { value: "", control: "text" },
      "dropdown-transform": { value: "", control: "text" },
      "dropdown-container-position": { value: "relative", control: "text" },
      "dropdown-container-top": { value: "", control: "text" },
      "dropdown-container-bottom": { value: "", control: "text" },
      "dropdown-container-width": { value: "100%", control: "text" },
      "dropdown-background": { value: "var(--c-white)", control: "text" },
      "dropdown-box-shadow": { value: "", control: "text" },
      "dropdown-title-padding": {
        value: "var(--spacer-sm) var(--spacer-lg)",
        control: "text",
      },
      "dropdown-title-font": { value: "", control: "text" },
      "dropdown-title-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "dropdown-title-font-size": {
        value: "var(--font-size--sm)",
        control: "text",
      },
      "dropdown-title-font-line-height": { value: "1.2", control: "text" },
      "dropdown-title-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "dropdown-animation-enter": { value: "dropdown 150ms", control: "text" },
      "dropdown-animation-leave": {
        value: "dropdown 150ms reverse",
        control: "text",
      },
      "button-background": {
        value: "var(--c-light)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-color": {
        value: "var(--c-text-muted)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-display": {
        value: "none",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },

    docs: {
      inlineStories: false,
      iframeHeight: "25em",
      description: {
        component: "Dropdown component",
      },
    },
  },
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: ["sf-dropdown--up", ""],
      },
      table: {
        category: "CSS modifiers",
      },
      description: "CSS classes to modify component styling",
    },
    title: {
      control: "text",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      description: "Title for dropdown content, visible on mobile.",
    },
    isOpen: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: false,
      description: "If true dropdown is open.",
    },
    persistent: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: false,
      description: "If true clicking outside will not dismiss the dropdown.",
    },
    actionList: {
      control: "array",
      defaultValue: [
        "Add to cart",
        "Add to compare",
        "Add to wishlist",
        "Share",
      ],
      description:
        "Actions values (for testing purposes). For development, you can use default slot to place custom action buttons.",
    },
    "click:close": { action: "Close dropdown", table: { category: "Events" } },
    "click:open": { action: "Open dropdown", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfDropdown, SfList, SfButton },
  props: Object.keys(argTypes),
  template: `
  <SfDropdown
    :class="classes" 
    :is-open="isOpen"  
    @click:open="() => { this['click:open'](); this.isOpen = true }" 
    @click:close="() => { this['click:close'](); this.isOpen = false }" 
    :persistent="persistent" 
    :title="title"
  >
    <template>
      <SfList>
        <SfListItem v-for="(action, key) in actionList" :key="key">
          <SfButton class="sf-button--full-width sf-button--underlined color-primary" @click.stop="isOpen = false">{{ action }}</SfButton>
        </SfListItem>
      </SfList>
    </template> 
  </SfDropdown>`,
});

export const Common = Template.bind({});
Common.args = {
  title: "Choose size",
};

export const Persistent = Template.bind({});
Persistent.args = {
  ...Common.args,
  isOpen: true,
  persistent: true,
};

export const IsOpened = Template.bind({});
IsOpened.args = {
  ...Common.args,
  isOpen: true,
};

export const WithUpModifier = Template.bind({});
WithUpModifier.args = {
  ...Common.args,
  classes: "sf-dropdown--up",
};
