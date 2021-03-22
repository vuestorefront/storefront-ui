import { SfTabs, SfButton } from "@storefront-ui/vue";
export default {
  title: "Components/Organisms/Tabs",
  component: SfTabs,
  argTypes: {
    tabMaxContentHeight: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    tabShowText: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    tabHideText: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    openTab: {
      control: "number",
      table: {
        category: "Props",
      },
    },
    "click:tab": {
      action: "Tab clicked",
      table: { category: "Events" },
      description:
        "This event can be used on SfTabs when there is a need to change tabs in other way than clicking on a particular SfTab. For example by clicking on a button - this example can be found below in a story called `Change Tabs With Buttons`",
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
