# component-description
Header component for page navigation.

# common-usage
<br>
<SfHeader
  title="Storefront UI" 
  logo="https://storybook.storefrontui.io/assets/logo.svg"
  active-sidebar="account"
  :style="{position: 'static'}"
>
  <template #navigation>
    <SfHeaderNavigationItem>WOMEN</SfHeaderNavigationItem>
    <SfHeaderNavigationItem>MEN</SfHeaderNavigationItem>
    <SfHeaderNavigationItem>KIDS</SfHeaderNavigationItem>
  </template>
</SfHeader>

```html
<template>
  <SfHeader
    title="Storefront UI"
    logo="/assets/logo.svg"
    active-sidebar="activeSidebar"
  >
    <template #navigation>
      <SfHeaderNavigationItem>WOMAN</SfHeaderNavigationItem>
      <SfHeaderNavigationItem>MAN</SfHeaderNavigationItem>
    </template>
  </SfHeader>
</template>
<script>
import { SfHeader } from "@storefront-ui/vue"
export default {
  components: { SfHeader }
  data(){
    return {
      activeSidebar: "account"
    }
  }  
}
</script>
```
