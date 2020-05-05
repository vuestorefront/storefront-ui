<template>
  <nav class="sf-pagination">
    <!-- @slot Custom markup for previous page button -->
    <slot name="prev" v-bind="{ isDisabled: !canGoPrev, prev: getPrev }">
      <SfLink
        v-show="canGoPrev"
        class="sf-pagination__item sf-pagination__item--prev"
        :link="getLinkTo(getPrev)"
        aria-label="Go to previous page"
      >
        <SfIcon icon="arrow_left" size="32px" />
      </SfLink>
    </slot>
    <template v-if="showFirst">
      <slot name="number" v-bind="{ page: 1 }">
        <SfLink class="sf-pagination__item" :link="getLinkTo(1)">{{
          1
        }}</SfLink>
      </slot>
      <slot name="points">
        <span class="sf-pagination__item">...</span>
      </slot>
    </template>
    <template v-for="page in limitedPageNumbers">
      <slot name="number" v-bind="{ page }">
        <component
            :is="current === page ? 'span' : 'sf-link'"
            :key="page"
            class="sf-pagination__item"
            :class="{ 'sf-pagination__item--current': current === page }"
            :link="current === page ? null : getLinkTo(page)"
        >{{ page }}</component
        >
      </slot>
    </template>
    <template v-if="showLast">
      <slot name="points">
        <span class="sf-pagination__item">...</span>
      </slot>
      <slot name="number" v-bind="{ page: total }">
        <SfLink class="sf-pagination__item" :link="getLinkTo(total)">{{
          total
        }}</SfLink>
      </slot>
    </template>
    <!-- @slot Custom markup for next page button -->
    <slot name="next" v-bind="{ isDisabled: !canGoNext, next: getNext }">
      <SfLink
        v-show="canGoNext"
        class="sf-pagination__item sf-pagination__item--next"
        :link="getLinkTo(getNext)"
        aria-label="Go to next page"
      >
        <SfIcon icon="arrow_right" size="32px" />
      </SfLink>
    </slot>
  </nav>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfLink from "../../atoms/SfLink/SfLink.vue";
export default {
  name: "SfPagination",
  components: {
    SfIcon,
    SfLink,
  },
  props: {
    /**
     * Total number of pages
     */
    total: {
      type: Number,
      default: 0,
    },
    /**
     * Maximum visible pagination items
     */
    visible: {
      type: Number,
      default: 5,
    },
    /**
     * Status of arrows display
     */
    hasArrows: {
      type: Boolean,
      default: true,
    },
    /**
     * Name of query param for page
     */
    pageParamName: {
      type: String,
      default: "page",
    },
  },
  computed: {
    current() {
      return parseInt(this.$route.query[this.pageParamName], 10);
    },
    getPrev() {
      return this.current - 1;
    },
    canGoPrev() {
      return this.getPrev > 0;
    },
    getNext() {
      return this.current + 1;
    },
    canGoNext() {
      return this.getNext <= this.total;
    },
    showFirst() {
      const current = this.current;
      const visible = this.visible;
      const total = this.total;
      if (total <= visible || current < visible - Math.floor(visible / 2) + 1) {
        return false;
      }
      return true;
    },
    showLast() {
      const current = this.current;
      const visible = this.visible;
      const total = this.total;
      if (
        total <= visible ||
        total - current < visible - Math.floor(visible / 2) + 1
      ) {
        return false;
      }
      return true;
    },
    listOfPageNumbers() {
      return Array.from(Array(this.total), (_, i) => i + 1);
    },
    limitedPageNumbers() {
      const current = this.current;
      const visible = this.visible;
      const total = this.total;

      if (total <= visible) {
        return this.listOfPageNumbers;
      }
      if (current < visible - Math.floor(visible / 2) + 1) {
        return this.listOfPageNumbers.slice(0, visible);
      }
      if (total - current < visible - Math.floor(visible / 2) + 1) {
        return this.listOfPageNumbers.slice(total - visible);
      }
      return this.listOfPageNumbers.slice(
        current - Math.ceil(visible / 2),
        current + Math.floor(visible / 2)
      );
    },
  },
  methods: {
    getLinkTo(page) {
      const route = this.$route;
      return {
        ...route,
        query: { ...route.query, [this.pageParamName]: page },
      };
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfPagination.scss";
</style>
