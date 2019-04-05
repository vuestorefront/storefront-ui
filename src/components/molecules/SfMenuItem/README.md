# SfHeader

<!-- Write about general purpose of the component. Include screenshot (to be replaced with a live example once we migrate to vuepress) -->

Customizable menu item component.

### Mobile view

![MenuItem](https://user-images.githubusercontent.com/28540671/55612159-e4108480-5787-11e9-8d68-ec2cca603746.png "MenuItem")

## HTML Template

<!-- Just paste HTML template. It's much better description than any other code -->

````html
<div class="sf-menu-item">
  <slot>
    <div class="sf-menu-item__group" v-if="$slots.left-icon || $slots.title">
      <slot name="icon-left" />
      <slot name="title" />
    </div>
    <div class="sf-menu-item__group">
      <slot name="count" />
      <slot name="icon-right">
        <span role="presentation" class="sf-menu-item-arrow sf-menu-item-icon--right" />
      </slot>
    </div>
  </slot>
</div>
````
## Props
<!-- Describe props and their purpose -->

- `title` - Main text, for example name of category.

- `count` - Used for displaying additional info, for example items in specific category.


## Slots

<!-- Describe slots and their purpose -->

- `icon-left` - Icon displayed on the left side of title text.

- `icon-right` - Icon displayed on the right side of count slot, arrow icon by default.

- `default` - Use it for completely different content of this component.


## SCSS variables

<!-- Write down SCSS variables available for configuration -->

- `$sf-menu-item-padding` ($spacing-big $spacing-extra-big)
- `$sf-menu-item-icon-spacing` (0.75rem)
- `$sf-menu-item-min-height` (35px)
- `$sf-menu-item-font-size` ($font-size-big-mobile)
- `$sf-menu-item-font-family` ($body-font-family-secondary)
- `$sf-title-font-size` (1rem)
- `$sf-count-font-color` ($c-gray-primary)
- `$sf-count-font-size` (0.875rem)


## Source files and Storybook demo

- [@src/components/molecules/SfMenuItem]
- [@src/stories/SfMenuItem.stories.js]
