# Review

Customer review component with author, rating, date and review text.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=molecules-review--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 10rem"></iframe>
  </div>

```html
<template>
  <SfReview
    :author="author"
    :date="date"
    :message="message"
    :max-rating="maxRating"
    :rating="rating"
    :char-limit="charLimit"
    :read-more-text="readMoreText"
    :hide-full-text="hideFullText"
  />
</template>
<script>
import { SfReview } from "@storefront-ui/vue";
export default {
  components: {
    SfReview,
  },
  data() {
    return {
      author: "Jane D.Smith",
      date: "April 2019",
      message:
        "I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can comment on interlation as I had an electrition instal it. Would recommend.",
      maxRating: 5,
      rating: 4,
      charLimit: 200,
      readMoreText: "Read more",
      hideFullText: "Read less",
    };
  },
};
</script>
```

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

- **`icon`**
  - _Review icon. Slot content can be replaced by custom icon._

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

## CSS custom properties (variables)

- **`--review-display`**
- **`--review-max-width`**
- **`--review-padding`**
- **`--review-border`**
- **`--review-border-width`**
- **`--review-icon-margin`**
- **`--review-author-color`**
- **`--review-author-font`**
- **`--review-author-font-weight`**
- **`--review-author-font-size`**
- **`--review-author-font-line-height`**
- **`--review-author-font-family`**
- **`--review-author-text-transform`**
- **`--review-rating-display`**
- **`--review-info-margin`**
- **`--review-date-display`**
- **`--review-date-margin`**
- **`--review-date-text-transform`**
- **`--review-date-color`**
- **`--review-date-font`**
- **`--review-date-font-weight`**
- **`--review-date-font-size`**
- **`--review-date-font-line-height`**
- **`--review-date-font-family`**
- **`--review-message-display`**
- **`--review-message-margin`**
- **`--review-message-color`**
- **`--review-message-font`**
- **`--review-message-font-weight`**
- **`--review-message-font-size`**
- **`--review-message-font-line-height`**
- **`--review-message-font-family`**
- **`--review-read-more-margin`**
### Overridden other components CSS variables 
- **`--icon-size`**
- **`--icon-color`**
- **`--button-padding`**
- **`--button-font`**
- **`--font-weight--medium`**
- **`--button-font`**
- **`--font-size--sm`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/molecules-review--common">Storybook</a>.
