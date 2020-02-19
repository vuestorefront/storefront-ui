<template>
  <div class="sf-docs-sizes--container">
    <div class="sf-docs-sizes--container-list__item-wrapper">
      <div v-for="(value, name) in sizes" :key="name" class="sf-docs-sizes--container-list__item">
        <div class="sf-docs-sizes--container-list__item-block" :class="`${prefix}${value}`">{{value}}</div>
        <div class="sf-docs-sizes--container-list__item-label">var(--{{prefix}}{{value}})</div>
      </div>
    </div>
  </div>
</template>
<script>
  import {typographySizes} from '@storefront-ui/shared/variables/sizes';

  export default {
    data() {
      return {
        sizes: typographySizes,
        prefix: `font-size-`
      };
    },
  }
</script>
<style scoped>
  /*h3 {
    text-transform: capitalize;
  }
  .sf-docs-sizes--container-list__item-wrapper {
    display: flex;
    flex-flow: wrap;
  }
  .sf-docs-sizes--container-list__item {
    margin: 0.5rem;
    padding: 0.5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100px;
    justify-content: flex-end;
    border: 1px solid #bebfc4;
  }
  .sf-docs-sizes--container-list__item-label {
    margin: 0.5rem 0.5rem 0;
    padding-top: 0.5rem;
    border-top: 1px solid #bebfc4;
    width: 100%;
    text-align: center;
    font-family: monospace;
    color: #6699cc;
    font-size: 0.8rem;
  }*/
</style>
<style lang="scss">
  /*@import "~@storefront-ui/shared/styles/variables";
  @import "~@storefront-ui/shared/styles/variables/css/typography.scss";

  @each $name, $size in $typography-map {
    .font-size-#{$name} {
      font-size: #{$size};
    }
  }*/
</style>