<template>
  <div id="static">
    <SfBreadcrumbs
      class="breadcrumbs desktop-only"
      :breadcrumbs="breadcrumbs"
    />
    <SfContentPages
      :active="activePage"
      title="Help"
      class="static-content"
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
  </div>
</template>
<script>
import { SfBreadcrumbs, SfContentPages, SfTabs } from "@storefront-ui/vue";

export default {
  name: "Static",
  components: {
    SfBreadcrumbs,
    SfContentPages,
    SfTabs
  },
  data() {
    return {
      activePage: "About us",
      breadcrumbs: [
        { text: "Home", route: { link: "#" } },
        { text: "Help", route: { link: "#" } }
      ]
    };
  },
  computed: {
    barTitle() {
      return this.activePage ? this.activePage : "Home";
    }
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
    max-width: 1240px;
    margin: 0 auto;
  }
}
.breadcrumbs {
  padding: var(--spacer-big) var(--spacer-extra-big) var(--spacer-extra-big)
    var(--spacer-extra-big);
}
</style>
