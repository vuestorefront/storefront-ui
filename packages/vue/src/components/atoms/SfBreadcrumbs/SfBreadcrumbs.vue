<template functional>
  <nav
    :class="[data.class, data.staticClass, 'sf-breadcrumbs']"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
    aria-label="breadcrumb"
    v-on="listeners"
  >
    <ol class="sf-breadcrumbs__list">
      <li
        v-for="(breadcrumb, i) in props.breadcrumbs"
        :key="i"
        class="sf-breadcrumbs__list-item"
        :aria-current="
          $options.breadcrumbLast(props.breadcrumbs) === i && 'page'
        "
      >
        <template v-if="$options.breadcrumbLast(props.breadcrumbs) !== i">
          <!-- @slot Custom markup for previous pages (binds `breadcrumb` object) -->
          <slot name="link" v-bind="{ breadcrumb }">
            <component
              :is="injections.components.SfLink"
              class="sf-breadcrumbs__breadcrumb"
              :link="breadcrumb.link"
              :data-testid="breadcrumb.text"
            >
              {{ breadcrumb.text }}
            </component>
          </slot>
        </template>
        <template v-else>
          <!-- @slot Custom markup for current page (binds `breadcrumb` object) -->
          <slot name="current" v-bind="{ breadcrumb }">
            <component
              :is="injections.components.SfLink"
              :link="breadcrumb.link"
              class="sf-breadcrumbs__breadcrumb current"
            >
              {{ breadcrumb.text }}
            </component>
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
  inject: {
    components: {
      default: { SfLink },
    },
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
  breadcrumbLast(breadcrumbs) {
    return breadcrumbs.length - 1;
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfBreadcrumbs.scss";
</style>
