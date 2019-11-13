<template>
  <div id="static">
    <SfBreadcrumbs
      class="breadcrumbs desktop-only"
      :breadcrumbs="breadcrumbs"
    />
    <div class="back-bar mobile-only">
      <div>
        <button
          v-if="activePage"
          @click="activePage = ''"
          class="back-bar__button"
        >
          <SfIcon icon="chevron_left" size="14px" />
        </button>
      </div>
      <div class="back-bar__title">{{ barTitle }}</div>
      <div>
        <button v-if="false" class="back-bar__button">
          <SfIcon icon="cross" size="14px" />
        </button>
      </div>
    </div>
    <SfContentPages
      :active="activePage"
      @click:change="updateActive"
      title="Help"
      class="static-content"
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
import {
  SfBreadcrumbs,
  SfContentPages,
  SfTabs,
  SfIcon
} from "../../../../index.js";
export default {
  name: "Static",
  components: {
    SfBreadcrumbs,
    SfContentPages,
    SfTabs,
    SfIcon
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

@mixin for-desktop {
  @media screen and (min-width: $desktop-min) {
    @content;
  }
}

#static {
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @include for-desktop {
    max-width: 1240px;
    margin: auto;
  }
}
.breadcrumbs {
  padding: $spacer-big $spacer-extra-big $spacer-extra-big;
}
.static-content {
  flex: 1;
}
.back-bar {
  display: flex;
  justify-content: space-between;
  padding: $spacer-medium $spacer-big;
  background-color: $c-light;
  &__button {
    padding: 0;
    margin: 0;
    border: 0;
    background-color: transparent;
    outline: none;
    cursor: pointer;
  }
  &__title {
    font-family: $body-font-family-secondary;
    font-size: $font-size-big-mobile;
    font-weight: $h2-font-weight-mobile;
  }
}
</style>
