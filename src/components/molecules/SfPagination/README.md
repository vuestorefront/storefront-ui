# SfPagination

<!-- Write about general purpose of the component. Include screenshot (to be replaced with a live example once we migrate to vuepress) -->

Component to list page numbers and start handling content pagination.

![pagination](https://screenshotscdn.firefoxusercontent.com/images/6b8c6357-8464-43ba-8dd7-159044bf37bb.png)

## HTML Template

<!-- Just paste HTML template. It's much better description than any other code -->

````html
<nav class="sf-pagination">
  <ul class="sf-pagination__list">
    <li class="sf-pagination__item">
      <a class="sf-pagination__link sf-pagination__link--prev"
        aria-label="Go to previous page"
        :disabled="currentPage < 2"
        @click="setCurrentPage(currentPage - 1)">
        <slot name="prev">
          <img src="../../../assets/chevron_left.svg" alt="Go to previous page" class="sf-pagination__icon"/>
        </slot>
      </a>
    </li>

    <template v-if="showFirst">
      <li class="sf-pagination__item">
        <a class="sf-pagination__link" @click="setCurrentPage(1)">
          1
        </a>
      </li>
      <li class="sf-pagination__item">
        ...
      </li>
    </template>

    <li v-for="number in limitedPageNumbers"
      :key="number"
      :class="[
        'sf-pagination__item',
        { 'sf-pagination__item--current': currentPage === number }
      ]">
      <a
        class="sf-pagination__link"
        @click="setCurrentPage(number)">
        {{ number }}
      </a>
    </li>

    <template v-if="showLast">
      <li class="sf-pagination__item">
        ...
      </li>
      <li class="sf-pagination__item">
        <a class="sf-pagination__link" @click="setCurrentPage(numberOfPages)">
          {{ numberOfPages }}
        </a>
      </li>
    </template>

    <li class="sf-pagination__item">
      <a class="sf-pagination__link sf-pagination__link--next"
        aria-label="Go to next page"
        :disabled="currentPage > numberOfPages - 1"
        @click="setCurrentPage(currentPage + 1)">
        <slot name="next">
          <img src="../../../assets/chevron_right.svg" alt="Go to next page" class="sf-pagination__icon"/>
        </slot>
      </a>
    </li>
  </ul>
</nav>
````

## Props

<!--Write down props and their purpose -->

- `current-page` (1) - Current page integer number, starting from 1.

- `total-size` **required** - Number of total paginated elements (items).

- `page-size` (5) - Maximum number of elements (items) per page, default is 5.

## Slots

<!-- Describe slots and their purpose -->

- `prev` - Previous page link, contents chevron left icon by default.

- `next` - Next page link, contains chevron right icon by default.

## Emitted events

- `current-change` - Emitted when an pagination link is clicked and
page should be changed, must be listened to update the content and
then update the current page number.

## SCSS variables

<!-- Write down SCSS variables available for configuration -->

- `$pagination__list-padding` (1rem)
- `$pagination__list-justify` (center)
- `$pagination__item-size` (1.25rem)
- `$pagination__item-margin` (0 .25rem)
- `$pagination__item-color` ($c-text-secondary)
- `$pagination__item-hover-color` ($c-text-primary)
- `$pagination__item-transition` (all .15s linear)
- `$pagination__item--current-color` ($pagination__item-hover-color)
- `$pagination__item--current-border` (1px solid $pagination__item--current-color)
- `$pagination__item--current-border-width` (0 0 1px 0)
- `$pagination__link--prev-margin` (3rem)
- `$pagination__link--next-margin` ($pagination__link--prev-margin)

## Source files and Storybook demo

- [@src/components/molecules/SfPagination](https://github.com/DivanteLtd/storefront-ui/tree/master/src/components/molecules/SfPagination)
- template import `@storefrontui/vue/SfPagination.html`
- instance import `@storefrontui/vue/SfPagination.js`
- scss import `@storefrontui/vue/SfPagination.scss`
