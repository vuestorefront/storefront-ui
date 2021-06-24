<template>
  <nav class="sf-breadcrumbs" aria-label="breadcrumb">
    <ol class="sf-breadcrumbs__list">
      <li
        v-for="(breadcrumb, i) in breadcrumbs"
        :key="i"
        class="sf-breadcrumbs__list-item"
        :aria-current="last === i && 'page'"
        data-testid="breadcrumb"
      >
        <template v-if="last !== i">
          <!-- @slot Custom markup for previous pages (binds `breadcrumb` object) -->
          <slot name="link" v-bind="{ breadcrumb }">
            <SfLink
              :link="breadcrumb.link"
              class="sf-breadcrumbs__breadcrumb"
              :data-testid="breadcrumb.text"
              >{{ breadcrumb.text }}
            </SfLink>
          </slot>
        </template>
        <template v-else>
          <!-- @slot Custom markup for current page (binds `breadcrumb` object) -->
          <slot name="current" v-bind="{ breadcrumb }">
            <SfLink
              :link="breadcrumb.link"
              class="sf-breadcrumbs__breadcrumb current"
              >{{ breadcrumb.text }}</SfLink
            >
          </slot>
        </template>
      </li>
    </ol>
  </nav>
</template>
<script>
import SfLink from "../SfLink/SfLink";
export default {
  name: "SfBreadcrumbs",
  components: {
    SfLink,
  },
  props: {
    /**
     * List of breadcrumbs (array of nested objects: `[ { text, route } ]`)
     */
    breadcrumbs: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    last() {
      return this.breadcrumbs.length - 1;
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfBreadcrumbs.scss";
</style>
