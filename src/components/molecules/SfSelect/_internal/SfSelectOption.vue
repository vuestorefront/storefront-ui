<template>
  <div @click="clicked($event)" class="sf-select__option">
    <slot>
      {{ value }}
      <div v-if="selected == value" class="sf-select__active"></div>
    </slot>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  computed: {
    selected() {
      return this.$parent.$props.value;
    }
  },
  methods: {
    clicked(e) {
      this.$parent.$emit("input", this.value);
    }
  }
};
</script>
