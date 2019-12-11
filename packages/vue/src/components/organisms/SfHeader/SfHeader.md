# component-description
Header component for page navigation.

# common-usage
<br>
<SfHeader
  title="Storefront UI"
  logo="https://storybook.storefrontui.io/assets/logo.svg"
  active-icon="account"
>
  <template #navigation>
    <div class="sf-header__navigation-item">
      <a href="#woman" class="sf-header__navigation-link">Women</a>
    </div>
    <div class="sf-header__navigation-item">
      <a href="#man" class="sf-header__navigation-link">Man</a>
    </div>
    <div class="sf-header__navigation-item">
      <a href="#kids" class="sf-header__navigation-link">Kids</a>
    </div>
  </template>
</SfHeader>

```html
<template>
  <SfHeader
    title="Storefront UI"
    logo="/assets/logo.svg"
    active-icon="account"
  >
    <template #navigation>
      <div class="sf-header__navigation-item">
        <a href="#woman" class="sf-header__navigation-link">Women</a>
      </div>
      <div class="sf-header__navigation-item">
        <a href="#man" class="sf-header__navigation-link">Man</a>
      </div>
      <div class="sf-header__navigation-item">
         <a href="#kids" class="sf-header__navigation-link">Kids</a>
      </div>
    </template>
  </SfHeader>
</template>
<script>
  import { SfHeader } from "@storefront-ui/vue"
  export default {
   components: { SfHeader }
  }
</script>
```
