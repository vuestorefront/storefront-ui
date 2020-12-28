# ContentPages

Content Pages for static content

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=organisms-contentpages--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 20rem"></iframe>
  </div>

```html
<template>
  <SfContentPages
    :title="title"
    :active="activePage"
    @click:change="activePage = $event"
  >
    <SfContentPage
      v-for="(page, key) in pages"
      :key="page.title + key"
      :title="page.title"
    >
      <SfTabs v-if="page.tabs" :open-tab="1">
        <SfTab
          v-for="(tab, key) in page.tabs"
          :key="tab.title + key"
          :title="tab.title"
          >{{ tab.content }}</SfTab
        >
      </SfTabs>
      <p v-else :style="{ padding: '1rem' }">{{ page.content }}</p>
    </SfContentPage>
  </SfContentPages>
</template>
<script>
import { SfContentPages } from "@storefront-ui/vue";
import { SfTabs } from "@storefront-ui/vue";
export default {
  components: {
    SfContentPages,
    SfTabs,
  },
  data() {
    return {
      activePage: "About us",
      pages: [
        {
          title: "About us",
          tabs: [
            {
              title: "Security",
              content:
                "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
            },
            {
              title: "Privacy Policy",
              content:
                "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
            },
            {
              title: "Additional Information",
              content:
                "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
            },
          ],
        },
        {
          title: "Customer service",
          tabs: [
            {
              title: "Size guide",
              content:
                "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
            },
            {
              title: "Where's my order?",
              content:
                "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
            },
          ],
        },
        {
          title: "Store locator",
          content:
            "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
        },
      ],
      title: "Help",
    };
  },
};
</script>
```

## Props

- **`title`**
  - _Pages title_
  - **type:** `string`
  - **defaultValue:** `""`

- **`active`**
  - _Active page_
  - **type:** `string`
  - **defaultValue:** `""`

## Slots

- **`menu-item`**
  - _Custom menu-item markup_
  - **bindings:** `updatePage`, `page`, `active`

- **`default`**
  - _Slot for Content Page_

## Events

- **`click:change`**
  - _Active page updated event_

## CSS modifiers

None.

## CSS custom properties (variables)

- **`--content-pages-content-page-font`**
- **`--content-pages-content-page-font-weight`**
- **`--content-pages-content-page-font-size`**
- **`--content-pages-content-page-font-line-height`**
- **`--content-pages-content-page-font-family`**
- **`--content-pages-height`**
- **`--content-pages-section-margin`**
- **`--content-pages-transition`**
- **`--content-pages-section-active-transform`**
- **`--content-pages-sidebar-flex`**
- **`--content-pages-sidebar-padding`**
- **`--content-pages-sidebar-background`**
- **`--content-pages-content-flex`**
- **`--content-pages-content-padding`**
- **`--content-pages-sidebar-title-margin`**
- **`--content-pages-sidebar-title-font`**
- **`--content-pages-sidebar-title-font-weight`**
- **`--content-pages-sidebar-title-font-size`**
- **`--content-pages-sidebar-title-font-line-height`**
- **`--content-pages-sidebar-title-font-family`**
- **`--content-pages-sidebar-category-title-margin`**
- **`--content-pages-sidebar-category-title-font`**
- **`--content-pages-sidebar-category-title-font-weight`**
- **`--content-pages-sidebar-category-title-font-size`**
- **`--content-pages-sidebar-category-title-font-line-height`**
- **`--content-pages-sidebar-category-title-font-family`**
### Overridden other components CSS variables 
- **`--list-item-padding`**
- **`--list-item-border-width`**
- **`--list-item-margin`**
- **`--list-item-border`**


You can override CSS variables values bound to this component.

## Internal components

### ContentCategory
#### Props
- **`title`**
  - _Category title_
  - **type:** `string`
  - **defaultValue:** `""`

#### Slots
- **`default`**

#### Events
None.

#### CSS modifiers
None.

#### CSS variables
None.

### ContentPage
#### Props
- **`title`**
  - _Page title_
  - **type:** `string`
  - **defaultValue:** `""`

- **`icon`**
  - _Page nav title_
  - **type:** `string|array`
  - **defaultValue:** `""`

#### Slots
- **`default`**
  - _Custom page markup_

#### Events
None.

#### CSS modifiers
None.

#### CSS variables
None.

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/organisms-contentpages--common">Storybook</a>.
