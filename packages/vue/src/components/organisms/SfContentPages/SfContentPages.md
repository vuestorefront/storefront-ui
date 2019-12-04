# component-description
Content Pages for static content

# common-usage
<br>
<SfContentPages
  active="About us"
  title="Help">
  <SfContentPage title="About us">
    This website ("website") is operated by Luma Inc., which includes
    Luma stores, and Luma Private Sales. This privacy policy only covers
    information collected at this website, and does not cover any
    information collected offline by Luma. All Luma websites are covered
    by this privacy policy.
  </SfContentPage>
  <SfContentPage title="Customer service"/>
  <SfContentPage title="Store locator"/>
</SfContentPages>

```html 
<template>
  <SfContentPages
    :active="activePage"
    @click:change="updateActive"
    title="Help">
    <SfContentPage title="About us">
      This website ("website") is operated by Luma Inc., which includes
      Luma stores, and Luma Private Sales. This privacy policy only covers
      information collected at this website, and does not cover any
      information collected offline by Luma. All Luma websites are covered
      by this privacy policy.
    </SfContentPage>
    <SfContentPage title="Customer service"/>
    <SfContentPage title="Store locator"/>
  </SfContentPages>
</template>

<script>
import { SfContentPages } from '@storefront-ui/vue'

export default {
  components: {
   SfContentPages
  },
  data() {
    return {
      activePage: "About us"
     };
  },
  methods: {
    updateActive(title) {
      // logic for changing to active page 'title'
    }
  }
}
</script>
```
