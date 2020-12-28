# Hero

Full-width hero component with autoplay and navigation arrows.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=organisms-hero--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 15rem"></iframe>
  </div>

```html
<template>
  <SfHero :style="{ maxWidth: '1240px', margin: 'auto' }">
    <SfHeroItem
      :class="customClass"
      :title="title"
      :subtitle="subtitle"
      :button-text="buttonText"
      :image="image"
      :background="background"
    />
    <SfHeroItem
      :class="customClass"
      title="Colorful summer dresses are already in store"
      subtitle="Summer Collection 2019"
      button-text="Learn more"
      image="/assets/storybook/SfHero/hero.png"
      background="#FCE4EC"
    />
  </SfHero>
</template>
<script>
import { SfHero } from "@storefront-ui/vue";
export default {
  components: {
    SfHero,
  },
  data() {
    return {
      title: "Colorful summer dresses are already in store",
      subtitle: "Summer Collection 2019",
      buttonText: "Learn more",
      image: {
        mobile: "/assets/storybook/SfHero/hero.png",
        desktop: "/assets/storybook/SfHero/hero.png",
      },
      background: "#ECEFF1",
    };
  },
};
</script>
```

## Props

- **`sliderOptions`**
  - _Slider options like glide.js (https://glidejs.com/docs/)_
  - **type:** `object`
  - **defaultValue:** `{}`

## Slots

- **`default`**
  - _default slot for SfHeroItem tags_

- **`prev`**
  - _slot for icon moving to the previous item_
  - **bindings:** `go`

- **`next`**
  - _slot for icon moving to the next item_
  - **bindings:** `go`

- **`bullets`**
  - _custom markup for pagination bullets_
  - **bindings:** `numberOfPages`, `page`, `go`

## Events

None.

## CSS modifiers

- **`.sf-hero-item--align-right`**
- **`.sf-hero-item--position-bg-top-right`**
- **`.sf-hero-item--position-bg-bottom-right`**
- **`.sf-hero-item--position-bg-bottom-left`**

## CSS custom properties (variables)

- **`--hero-item-flex-direction`**
- **`--hero-item-align-items`**
- **`--hero-item-justify-content`**
- **`--hero-item-height`**
- **`--hero-item-width`**
- **`--hero-item-padding`**
- **`--hero-item-color`**
- **`--hero-item-background`**
- **`--hero-item-background-size`**
- **`--hero-item-container-width`**
- **`--hero-item-subtitle-margin`**
- **`--hero-item-subtitle-color`**
- **`--hero-item-subtitle-font`**
- **`--hero-item-subtitle-font-weight`**
- **`--hero-item-subtitle-font-size`**
- **`--hero-item-subtitle-font-line-height`**
- **`--hero-item-subtitle-font-family`**
- **`--hero-item-subtitle-transform`**
- **`--hero-item-title-margin`**
- **`--hero-item-title-color`**
- **`--hero-item-title-font`**
- **`--hero-item-title-font-weight`**
- **`--hero-item-title-font-size`**
- **`--hero-item-title-font-line-height`**
- **`--hero-item-title-font-family`**
- **`--hero-item-title-transform`**
- **`--hero-item-button-display`**
- **`--_hero-item-background-image`**
### Overridden other components CSS variables 
- **`--hero-item-font`**
- **`--h1-font-size`**
- **`--hero-controls-display`**
- **`--hero-bullets-display`**


You can override CSS variables values bound to this component.

## Internal components

### HeroItem
#### Props
- **`title`**
  - _Hero item title_
  - **type:** `string`
  - **defaultValue:** `""`

- **`subtitle`**
  - _Hero item subtitle (at the top)_
  - **type:** `string`
  - **defaultValue:** `""`

- **`buttonText`**
  - _text that will be displayed inside the button. You can replace the button  with "call-to-action" slot_
  - **type:** `string`
  - **defaultValue:** `""`

- **`background`**
  - _Background color_
  - **type:** `string`
  - **defaultValue:** `""`

- **`image`**
  - _Background image path_
  - **type:** `object|string`
  - **defaultValue:** `""`

#### Slots
- **`subtitle`**
  - _hero item subtitle. Slot content will replace default &lt;h2&gt; tag_
  - **bindings:** `subtitle`

- **`title`**
  - _hero item title. Slot content will replace default &lt;h1&gt; tag_
  - **bindings:** `title`

- **`call-to-action`**
  - _Call to action section. Slot content will replace default SfButton component_
  - **bindings:** `buttonText`

#### Events
None.

#### CSS modifiers
None.

#### CSS variables
None.

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/organisms-hero--common">Storybook</a>.
