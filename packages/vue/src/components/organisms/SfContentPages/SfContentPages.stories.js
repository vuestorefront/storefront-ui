import { storiesOf } from "@storybook/vue";

import SfContentPages from "./SfContentPages.vue";
import SfTabs from "../SfTabs/SfTabs.vue";

storiesOf("Organisms|ContentPages", module)
  .add("Common", () => ({
    components: { SfContentPages, SfTabs },
    data() {
      return {
        activePage: "About us"
      };
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
          <p style="padding: 1.25rem 0">This website ("website") is operated by Luma Inc., which includes Luma
            stores, and Luma Private Sales. This privacy policy only covers
            information collected at this website, and does not cover any
            information collected offline by Luma. All Luma websites are covered by
            this privacy policy.</p>
        </SfContentPage>
      </SfContentPages>`,
    methods: {
      updateActivePage(title) {
        this.activePage = title;
      }
    }
  }))
  .add("With Category", () => ({
    components: { SfContentPages, SfTabs },
    data() {
      return {
        activePage: "My profile"
      };
    },
    template: `<SfContentPages 
        title="Help"
        :active="activePage"
        @click:change="updateActivePage"
      >
        <SfContentCategory title="Personal Details">
          <SfContentPage title="My profile">
            <SfTabs :open-tab="1">
              <SfTab title="Personal data">
                This website ("website") is operated by Luma Inc., which includes
                Luma stores, and Luma Private Sales. This privacy policy only covers
                information collected at this website, and does not cover any
                information collected offline by Luma. All Luma websites are covered
                by this privacy policy.
              </SfTab>
              <SfTab title="Password change">
                This website ("website") is operated by Luma Inc., which includes
                Luma stores, and Luma Private Sales. This privacy policy only covers
                information collected at this website, and does not cover any
                information collected offline by Luma. All Luma websites are covered
                by this privacy policy.
              </SfTab>
            </SfTabs>
          </SfContentPage>
          <SfContentPage title="Shipping details">
            <SfTabs :open-tab="1">
              <SfTab title="Shipping details">
                This website ("website") is operated by Luma Inc., which includes
                Luma stores, and Luma Private Sales. This privacy policy only covers
                information collected at this website, and does not cover any
                information collected offline by Luma. All Luma websites are covered
                by this privacy policy.
              </SfTab>
            </SfTabs>
          </SfContentPage>
          <SfContentPage title="My newsletter">
            <SfTabs :open-tab="1">
              <SfTab title="My newsletter">
                This website ("website") is operated by Luma Inc., which includes
                Luma stores, and Luma Private Sales. This privacy policy only covers
                information collected at this website, and does not cover any
                information collected offline by Luma. All Luma websites are covered
                by this privacy policy.
              </SfTab>
            </SfTabs>
          </SfContentPage>
        </SfContentCategory>
      </SfContentPages>`,
    methods: {
      updateActivePage(title) {
        this.activePage = title;
      }
    }
  }))
  .add("Mixed", () => ({
    components: { SfContentPages, SfTabs },
    data() {
      return {
        activePage: "My profile"
      };
    },
    template: `<SfContentPages 
        title="My account"
        :active="activePage"
        @click:change="updateActivePage"
      >
        <SfContentCategory title="Personal Details">
          <SfContentPage title="My profile">
            <SfTabs :open-tab="1">
              <SfTab title="Personal data">
                This website ("website") is operated by Luma Inc., which includes
                Luma stores, and Luma Private Sales. This privacy policy only covers
                information collected at this website, and does not cover any
                information collected offline by Luma. All Luma websites are covered
                by this privacy policy.
              </SfTab>
              <SfTab title="Password change">
                This website ("website") is operated by Luma Inc., which includes
                Luma stores, and Luma Private Sales. This privacy policy only covers
                information collected at this website, and does not cover any
                information collected offline by Luma. All Luma websites are covered
                by this privacy policy.
              </SfTab>
            </SfTabs>
          </SfContentPage>
          <SfContentPage title="Shipping details">
            <SfTabs :open-tab="1">
              <SfTab title="Shipping details">
                This website ("website") is operated by Luma Inc., which includes
                Luma stores, and Luma Private Sales. This privacy policy only covers
                information collected at this website, and does not cover any
                information collected offline by Luma. All Luma websites are covered
                by this privacy policy.
              </SfTab>
            </SfTabs>
          </SfContentPage>
          <SfContentPage title="My newsletter">
            <SfTabs :open-tab="1">
              <SfTab title="My newsletter">
                This website ("website") is operated by Luma Inc., which includes
                Luma stores, and Luma Private Sales. This privacy policy only covers
                information collected at this website, and does not cover any
                information collected offline by Luma. All Luma websites are covered
                by this privacy policy.
              </SfTab>
            </SfTabs>
          </SfContentPage>
        </SfContentCategory>
        <SfContentCategory title="Order details">
          <SfContentPage title="Order history">
            This website ("website") is operated by Luma Inc., which includes
            Luma stores, and Luma Private Sales. This privacy policy only covers
            information collected at this website, and does not cover any
            information collected offline by Luma. All Luma websites are covered
            by this privacy policy.
          </SfContentPage>
        </SfContentCategory>
        <SfContentPage title="Logout"></SfContentPage>
      </SfContentPages>`,
    methods: {
      updateActivePage(title) {
        if (title === "Logout") {
          alert("You're logout");
          return;
        }
        this.activePage = title;
      }
    }
  }))
  .add("With Icon", () => ({
    components: { SfContentPages, SfTabs },
    data() {
      return {
        activePage: "About us"
      };
    },
    template: `<SfContentPages 
        title="Help"
        :active="activePage"
        @click:change="updateActivePage"
      >
        <SfContentPage title="About us" icon="profile">
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
        <SfContentPage title="Customer service" icon="home">
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
        <SfContentPage title="Store locator" icon="heart">
          <p style="padding: 1.25rem 0">This website ("website") is operated by Luma Inc., which includes Luma
          stores, and Luma Private Sales. This privacy policy only covers
          information collected at this website, and does not cover any
          information collected offline by Luma. All Luma websites are covered by
            this privacy policy.</p>
        </SfContentPage>
      </SfContentPages>`,
    methods: {
      updateActivePage(title) {
        if (title === "Logout") {
          alert("You're logout");
          return;
        }
        this.activePage = title;
      }
    }
  }));
