import { SfTabs } from "@storefront-ui/vue";
export default {
  title: "Organisms/Tabs",
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
