import { SfTabs, SfButton } from "@storefront-ui/vue";
import SfTab from "./_internal/SfTab.vue";

export default {
  title: "Components/Organisms/Tabs",
  component: SfTab,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "tabs-title-z-index": { value: "", control: "text" },
      "tabs-title-display": { value: "flex", control: "text" },
      "tabs-title-flex": { value: "0 0 100%", control: "text" },
      "tabs-title-margin": { value: "", control: "text" },
      "tabs-title-padding": { value: "var(--spacer-sm)", control: "text" },
      "tabs-title-background": { value: "", control: "text" },
      "tabs-title-border": {
        value: "",
        control: "text",
      },
      "tabs-title-border-width": { value: "", control: "text" },
      "tabs-title-color": { value: "", control: "text" },
      "tabs-title-font": { value: "", control: "text" },
      "tabs-title-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "tabs-title-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "tabs-title-font-line-height": { value: "1.4", control: "text" },
      "tabs-title-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "tabs-content-order": { value: "", control: "text" },
      "tabs-content-border": {
        value:
          "var(--tabs-content-border-style, solid) var(--tabs-content-border-color, var(--c-light))",
        control: "text",
      },
      "tabs-content-border-width": { value: "0", control: "text" },
      "tabs-content-color": { value: "var(--c-text)", control: "text" },
      "tabs-content-font": { value: "", control: "text" },
      "tabs-content-font-weight": {
        value: "var(--font-weight--light)",
        control: "text",
      },
      "tabs-content-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "tabs-content-font-line-height": { value: "1.6", control: "text" },
      "tabs-content-font-family": {
        value: "var(--font-family--primary)",
        control: "text",
      },
      "tabs-content-tab-padding": {
        value: "var(--spacer-base) var(--spacer-sm)",
        control: "text",
      },
      "tabs-chevron-display": { value: "", control: "text" },
      "chevron-color": {
        value: "var(--c-primary)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "tabs-title-border-color": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      inlineStories: false,
      iframeHeight: "300px",
      description: {
        component:
          "Component with tab-related content.  Built from main component - SfTabs and internal component - SfTab.",
      },
    },
  },
  argTypes: {
    tabMaxContentHeight: {
      control: "text",
      table: {
        category: "Props for main component",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      description: "Max height of visible content",
    },
    tabShowText: {
      control: "text",
      table: {
        category: "Props for main component",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "show",
      description: "Text for button showing content",
    },
    tabHideText: {
      control: "text",
      table: {
        category: "Props for main component",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "hide",
      description: "Text for button hiding content",
    },
    openTab: {
      control: "number",
      table: {
        category: "Props for main component",
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: "1",
        },
      },
      description: "Which tab should be open",
    },
    title: {
      control: "text",
      table: {
        category: "Props for SfTab component",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "Title of the tab",
    },
    "click:tab": {
      action: "click:tab event emitted",
      table: { category: "Events", type: { summary: null } },
      description:
        "Emits click:tab event with index of the tab when active tab is changed",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfTabs },
  props: Object.keys(argTypes),
  data() {
    return {
      tabs: [
        {
          title: "Description",
          content:
            "The Karissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common 'problem' areas. Find stunning women's cocktail dresses and party dresses. The Karissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common 'problem' areas. Find stunning women's cocktail dresses and party dresses. The Karissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common 'problem' areas. Find stunning women's cocktail dresses and party dresses. The Karissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common 'problem' areas. Find stunning women's cocktail dresses and party dresses. The Karissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common 'problem' areas. Find stunning women's cocktail dresses and party dresses.",
        },
        {
          title: "Read reviews",
          content:
            "The Larissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common 'problem' areas. Find stunning women's cocktail dresses and party dresses.",
        },
        {
          title: "Additional Information",
          content:
            "The Marissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common 'problem' areas. Find stunning women's cocktail dresses and party dresses.",
        },
      ],
    };
  },
  template: `
  <SfTabs
    :open-tab="openTab"
    :tabMaxContentHeight="tabMaxContentHeight"
    :tabShowText="tabShowText"
    :tabHideText="tabHideText"
    @click:tab="this['click:tab']"
  >
    <SfTab 
        v-for="tab in tabs" 
        :key="tab.title" 
        :title="tab.title"            
    >
        {{tab.content}}
    </SfTab>
  </SfTabs>`,
});

export const Common = Template.bind({});
Common.args = {
  openTab: 1,
  tabMaxContentHeight: "6.25rem",
};

export const changeTabsWithButtons = (args, { argTypes }) => ({
  components: { SfTabs, SfButton },
  props: Object.keys(argTypes),
  data() {
    return {
      open: 1,
      tabs: [
        {
          title: "Description",
          content:
            "The Karissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common 'problem' areas. Find stunning women's cocktail dresses and party dresses. The Karissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common 'problem' areas. Find stunning women's cocktail dresses and party dresses. The Karissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common 'problem' areas. Find stunning women's cocktail dresses and party dresses. The Karissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common 'problem' areas. Find stunning women's cocktail dresses and party dresses. The Karissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common 'problem' areas. Find stunning women's cocktail dresses and party dresses.",
        },
        {
          title: "Read reviews",
          content:
            "The Larissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common 'problem' areas. Find stunning women's cocktail dresses and party dresses.",
        },
        {
          title: "Additional Information",
          content:
            "The Marissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common 'problem' areas. Find stunning women's cocktail dresses and party dresses.",
        },
      ],
    };
  },
  methods: {
    change(tabNumber) {
      this.open = tabNumber;
      this["click:tab"](this.open);
    },
  },
  template: `<div>
  <SfButton style="display: inline; margin: var(--spacer-xs)" @click="change(1)">open tab 1</SfButton>
  <SfButton style="display: inline; margin: var(--spacer-xs)" @click="change(2)">open tab 2</SfButton>
  <SfButton style="display: inline; margin: var(--spacer-xs)" @click="change(3)">open tab 3</SfButton>
  <SfTabs
    :open-tab="open"
    :tabMaxContentHeight="tabMaxContentHeight"
    :tabShowText="tabShowText"
    :tabHideText="tabHideText"
    @click:tab="change"
  >
    <SfTab
        v-for="tab in tabs"
        :key="tab.title"
        :title="tab.title"
    >
        {{tab.content}}
    </SfTab>
  </SfTabs></div>`,
});
changeTabsWithButtons.args = { ...Common.args };
