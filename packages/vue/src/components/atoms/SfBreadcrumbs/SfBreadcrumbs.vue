<template>
  <nav class="sf-breadcrumbs" aria-label="breadcrumb">
    <ol class="sf-breadcrumbs__list">
      <li
        v-for="(breadcrumb, i) in breadcrumbs"
        :key="i"
        class="sf-breadcrumbs__item"
        :aria-current="last === i && 'page'"
      >
        <template v-if="last !== i">
          <!-- @slot Custom markup for previous pages (binds `breadcrumb` object) -->
          <slot name="link" v-bind="{ breadcrumb, go }">
            <a class="sf-breadcrumbs__link" @click="go(breadcrumb)">{{
              breadcrumb.text
            }}</a>
          </slot>
        </template>
        <template v-else>
          <!-- @slot Custom markup for current page (binds `breadcrumb` object) -->
          <slot name="current" v-bind="{ breadcrumb }">
            <span class="sf-breadcrumbs__current">{{ breadcrumb.text }}</span>
          </slot>
        </template>
      </li>
    </ol>
  </nav>
</template>
<script>
export default {
  name: "SfBreadcrumbs",
  props: {
    /**
     * List of breadcrumbs (array of nested objects: `[ { text, route } ]`)
     */
    breadcrumbs: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    last() {
      return this.breadcrumbs.length - 1;
    }
  },
  methods: {
    go(breadcrumb) {
      /**
       * Event for breadcrumb click, passes `breadcrumb.route` as value
       * @type {Event}
       */
      this.$emit("click", breadcrumb.route);
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfBreadcrumbs.scss";
</style>
