// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import SfContentPages from "./SfContentPages.vue";
import SfTabs from "../SfTabs/SfTabs.vue";

storiesOf("Organisms|ContentPages", module).add("[slot] default", () => ({
  components: {
    SfContentPages,
    SfTabs
  },
  props: {},
  data() {
    return {
      activePage: "About us"
    };
  },
  template: `<div>
      <SfContentPages
        :active="activePage"
        @click:change="updateActive"
        title="Help">
        <SfContentPage title="About us">
          <SfTabs :open-tab="1">
            <SfTab title="Security">
              This website ("website") is operated by Luma Inc., which includes
              Luma stores, and Luma Private Sales. This privacy policy only covers
              information collected at this website, and does not cover any
              information collected offline by Luma. All Luma websites are covered
              by this privacy policy.
            </SfTab>
            <SfTab title="Privacy Policy">
              This website ("website") is operated by Luma Inc., which includes
              Luma stores, and Luma Private Sales. This privacy policy only covers
              information collected at this website, and does not cover any
              information collected offline by Luma. All Luma websites are covered
              by this privacy policy.
            </SfTab>
            <SfTab title="Additional Information ">
              This website ("website") is operated by Luma Inc., which includes
              Luma stores, and Luma Private Sales. This privacy policy only covers
              information collected at this website, and does not cover any
              information collected offline by Luma. All Luma websites are covered
              by this privacy policy.
            </SfTab>
          </SfTabs>
        </SfContentPage>
        <SfContentPage title="Customer service">
          <SfTabs :open-tab="1">
            <SfTab title="Size guide">
              This website ("website") is operated by Luma Inc., which includes
              Luma stores, and Luma Private Sales. This privacy policy only covers
              information collected at this website, and does not cover any
              information collected offline by Luma. All Luma websites are covered
              by this privacy policy.
            </SfTab>
            <SfTab title="Where's my order?">
              This website ("website") is operated by Luma Inc., which includes
              Luma stores, and Luma Private Sales. This privacy policy only covers
              information collected at this website, and does not cover any
              information collected offline by Luma. All Luma websites are covered
              by this privacy policy.
            </SfTab>
          </SfTabs>
        </SfContentPage>
        <SfContentPage title="Store locator">
          This website ("website") is operated by Luma Inc., which includes
          Luma stores, and Luma Private Sales. This privacy policy only covers
          information collected at this website, and does not cover any
          information collected offline by Luma. All Luma websites are covered
          by this privacy policy.
        </SfContentPage>
      </SfContentPages>
      <button 
        v-if="activePage" 
        @click="activePage = ''" 
        style="position: absolute; bottom: .5rem; left: .5rem; border: 0; background-color: transparent" 
        class="mobile-only">back</button>
    </div>`,
  methods: {
    updateActive(title) {
      this.activePage = title;
    }
  }
}));
