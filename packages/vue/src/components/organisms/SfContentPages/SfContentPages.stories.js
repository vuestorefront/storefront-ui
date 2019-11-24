import { storiesOf } from "@storybook/vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";

const StoriesMobileBar = {
  components: { SfIcon },
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  template: `<div class="mobile-only" :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.25rem', backgroundColor: '#F1F2F3' }">
    <div :style="{ display: 'flex' }">
      <button
      v-if="title"
      @click="$emit('click:back')"
      :style="{ padding: '0', margin: '0', border: '0', backgroundColor: 'transparent', outline: 'none', cursor: 'pointer' }"
      >
        <SfIcon icon="chevron_left" size="14px" />
      </button>
    </div>
    <div :style="{ fontSize: '1rem', fontWeight: '500', fontFamily: 'Raleway, sans-serif' }">{{ title }}</div>
    <div :style="{ display: 'flex', width: '14px' }">
      <button v-if="false" :style="{ padding: '0', margin: '0', border: '0', backgroundColor: 'transparent', outline: 'none', cursor: 'pointer' }">
        <SfIcon icon="cross" size="14px" />
      </button>
    </div>
  </div>`
};

import SfContentPages from "./SfContentPages.vue";
import SfTabs from "../SfTabs/SfTabs.vue";

storiesOf("Organisms|ContentPages", module)
  .add("Basic", () => ({
    components: { SfContentPages, SfTabs, StoriesMobileBar },
    data() {
      return {
        activePage: "About us"
      };
    },
    template: `<div :style="{margin: '-20px'}">
      <StoriesMobileBar :title="activePage ? activePage : 'Help'" @click:back="activePage = ''"/>
      <SfContentPages 
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
      </SfContentPages>
    </div>`,
    methods: {
      updateActivePage(title) {
        this.activePage = title;
      }
    }
  }))
  .add("With Category", () => ({
    components: { SfContentPages, SfTabs, StoriesMobileBar },
    data() {
      return {
        activePage: "My profile"
      };
    },
    template: `<div :style="{margin: '-20px'}">
      <StoriesMobileBar :title="activePage ? activePage : 'My account'" @click:back="activePage = ''"/>
      <SfContentPages 
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
      </SfContentPages>
    </div>`,
    methods: {
      updateActivePage(title) {
        this.activePage = title;
      }
    }
  }))
  .add("Mixed", () => ({
    components: { SfContentPages, SfTabs, StoriesMobileBar },
    data() {
      return {
        activePage: "My profile"
      };
    },
    template: `<div :style="{margin: '-20px'}">
      <StoriesMobileBar :title="activePage ? activePage : 'My account'" @click:back="activePage = ''"/>
      <SfContentPages 
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
      </SfContentPages>
    </div>`,
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
    components: { SfContentPages, SfTabs, StoriesMobileBar },
    data() {
      return {
        activePage: "About us"
      };
    },
    template: `<div :style="{margin: '-20px'}">
      <StoriesMobileBar :title="activePage ? activePage : 'Help'" @click:back="activePage = ''"/>
      <SfContentPages 
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
          This website ("website") is operated by Luma Inc., which includes Luma
          stores, and Luma Private Sales. This privacy policy only covers
          information collected at this website, and does not cover any
          information collected offline by Luma. All Luma websites are covered by
          this privacy policy.
        </SfContentPage>
      </SfContentPages>
    </div>`,
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
