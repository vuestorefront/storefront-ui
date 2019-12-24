<template>
  <div>
    <div class="highlighted">
      <SfHeading
        title="Order review"
        class="sf-heading--left sf-heading--no-underline title"
      />
      <div class="highlighted__header">
        <h3 class="highlighted__title">Personal details</h3>
        <SfButton class="sf-button--text" @click="$emit('click:edit', 0)"
          >Edit</SfButton
        >
      </div>
      <p class="content">
        Sviatlana Havaka<br />
        Zielinskiego 30 – 41, 53-345<br />
        Wroclaw, Poland
      </p>
      <p class="content">
        sviatlana.example@gmail.com<br />
        (00) 468 900 300
      </p>
    </div>
    <div class="highlighted">
      <div class="highlighted__header">
        <h3 class="highlighted__title">Shipping details</h3>
        <SfButton class="sf-button--text" @click="$emit('click:edit', 1)"
          >Edit</SfButton
        >
      </div>
      <p class="content">
        <span class="content__label">Paczkomat Inpost</span><br />
        Zielinskiego 30 – 41, 53-345<br />
        Wroclaw, Poland
      </p>
      <p class="content">
        sviatlana.example@gmail.com<br />
        (00) 468 900 300
      </p>
    </div>
    <div class="highlighted">
      <div class="highlighted__header">
        <h3 class="highlighted__title">Billing address</h3>
        <SfButton class="sf-button--text" @click="$emit('click:edit', 2)"
          >Edit</SfButton
        >
      </div>
      <p class="content">Same as shipping address</p>
    </div>
    <div class="highlighted">
      <div class="highlighted__header">
        <h3 class="highlighted__title">Payment method</h3>
        <SfButton class="sf-button--text" @click="$emit('click:edit', 2)"
          >Edit</SfButton
        >
      </div>
      <p class="content">Cash on delivery</p>
    </div>
  </div>
</template>

<script>
import { SfHeading, SfButton } from "../../../../../index.js";
export default {
  name: "OrderReview",
  components: {
    SfHeading,
    SfButton
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
.highlighted {
  box-sizing: border-box;
  width: 100%;
  background-color: #f1f2f3;
  padding: $spacer-extra-big;
  margin-bottom: $spacer-big;
  &:last-child {
    margin-bottom: 0;
  }
  &--total {
    margin-bottom: 1px;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: $spacer-big;
  }
  &__title {
    font-family: $body-font-family-primary;
    font-size: $font-size-big-desktop;
    line-height: 1.6;
  }
}
.title {
  margin-bottom: $spacer-extra-big;
}
.content {
  margin-bottom: 0 0 $spacer-big 0;
  color: $c-text;
  font-size: $font-size-extra-small-desktop;
  font-weight: 300;
  line-height: 1.6;
  &:last-child {
    margin: 0;
  }
  &__label {
    font-weight: 400;
  }
}
</style>
