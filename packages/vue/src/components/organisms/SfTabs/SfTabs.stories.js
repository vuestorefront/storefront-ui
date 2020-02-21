/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import SfTabs from "./SfTabs.vue";

storiesOf("Organisms|Tabs", module)
  .add("Common", () => ({
    components: { SfTabs },
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
  }))
  .add("[slot] title", () => ({
    components: { SfTabs },
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
          <template #title={tabClick}>
            <div @click="tabClick" :style="{margin: '0 1rem', cursor: 'pointer'}">CUSTOM TITLE</div>
          </template>
          {{tab.content}}
        </SfTab>
      </SfTabs>`
  }));
