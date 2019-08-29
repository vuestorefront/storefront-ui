<template>
  <div id="product">
    <SfSection titleHeading="Share Your Look" subtitleHeading="#YOURLOOK">
      <!-- .grid shoud be refactored -->
      <div class="grid">
        <div class="grid__row">
          <div class="grid__col">
            <SfImage src="assets/storybook/homepage/imageA.png"
            >katherina_trn</SfImage
            >
          </div>
          <div class="grid__col">
            <SfImage src="assets/storybook/homepage/imageB.png"
            >katherina_trn</SfImage
            >
          </div>
          <div class="grid__col">
            <SfImage src="assets/storybook/homepage/imageC.png"
            >katherina_trn</SfImage
            >
          </div>
        </div>
        <div class="grid__row">
          <div class="grid__col">
            <SfImage src="assets/storybook/homepage/imageC.png"
            >katherina_trn</SfImage
            >
          </div>
          <div class="grid__col">
            <SfImage src="assets/storybook/homepage/imageD.png"
            >katherina_trn</SfImage
            >
          </div>
          <div class="grid__col">
            <SfImage src="assets/storybook/homepage/imageA.png"
            >katherina_trn</SfImage
            >
          </div>
        </div>
      </div>
    </SfSection>
    <SfBanner
      title="Download our application to your mobile"
      subtitle="Fashion to Take Away"
      image="assets/storybook/homepage/bannerD.png"
      class="banner-application sf-banner--left sf-banner--center desktop-only"
    >
      <template #title>
        <h1 class="banner-application__title">
          Download our application to your&nbsp;mobile
        </h1>
      </template>
      <template #call-to-action>
        <div>
          <img
            class="banner-application__download"
            src="assets/storybook/homepage/google.png"
            alt=""
          />
          <img
            class="banner-application__download"
            src="assets/storybook/homepage/apple.png"
            alt=""
          />
        </div>
      </template>
    </SfBanner>
    <SfBottomNavigation class="mobile-only">
      <SfBottomNavigationItem>
        <SfIcon icon="home" size="20px" />
      </SfBottomNavigationItem>
      <SfBottomNavigationItem>
        <SfIcon icon="menu" size="20px" style="width: 25px" />
      </SfBottomNavigationItem>
      <SfBottomNavigationItem>
        <SfIcon icon="heart" size="20px" />
      </SfBottomNavigationItem>
      <SfBottomNavigationItem>
        <SfIcon icon="profile" size="20px" />
      </SfBottomNavigationItem>
      <SfBottomNavigationItem>
        <SfCircleIcon
          class="sf-bottom-navigation__floating-icon sf-circle-icon--big"
        >
          <SfIcon
            icon="add_to_cart"
            size="20px"
            color="white"
            style="margin-right: 4px;"
          />
        </SfCircleIcon>
      </SfBottomNavigationItem>
    </SfBottomNavigation>
  </div>
</template>
<script>
import {
  SfSection,
  SfImage,
  SfBanner,
  SfBottomNavigation,
  SfCircleIcon,
  SfIcon
} from "@storefront-ui/vue";

export default {
  name: "Product",
  data() {
    return {};
  },
  components: {
    SfSection,
    SfImage,
    SfBanner,
    SfBottomNavigation,
    SfCircleIcon,
    SfIcon
  },
  mounted() {
    document.body.style.setProperty("margin", "0");
  }
};
</script>
<style lang="scss" scoped>
@import "../../../css/variables";
@import "~@storefront-ui/shared/styles/helpers/visibility";
#product {
  max-width: 1240px;
  margin: auto;
  box-sizing: border-box;
  padding: 0 $spacer-big;
  @media screen and (min-width: $desktop-min) {
    padding: 0;
  }
}
.banner-application {
  min-height: 420px;
  max-width: 1040px;
  margin: auto;
  &__title {
    padding: 0;
    margin: 0;
    margin-top: $spacer-big;
    font-size: 2.25rem;
    font-weight: 400;
    line-height: 1.388;
  }
  &__download {
    max-height: 47px;
    margin-top: $spacer-extra-big;
    & + & {
      margin-left: $spacer-big;
    }
  }
}
/*  TODO: .grid shoud be refactored */
.grid {
  &__row {
    display: flex;
    & + & {
      margin-top: $spacer-big / 2;
      @media screen and (min-width: $desktop-min) {
        margin-top: $spacer-big;
      }
    }
  }
  &__col {
    margin: 0;
    & + & {
      margin-left: $spacer-big / 2;
      @media screen and (min-width: $desktop-min) {
        margin-left: $spacer-big;
      }
    }
  }
}
</style>
