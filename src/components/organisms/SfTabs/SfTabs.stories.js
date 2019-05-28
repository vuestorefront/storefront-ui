/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import notes from "./README.md";
import SfTabs from "./SfTabs.vue";

storiesOf("Organisms|Tabs", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { SfTabs },
      template: `
      <SfTabs>
        <SfTab title="apple" style="display: flex; justify-content: center;">
          <img style="max-height: 200px" src="https://i5.walmartimages.ca/images/Large/428/5_r/6000195494285_R.jpg" />
        </SfTab>
        <SfTab title="banana">banana</SfTab>
        <SfTab title="peach">peach</SfTab>
        <SfTab title="orange" style="display: flex; justify-content: center;">
          <img style="max-height: 200px" src="https://www.wykop.pl/cdn/c3201142/comment_X7SEcieexT4yoDSxYJwULzPrgkVRXXs7.jpg" />
        </SfTab>
      </SfTabs>`
    }),
    {
      info: true,
      notes
    }
  )
  .add(
    "[slot] navigation",
    () => ({
      components: { SfTabs },
      data: () => ({
        selected: "bananaValue"
      }),
      template: `
      <SfTabs v-model="selected">
        <SfTabsNavigation slot="navigation">
          <div style="display: flex; justify-content: space-between; cursor: pointer;" slot-scope="{ tabs, changeTab, activeTabValue }">
            <h1 v-for="(tab, index) in tabs" :key="index" @click="changeTab(tab.valueComputed)">{{ tab.title }} <b v-if="tab.valueComputed === activeTabValue">!!!</b></h1>
          </div>
        </SfTabsNavigation>
        <SfTab value="appleValue" title="apple" style="display: flex; justify-content: center;">
          <img style="max-height: 200px" src="https://i5.walmartimages.ca/images/Large/428/5_r/6000195494285_R.jpg" />
        </SfTab>
        <SfTab value="bananaValue" title="banana">banana</SfTab>
        <SfTab value="peachValue" title="peach">peach</SfTab>
        <SfTab value="orangeValue" title="orange" style="display: flex; justify-content: center;">
          <img style="max-height: 200px" src="https://www.wykop.pl/cdn/c3201142/comment_X7SEcieexT4yoDSxYJwULzPrgkVRXXs7.jpg" />
        </SfTab>
      </SfTabs>`
    }),
    {
      info: true,
      notes
    }
  );
