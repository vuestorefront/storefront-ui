<template>
  <div id="static">
    <SfBreadcrumbs
      class="breadcrumbs desktop-only"
      :breadcrumbs="breadcrumbs"
    />
    <SfContentPages
      :active="activePage"
      title="Help"
      @click:change="updateActive"
    >
      <SfContentPage
        v-for="(page, key) in pages"
        :key="key"
        :title="page.title"
      >
        <template v-if="page.content[0] && typeof page.content[0] === 'string'">
          <p
            v-for="(paragraph, index) in page.content"
            :key="index"
            class="paragraph paragraph--without-tab"
          >
            {{ paragraph }}
          </p>
        </template>
        <template v-else>
          <SfTabs :open-tab="1">
            <SfTab
              v-for="(tab, index) in page.content"
              :key="index"
              :title="tab.tabName"
            >
              <p
                v-for="(paragraph, i) in tab.tabContent"
                :key="i"
                class="paragraph"
              >
                {{ paragraph }}
              </p>
            </SfTab>
          </SfTabs>
        </template>
      </SfContentPage>
    </SfContentPages>
  </div>
</template>
<script>
import { SfContentPages, SfTabs, SfBreadcrumbs } from "@storefront-ui/vue";
export default {
  name: "Static",
  components: {
    SfContentPages,
    SfTabs,
    SfBreadcrumbs,
  },
  data() {
    return {
      activePage: "About us",
      breadcrumbs: [
        { text: "Home", link: "/home" },
        { text: "Help", link: "/help" },
      ],
      pages: [
        {
          title: "About us",
          content: [
            {
              tabName: "Security",
              tabContent: [
                "Personal information provided on the website and online credit card transactions are transmitted through a secure server. We are committed to handling your personal information with high standards of information security. We take appropriate physical, electronic, and administrative steps to maintain the security and accuracy of personally identifiable information we collect, including limiting the number of people who have physical access to our database servers, as well as employing electronic security systems and password protections that guard against unauthorized access.",
              ],
            },
            {
              tabName: "Privacy Policy",
              tabContent: [
                'This website ("website") is operated by Luma Inc., which includes Luma stores, and Luma Private Sales. This privacy policy only covers information collected at this website, and does not cover any information collected offline by Luma. All Luma websites are covered by this privacy policy.',
              ],
            },
            {
              tabName: "Additional Information",
              tabContent: [
                'Additional Information / This website ("website") is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.',
                "This privacy policy only covers information collected at this website, and does not cover any information collected offline by Luma. All Luma websites are covered by this privacy policy.",
              ],
            },
          ],
        },
        {
          title: "Customer Service",
          content: [
            {
              tabName: "Size guide",
              tabContent: [
                "Size guide / Personal information provided on the website and online credit card transactions are transmitted through a secure server. We are committed to handling your personal information with high standards of information security. We take appropriate physical, electronic, and administrative steps to maintain the security and accuracy of personally identifiable information we collect, including limiting the number of people who have physical access to our database servers, as well as employing electronic security systems and password protections that guard against unauthorized access.",
              ],
            },
            {
              tabName: "Where's my order?",
              tabContent: [
                'Where\'s my order? / This website ("website") is operated by Luma Inc., which includes Luma stores, and Luma Private Sales. This privacy policy only covers information collected at this website, and does not cover any information collected offline by Luma. All Luma websites are covered by this privacy policy.',
              ],
            },
          ],
        },
        {
          title: "Store locator",
          content: [
            'Store locator / This website ("website") is operated by Luma Inc., which includes Luma stores, and Luma Private Sales. This privacy policy only covers information collected at this website, and does not cover any information collected offline by Luma. All Luma websites are covered by this privacy policy.',
            "We take appropriate physical, electronic, and administrative steps to maintain the security and accuracy of personally identifiable information we collect, including limiting the number of people who have physical access to our database servers, as well as employing electronic security systems and password protections that guard against unauthorized access.",
          ],
        },
        {
          title: "Delivery",
          content: [
            'Delivery / This website ("website") is operated by Luma Inc., which includes Luma stores, and Luma Private Sales. This privacy policy only covers information collected at this website, and does not cover any information collected offline by Luma. All Luma websites are covered by this privacy policy.',
          ],
        },
        {
          title: "Return policy",
          content: [
            'Return policy / This website ("website") is operated by Luma Inc., which includes Luma stores, and Luma Private Sales. This privacy policy only covers information collected at this website, and does not cover any information collected offline by Luma. All Luma websites are covered by this privacy policy.',
          ],
        },
        {
          title: "Size guide",
          content: [
            'Size guide / This website ("website") is operated by Luma Inc., which includes Luma stores, and Luma Private Sales. This privacy policy only covers information collected at this website, and does not cover any information collected offline by Luma. All Luma websites are covered by this privacy policy.',
          ],
        },
        {
          title: "Contact us",
          content: [
            'Contact us / This website ("website") is operated by Luma Inc., which includes Luma stores, and Luma Private Sales. This privacy policy only covers information collected at this website, and does not cover any information collected offline by Luma. All Luma websites are covered by this privacy policy.',
          ],
        },
      ],
    };
  },
  methods: {
    updateActive(title) {
      this.activePage = title;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
#static {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1272px;
    padding: 0 var(--spacer-sm);
    margin: 0 auto;
  }
}
.breadcrumbs {
  margin: var(--spacer-base) auto var(--spacer-lg);
}
.paragraph {
  margin: var(--spacer-sm) 0;
  &:first-child {
    margin: 0 0 var(--spacer-sm) 0;
  }
  &--without-tab {
    @include for-mobile {
      padding: 0 var(--spacer-sm);
    }
  }
}
</style>

<include-source />
