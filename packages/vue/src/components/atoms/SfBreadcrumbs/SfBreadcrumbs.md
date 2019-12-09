# component-description
Component which renders a breadcrumb with router links for indicating the level of navigation the user is currently in.

# common-usage
<br>
<SfDocsBreadcrumbs />

```html
<template>
  <SfBreadcrumbs :breadcrumbs="breadcrumbs" />
</template>

<script>
import { SfBreadcrumbs } from "@storefront-ui/vue";

export default {
  components: {
    SfBreadcrumbs
  },
  data() {
    return {
      breadcrumbs: [
        {
          text: "Home",
          route: {
            link: "#"
          }
        },
        {
          text: "Category",
          route: {
            link: "#"
          }
        },
        {
          text: "Pants",
          route: {
            link: "#"
          }
        }
      ]
    };
  }
};
</script>
```
