<template>
  <div id="static">
    <SfContentPages
      :active="activePage"
      title="Help"
      @click:change="updateActive"
    >
      <SfContentPage title="About us">
        <SfTabs :open-tab="1">
          <SfTab title="Security">
            This website ("website") is operated by Luma Inc., which includes
            Luma stores, and Luma Private Sales. This privacy policy only covers
            information collected at this website, and does not cover any
            information collected offline by Luma. All Luma websites are covered
            by this privacy policy.
            <h3 class="title">Luma Security</h3>
            <p>
              Personal information provided on the website and online credit
              card transactions are transmitted through a secure server. We are
              committed to handling your personal information with high
              standards of information security. We take appropriate physical,
              electronic, and administrative steps to maintain the security and
              accuracy of personally identifiable information we collect,
              including limiting the number of people who have physical access
              to our database servers, as well as employing electronic security
              systems and password protections that guard against unauthorized
              access.
            </p>
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
      <SfContentPage title="Delivery">
        This website ("website") is operated by Luma Inc., which includes Luma
        stores, and Luma Private Sales. This privacy policy only covers
        information collected at this website, and does not cover any
        information collected offline by Luma. All Luma websites are covered by
        this privacy policy.
      </SfContentPage>
      <SfContentPage title="Return policy">
        This website ("website") is operated by Luma Inc., which includes Luma
        stores, and Luma Private Sales. This privacy policy only covers
        information collected at this website, and does not cover any
        information collected offline by Luma. All Luma websites are covered by
        this privacy policy.
      </SfContentPage>
      <SfContentPage title="Size guide">
        This website ("website") is operated by Luma Inc., which includes Luma
        stores, and Luma Private Sales. This privacy policy only covers
        information collected at this website, and does not cover any
        information collected offline by Luma. All Luma websites are covered by
        this privacy policy.
      </SfContentPage>
      <SfContentPage title="Contact us">
        This website ("website") is operated by Luma Inc., which includes Luma
        stores, and Luma Private Sales. This privacy policy only covers
        information collected at this website, and does not cover any
        information collected offline by Luma. All Luma websites are covered by
        this privacy policy.
      </SfContentPage>
    </SfContentPages>
  </div>
</template>
<script>
import { SfContentPages, SfTabs } from "@storefront-ui/vue";

export default {
  name: "Static",
  components: {
    SfContentPages,
    SfTabs
  },
  data() {
    return {
      activePage: "About us"
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

.title {
  font-size: var(--h3-font-size);
  font-family: var(--font-family-secondary);
  font-weight: var(--font-medium);
  margin-top: 3.5rem;
}
</style>
