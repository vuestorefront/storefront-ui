# component-description
Content Pages for static content

# common-usage
<br>
<SfContentPages
  active="My profile"
  title="My account">
  <SfContentCategory title="Personal Details">
      <SfContentPage title="My profile" icon="heart">
        This website ("website") is operated by Luma Inc., which includes
        Luma stores, and Luma Private Sales. This privacy policy only covers
        information collected at this website, and does not cover any
        information collected offline by Luma. All Luma websites are covered
        by this privacy policy.
      </SfContentPage>
      <SfContentPage title="Shopping details" icon="home"/>
      <SfContentPage title="Loyalty Card" icon="clock"/>
  </SfContentCategory>
</SfContentPages>

```html 
<template>
  <SfContentPages
    active="My profile"
    title="My account">
    <SfContentCategory title="Personal Details">
        <SfContentPage title="My profile" icon="heart">
          This website ("website") is operated by Luma Inc., which includes
          Luma stores, and Luma Private Sales. This privacy policy only covers
          information collected at this website, and does not cover any
          information collected offline by Luma. All Luma websites are covered
          by this privacy policy.
        </SfContentPage>
        <SfContentPage title="Shopping details" icon="home"/>
        <SfContentPage title="Loyalty Card" icon="clock"/>
    </SfContentCategory>
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
      activePage: "Personal Details"
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
