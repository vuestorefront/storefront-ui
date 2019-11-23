import { storiesOf } from "@storybook/vue";

import SfContentPages from "./SfContentPages.vue";
import SfTabs from "../SfTabs/SfTabs.vue";

storiesOf("Organisms|ContentPages", module)
  .add("basic", () => ({
    components: { SfContentPages, SfTabs },
    data(){
      return {
        activePage: "About us"
      }
    },
    template: `<SfContentPages 
      title="Help"
      :active="activePage"
      @click:change="updateActivePage"
      >
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
        This website ("website") is operated by Luma Inc., which includes Luma
        stores, and Luma Private Sales. This privacy policy only covers
        information collected at this website, and does not cover any
        information collected offline by Luma. All Luma websites are covered by
        this privacy policy.
      </SfContentPage>
    </SfContentPages>`,
    methods: {
      updateActivePage(title) {
        this.activePage = title;
      }
    }
  }))
  .add("category", () => ({
    components: { SfContentPages },
    template: `<SfContentPages title="Help">
      <SfContentCategory title="Category A">
        <SfContentPage title="Page A"></SfContentPage>
        <SfContentPage title="Page B"></SfContentPage>
        <SfContentPage title="Page C"></SfContentPage>
      </SfContentCategory>
    </SfContentPages>`
  }))
  .add("mixed", () => ({
    components: { SfContentPages },
    template: `<SfContentPages title="Help">
      <SfContentCategory title="Category A">
        <SfContentPage title="Page A"></SfContentPage>
        <SfContentPage title="Page B"></SfContentPage>
        <SfContentPage title="Page C"></SfContentPage>
      </SfContentCategory>
      <SfContentPage title="Page D"></SfContentPage>
      <SfContentPage title="Page E"></SfContentPage>
      <SfContentPage title="Page F"></SfContentPage>
    </SfContentPages>`
  }));
