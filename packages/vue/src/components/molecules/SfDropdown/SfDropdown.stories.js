import { SfDropdown, SfList, SfButton } from "@storefront-ui/vue";

export default {
  title: "Components/Molecules/Dropdown",
  component: SfDropdown,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: "25em",
      parameters: {
        docs: {
          description: {
            component: "Dropdown component",
          },
        },
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
  actionList: ["Add to cart", "Add to compare", "Add to wishlist", "Share"],
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
