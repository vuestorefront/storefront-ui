<template>
  <div class="sf-filter" :class="{ 'sf-filter--active': isActive }">
    <!-- @slot  -->
    <slot name="label" v-bind="{ label }">
      <SfCheckbox
        v-model="checked"
        class="sf-filter__checkbox"
        name="label"
        :label="label"
        :style="style"
      />
    </slot>
    <slot name="count" v-bind="{ count }">
      <div class="sf-filter__count">{{ count }}</div>
    </slot>
  </div>
</template>
<script>
// @vue/component
import SfCheckbox from "../../atoms/SfCheckbox/SfCheckbox.vue";

export default {
  name: "SfFilter",
  components: {
    SfCheckbox
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    count: {
      type: [String, Number],
      default: ""
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      checked: false
    };
  },
  computed: {
    style() {
      return this.isActive ? "font-weight: 500" : "font-weight: 400";
    }
  },
  watch: {
    isActive: {
      handler(value) {
        this.checked = value;
      }
    }
  },
  mounted() {
    this.checked = this.isActive;
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfFilter.scss";
</style>
