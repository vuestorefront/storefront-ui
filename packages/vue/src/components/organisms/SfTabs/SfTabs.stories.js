/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, number } from "@storybook/addon-knobs";

import SfTabs from "./SfTabs.vue";

storiesOf("Organisms|Tabs", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfTabs },
    props: {
      openTab: {
        default: number("openTab", 1, {}, "Props")
      }
    },
    data() {
      return {
        tabs: [
          {
            title: "Description",
            content:
              "The Karissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common 'problem' areas. Find stunning women's cocktail dresses and party dresses."
          },
          {
            title: "Read reviews",
            content:
              "The Larissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common 'problem' areas. Find stunning women's cocktail dresses and party dresses."
          },
          {
            title: "Additional Information",
            content:
              "The Marissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common 'problem' areas. Find stunning women's cocktail dresses and party dresses."
          }
        ]
      };
    },
    template: `<SfTabs
        :open-tab="openTab">
        <SfTab 
            v-for="tab in tabs" 
            :key="tab.title" 
            :title="tab.title"
        >
          {{tab.content}}
        </SfTab>
      </SfTabs>`
  }));
