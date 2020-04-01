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
      <SfContentPage title="About us">
        <SfTabs :open-tab="1">
          <SfTab
            v-for="(tab, i) in pages.aboutUs.content"
            :key="i"
            :title="tab.tabName"
          >
            {{ tab.tabContent }}
          </SfTab>
        </SfTabs>
      </SfContentPage>
      <SfContentPage title="Customer service">
        <SfTabs :open-tab="1">
          <SfTab
            v-for="(tab, i) in pages.customerService.content"
            :key="i"
            :title="tab.tabName"
          >
            {{ tab.tabContent }}
          </SfTab>
        </SfTabs>
      </SfContentPage>
      <SfContentPage
        v-for="(page, i) in pages.pagesWithoutTabs"
        :key="i"
        :title="page.name"
      >
        {{ page.content }}
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
    SfBreadcrumbs
  },
  data() {
    return {
      activePage: "About us",
      breadcrumbs: [
        { text: "Home", route: { link: "#" } },
        { text: "Help", route: { link: "#" } }
      ],
      pages: {
        aboutUs: {
          content: [
            {
              tabName: "Security",
              tabContent:
                "Personal information provided on the website and online credit card transactions are transmitted through a secure server. We are committed to handling your personal information with high standards of information security. We take appropriate physical, electronic, and administrative steps to maintain the security and accuracy of personally identifiable information we collect, including limiting the number of people who have physical access to our database servers, as well as employing electronic security systems and password protections that guard against unauthorized access."
            },
            {
              tabName: "Privacy Policy",
              tabContent:
                'This website ("website") is operated by Luma Inc., which includes Luma stores, and Luma Private Sales. This privacy policy only covers information collected at this website, and does not cover any information collected offline by Luma. All Luma websites are covered by this privacy policy.'
            },
            {
              tabName: "Additional Information",
              tabContent:
                'This website ("website") is operated by Luma Inc., which includes Luma stores, and Luma Private Sales. This privacy policy only covers information collected at this website, and does not cover any information collected offline by Luma. All Luma websites are covered by this privacy policy.'
            }
          ]
        },
        customerService: {
          content: [
            {
              tabName: "Size guide",
              tabContent:
                'This website ("website") is operated by Luma Inc., which includes Luma stores, and Luma Private Sales. This privacy policy only covers information collected at this website, and does not cover any information collected offline by Luma. All Luma websites are covered by this privacy policy.'
            },
            {
              tabName: "Where's my order?",
              tabContent:
                'This website ("website") is operated by Luma Inc., which includes Luma stores, and Luma Private Sales. This privacy policy only covers information collected at this website, and does not cover any information collected offline by Luma. All Luma websites are covered by this privacy policy.'
            }
          ]
        },
        pagesWithoutTabs: [
          {
            name: "Store locator",
            content:
              'This website ("website") is operated by Luma Inc., which includes Luma stores, and Luma Private Sales. This privacy policy only covers information collected at this website, and does not cover any information collected offline by Luma. All Luma websites are covered by this privacy policy.'
          },
          {
            name: "Delivery",
            content:
              'This website ("website") is operated by Luma Inc., which includes Luma stores, and Luma Private Sales. This privacy policy only covers information collected at this website, and does not cover any information collected offline by Luma. All Luma websites are covered by this privacy policy.'
          },
          {
            name: "Return policy",
            content:
              'This website ("website") is operated by Luma Inc., which includes Luma stores, and Luma Private Sales. This privacy policy only covers information collected at this website, and does not cover any information collected offline by Luma. All Luma websites are covered by this privacy policy.'
          },
          {
            name: "Size guide",
            content:
              'This website ("website") is operated by Luma Inc., which includes Luma stores, and Luma Private Sales. This privacy policy only covers information collected at this website, and does not cover any information collected offline by Luma. All Luma websites are covered by this privacy policy.'
          },
          {
            name: "Contact us",
            content:
              'This website ("website") is operated by Luma Inc., which includes Luma stores, and Luma Private Sales. This privacy policy only covers information collected at this website, and does not cover any information collected offline by Luma. All Luma websites are covered by this privacy policy.'
          }
        ]
      }
    };
  },
  methods: {
    updateActive(title) {
      this.activePage = title;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
#static {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 77.5rem;
    margin: 0 auto;
  }
}

.breadcrumbs {
  margin: var(--spacer-base) auto var(--spacer-lg);
}

.sf-content-page {
  padding: 0 var(--spacer-sm);
}
</style>
