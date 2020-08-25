import { storiesOf } from "@storybook/vue";
import { withKnobs, number, text } from "@storybook/addon-knobs";
import { SfTabs } from "@storefront-ui/vue";
storiesOf("Organisms|Tabs", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfTabs },
    props: {
      openTab: {
        default: number("openTab", 1, {}, "Props"),
      },
      tabMaxContentHeight: {
        default: text("tabMaxContentHeight", "6.25rem", "Props"),
      },
      tabShowText: {
        default: text("tabShowText", "show", "Props"),
      },
      tabHideText: {
        default: text("tabHideText", "hide", "Props"),
      },
    },
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
    template: `<SfTabs
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
  }));
