# component-description
Content Pages for static content

# common-usage
<br>
<SfContentPages 
  title="Help"
  active="About us"
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

```html
<template>
  <SfContentPages 
    title="Help"
    :active="activePage"
    @click:change="updateActivePage"
  >
    <SfContentPage title="About us">
      <SfTabs :open-tab="1">
        <SfTab title="Security">
          This website ("website") is operated by Luma Inc.
        </SfTab>
        <SfTab title="Privacy Policy">
          This website ("website") is operated by Luma Inc.
        </SfTab>
        <SfTab title="Additional Information ">
          This website ("website") is operated by Luma Inc.
        </SfTab>
      </SfTabs>
    </SfContentPage>
    <SfContentPage title="Customer service">
      <SfTabs :open-tab="1">
        <SfTab title="Size guide">
          This website ("website") is operated by Luma Inc.
        </SfTab>
        <SfTab title="Where's my order?">
          This website ("website") is operated by Luma Inc.
        </SfTab>
      </SfTabs>
    </SfContentPage>
    <SfContentPage title="Store locator">
      This website ("website") is operated by Luma Inc.
    </SfContentPage>
  </SfContentPages>
</template>
<script>
import { SfContentPages, SfTabs } from "@storefront-ui/vue";
export default {
  components: { SfContentPages, SfTabs },
  data(){
      return {
        activePage: "About us"
      };
  },
  methods: {
    updateActivePage(title) {
      this.activePage = title;
    }
  }
}
</script>
```
