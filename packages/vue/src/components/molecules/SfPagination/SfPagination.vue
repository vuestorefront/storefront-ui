<template>
  <nav class="sf-pagination">
    <ul class="sf-pagination__list">
      <li class="sf-pagination__item">
        <!-- @slot Custom markup for previous page button -->
        <slot name="prev" v-bind="{ isDisabled: canGoPrev, go: goPrev }">
          <button
            aria-label="Go to previous page"
            class="sf-pagination__button sf-pagination__button--prev"
            :disabled="isDisabled('prev')"
            @click="go('prev')"
          >
            <sf-icon icon="chevron_left" size="14px" />
          </button>
        </slot>
      </li>
      <template v-if="showFirst">
        <li class="sf-pagination__item">
          <slot name="number" v-bind="{ go, number: 1 }">
            <button class="sf-pagination__button" @click="go(1)">1</button>
          </slot>
        </li>
        <li class="sf-pagination__item">
          <slot name="points">...</slot>
        </li>
      </template>
      <slot v-bind="{ go }">
        <li
          v-for="number in limitedPageNumbers"
          :key="number"
          class="sf-pagination__item"
        >
          <slot name="number" v-bind="{ go, number }">
            <button
              class="sf-pagination__button"
              :class="{ 'sf-pagination__button--current': current === number }"
              @click="go(number)"
            >
              {{ number }}
            </button>
          </slot>
        </li>
      </slot>
      <template v-if="showLast">
        <li class="sf-pagination__item">
          <slot name="points">...</slot>
        </li>
        <li class="sf-pagination__item">
          <slot name="number" v-bind="{ go, number: total }">
            <button class="sf-pagination__button" @click="go(total)">
              {{ total }}
            </button>
          </slot>
        </li>
      </template>
      <li class="sf-pagination__item">
        <!-- @slot Custom markup for previous page button -->
        <slot name="next" v-bind="{ isDisabled: canGoNext, go: goNext }">
          <button
            aria-label="Go to next page"
            class="sf-pagination__button sf-pagination__button--next"
            :disabled="isDisabled('next')"
            @click="go('next')"
          >
            <sf-icon icon="chevron_right" size="14px" />
          </button>
        </slot>
      </li>
    </ul>
  </nav>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
export default {
  name: "SfPagination",
  components: {
    SfIcon
  },
  props: {
    /**
     * Current page number
     */
    current: {
      type: Number,
      default: 1
    },
    /**
     * Total number of pages
     */
    total: {
      type: Number,
      default: 5
    },
    /**
     * Maximum visible pagination items
     */
    visible: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      showFirst: false,
      showLast: false
    };
  },
  computed: {
    listOfPageNumbers() {
      return Array.from(Array(this.total), (_, i) => i + 1);
    },
    limitedPageNumbers() {
      return this.setLimitedPageNumber();
    },
    canGoPrev() {
      return this.current === 1;
    },
    canGoNext() {
      return this.current > this.total - 1;
    }
  },
  methods: {
    setLimitedPageNumber() {
      if (this.total <= this.visible) {
        this.showFirst = false;
        this.showLast = false;
        return this.listOfPageNumbers;
      }
      if (this.current < this.visible - Math.floor(this.visible / 2) + 1) {
        this.showFirst = false;
        this.showLast = true;
        return this.listOfPageNumbers.slice(0, this.visible);
      }
      if (
        this.total - this.current <
        this.visible - Math.floor(this.visible / 2) + 1
      ) {
        this.showFirst = true;
        this.showLast = false;
        return this.listOfPageNumbers.slice(this.total - this.visible);
      }
      this.showFirst = true;
      this.showLast = true;
      return this.listOfPageNumbers.slice(
        this.current - Math.ceil(this.visible / 2),
        this.current + Math.floor(this.visible / 2)
      );
    },
    go(direct) {
      switch (direct) {
        case "prev":
          this.$emit("click", this.current < 2 ? 1 : this.current - 1);
          break;
        case "next":
          this.$emit(
            "click",
            this.current > this.total - 1 ? this.total : this.current + 1
          );
          break;
        default:
          if (this.current !== direct) this.$emit("click", direct);
      }
    },
    goNext() {
      this.$emit(
        "click",
        this.current > this.total - 1 ? this.total : this.current + 1
      );
    },
    goPrev() {
      this.$emit("click", this.current < 2 ? 1 : this.current - 1);
    },
    isDisabled(direct) {
      switch (direct) {
        case "prev":
          return this.current < 2;
        case "next":
          return this.current > this.total - 1;
        default:
          return true;
      }
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfPagination.scss";
</style>
