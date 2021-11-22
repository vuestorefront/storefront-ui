import { SfScrollable, SfProductOption } from "@storefront-ui/vue";

const options = [
  {
    color: "red",
    label: "Red",
  },
  {
    color: "blue",
    label: "Blue",
  },
  {
    color: "green",
    label: "Green",
  },
  {
    color: "black",
    label: "Black",
  },
  {
    color: "navy",
    label: "Navy",
  },
  {
    color: "pink",
    label: "Pink",
  },
];

export default {
  title: "Components/Molecules/Scrollable",
  component: SfScrollable,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "scrollable-max-height": {
        value: "var(--_scrollable-max-height, 5rem)",
        control: "text",
      },
      "scrollable-button-margin": {
        value: "var(--spacer-sm) 0 0 0",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component: "Scrollable wrapper with styled bar and toggle button.",
      },
    },
  },
  argTypes: {
    maxContentHeight: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: {
          summary: "",
        },
      },
      description: "Maximum height of visible content",
    },
    showText: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: {
          summary: "Show",
        },
      },
      description: "Text for button showing content",
    },
    hideText: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: {
          summary: "Hide",
        },
      },
      description: "Text for button hiding content",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfScrollable, SfProductOption },
  props: Object.keys(argTypes),
  data() {
    return {
      options,
    };
  },
  template: `
  <SfScrollable 
    :show-text="showText" 
    :hide-text="hideText"
    :max-content-height="maxContentHeight"
    style="max-width: 13.75rem"
    :style="customStyle"
  >
    <SfProductOption 
      v-for="(option, key) in options" 
      :key="option.color" 
      :color="option.color" 
      :label="option.label"
      :style="{marginBottom: key < options.length - 1 ? '8px' : undefined}"/>
  </SfScrollable>`,
});

export const Common = Template.bind({});
Common.args = {
  showText: "View all colors",
  hideText: "Hide colors",
  maxContentHeight: "6.875rem",
};

export const WithCSSHeight = Template.bind({});
WithCSSHeight.args = {
  ...Common.args,
  maxContentHeight: "",
  customStyle: "--max-height: 6.875rem;",
};

export const UseButtonSlot = (args, { argTypes }) => ({
  components: { SfScrollable, SfProductOption },
  props: Object.keys(argTypes),
  data() {
    return {
      options,
      isHidden: true,
    };
  },
  template: `
  <SfScrollable 
    :show-text="showText" 
    :hide-text="hideText"
    :max-content-height="maxContentHeight"
    :class="{ 'sf-scrollable--is-open': !isHidden }"
    style="max-width: 13.75rem"
  >
    <SfProductOption 
      v-for="(option, key) in options" 
      :key="option.color" 
      :color="option.color" 
      :label="option.label"
      :style="{marginBottom: key < options.length - 1 ? '8px' : undefined}"/>
      <template #view-all> 
        <button  @click="isHidden = !isHidden">
          <span v-if="isHidden" >{{showText}}</span>
          <span v-else>{{hideText}}</span>
        </button>
      </template>
  </SfScrollable>`,
});
UseButtonSlot.args = { ...Common.args };
