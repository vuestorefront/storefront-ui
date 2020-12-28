# Tabs

Component with tab-related content.

:::warning
There may be an **error** related to SfTab removal (you can find the associated issue [HERE](https://github.com/DivanteLtd/storefront-ui/issues/1206)). The [vue-fragment](https://github.com/Thunberg087/vue-fragment) library we use in SfTab is probably no longer maintained, because the fragments will be a native feature in Vue 3. **Storefront UI** will be rewritten to **Vue 3** soon, this error should no longer occur in the future.
:::

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=organisms-tabs--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 30rem"></iframe>
  </div>

```html
<template>
  <SfTabs
    :open-tab="openTab"
    :tabMaxContentHeight="tabMaxContentHeight"
    :tabShowText="tabShowText"
    :tabHideText="tabHideText"
  >
    <SfTab v-for="tab in tabs" :key="tab.title" :title="tab.title">
      {{ tab.content }}
    </SfTab>
  </SfTabs>
</template>
<script>
import { SfTabs } from "@storefront-ui/vue";
export default {
  components: {
    SfTabs,
  },
  data() {
    return {
      tabs: [
        {
          title: "Description",
          content:
            "The Karissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common 'problem' areas. Find stunning women's cocktail dresses and party dresses. The Karissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common 'problem' areas. Find stunning women's cocktail dresses and party dresses. The Karissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common 'problem' areas. Find stunning women's cocktail dresses and party dresses. The Karissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common 'problem' areas. Find stunning women's cocktail dresses and party dresses. The Karissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common 'problem' areas. Find stunning women's cocktail dresses and party dresses.",
        },
        {
          title: "Read reviews",
          content:
            "The Larissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common 'problem' areas. Find stunning women's cocktail dresses and party dresses.",
        },
        {
          title: "Additional Information",
          content:
            "The Marissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common 'problem' areas. Find stunning women's cocktail dresses and party dresses.",
        },
      ],
      openTab: 1,
      tabMaxContentHeight: "6.25rem",
      tabShowText: "show",
      tabHideText: "hide",
    };
  },
};
</script>
```

## Props

- **`openTab`**
  - _Which tab should be open at the beginning_
  - **type:** `number`
  - **defaultValue:** `1`

- **`tabMaxContentHeight`**
  - _Max height of visible content_
  - **type:** `string`
  - **defaultValue:** `""`

- **`tabShowText`**
  - _Text for button showing content_
  - **type:** `string`
  - **defaultValue:** `"show"`

- **`tabHideText`**
  - _Text for button hiding content_
  - **type:** `string`
  - **defaultValue:** `"hide"`

## Slots

- **`default`**
  - _Default. Here you should pass your tabs_

## Events

None.

## CSS modifiers

None.

## CSS custom properties (variables)

- **`--tabs-title-z-index`**
- **`--tabs-title-display`**
- **`--tabs-title-flex`**
- **`--tabs-title-margin`**
- **`--tabs-title-padding`**
- **`--tabs-title-background`**
- **`--tabs-title-border`**
- **`--tabs-title-border-width`**
- **`--tabs-title-color`**
- **`--tabs-title-font`**
- **`--tabs-title-font-weight`**
- **`--tabs-title-font-size`**
- **`--tabs-title-font-line-height`**
- **`--tabs-title-font-family`**
- **`--tabs-content-order`**
- **`--tabs-content-border`**
- **`--tabs-content-border-width`**
- **`--tabs-content-color`**
- **`--tabs-content-font`**
- **`--tabs-content-font-weight`**
- **`--tabs-content-font-size`**
- **`--tabs-content-font-line-height`**
- **`--tabs-content-font-family`**
- **`--tabs-content-tab-padding`**
- **`--tabs-chevron-display`**
### Overridden other components CSS variables 
- **`--chevron-color`**
- **`--tabs-title-border-color`**


You can override CSS variables values bound to this component.

## Internal components

### Tab
#### Props
- **`title`**
  - _Tab title._
  - **type:** `string`
  - **defaultValue:** `""`

#### Slots
- **`title`**
  - _Title. Here you should pass a title tab_
  - **bindings:** `tabClick`, `isActive`, `title`

- **`default`**
  - _Default. Here you should pass your tab content_

#### Events
None.

#### CSS modifiers
None.

#### CSS variables
None.

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/organisms-tabs--common">Storybook</a>.
