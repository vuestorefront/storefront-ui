<template>
  <nav
    :class="[$attrs.class, $attrs.staticClass, 'sf-breadcrumbs']"
    :style="[$attrs.style, $attrs.staticStyle]"
    v-bind="$attrs"
    :aria-label="ariaLabel"
    v-on="$listeners"
  >
    <ol class="sf-breadcrumbs__list">
      <li
        v-for="(breadcrumb, i) in breadcrumbs"
        :key="i"
        class="sf-breadcrumbs__list-item"
        :aria-current="breadcrumbLast(breadcrumbs) === i && 'page'"
      >
        <template v-if="breadcrumbLast(breadcrumbs) !== i">
          <slot name="link" v-bind="{ breadcrumb }">
            <component
              :is="components.SfLink"
              class="sf-breadcrumbs__breadcrumb"
              :link="breadcrumb.link"
              :data-testid="breadcrumb.text"
            >
              {{ breadcrumb.text }}
            </component>
          </slot>
        </template>
        <template v-else>
          <slot name="current" v-bind="{ breadcrumb }">
            <component
              :is="components.SfLink"
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
import { SfLink } from "@storefront-ui/vue";
export default {
  name: "SfBreadcrumbs",
    components: {
      default: { SfLink },
    },
  props: {
    breadcrumbs: {
      type: Array,
      default: () => [],
    },
    ariaLabel: {
      type: String,
      default: "breadcrumb",
    },
  },
  computed: {
    components() {
      return { SfLink }
    }
  },
  methods: {
    breadcrumbLast(breadcrumbs) {
      return breadcrumbs.length - 1;
    },
  }
};
</script>
<style lang="scss">
@import "@storefront-ui/shared/styles/components/atoms/SfBreadcrumbs.scss";
</style>