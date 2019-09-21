# Review

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


## Props

- **`author`**
  - _Author of the review_
  - **type:** `string`
  - **defaultValue:** `""`

- **`date`**
  - _Date of the review_
  - **type:** `string`
  - **defaultValue:** `""`

- **`message`**
  - _Message from the reviewer_
  - **type:** `string`
  - **defaultValue:** `""`

- **`rating`**
  - _Rating from the reviewer_
  - **type:** `number|string|boolean`
  - **defaultValue:** `false`

- **`maxRating`**
  - _Max rating for the review_
  - **type:** `number|string`
  - **defaultValue:** `5`

- **`charLimit`**
  - _Char limit for the review_
  - **type:** `number|string`
  - **defaultValue:** `250`

- **`readMoreText`**
  - _Read more text for the review_
  - **type:** `string`
  - **defaultValue:** `"Read more"`

- **`hideFullText`**
  - _Hide full text message for the review_
  - **type:** `string`
  - **defaultValue:** `"Read less"`


## Slots

- **`author`**
  - _Review author. Slot content will replace default &lt;div&gt; tag (bind 'author' string)._
  - **bindings:** `author`

- **`info`**
  - _Review information. Slot content will replace default &lt;div&gt; tag and its inner &lt;div&gt; tags (bind 'rating' boolean|number, 'maxRating' number, 'date' string)._
  - **bindings:** `rating`, `maxRating`, `date`

- **`message`**
  - _Review message. Slot content will replace default &lt;div&gt; tag and its inner &lt;span&gt; and &lt;a&gt; tags (bind 'finalMessage' computed property, 'buttonText' computed property)._
  - **bindings:** `finalMessage`, `buttonText`


## Events

None.


## CSS modifiers

None.


## SCSS variables

```scss
$review__div_tags-margin-bottom: $spacer-medium !default;
$review__div_tags-display-inline-block: inline-block !default;
$review__margin-left: $spacer-medium !default;
$review__author-text-transform: capitalize !default;
$review__author-font-weight: 450 !default;
$review__author-font-size: $font-size-big-desktop !default;
$review__author-font-family: $body-font-family-primary !default;
$review__author-color: $c-text-primary !default;
$review__date-text-transform: capitalize !default;
$review__date-font-weight: $body-font-weight-primary !default;
$review__date-font-size: $font-size-small-desktop !default;
$review__date-font-family: $body-font-family-secondary !default;
$review__date-color: $c-dark-secondary !default;
$review__message-font-weight: $body-font-weight-primary !default;
$review__message-font-size: $font-size-regular-desktop !default;
$review__message-color: $c-dark-secondary !default;
$review__message_read_more-font-weight: $body-font-weight-primary !default;
$review__message_read_more-font-size: $font-size-regular-desktop !default;
$review__message_read_more-color: $c-green-primary !default;
$review__message_read_more-background-color: Transparent !default;
$review__message_read_more-border: none !default;
$review__message_read_more-cursor: pointer !default;
$review__message_read_more-outline: none !default;
$review__message_read_more-font-family: $body-font-family-primary !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/molecules/SfReview.html"></template>
<script src="@storefront-ui/vue/src/components/molecules/SfReview.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfReview.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
