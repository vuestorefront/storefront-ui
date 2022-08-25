<template>
  <fieldset
    class="inline-flex rounded-md rating focus-within:outline focus-within:outline-4 focus-within:outline-offset-2 focus-within:outline-violet-400"
  >
    <template :key="`star-${item}+${index}`" v-for="(item, index) in [...Array(useMaxProp).keys()].map((i) => i + 1)">
      <input
        v-model="vueProxyValue"
        type="radio"
        name="rating-1"
        :aria-label="`Rating star ${item} of ${useMaxProp}`"
        :value="item"
        :class="_classStringToObject(`appearance-none cursor-pointer star-input ${sizeClass}`)"
        @input="onChangeHandler(item)"
        :disabled="disabled"
        :defaultChecked="modelValue === item"
      />
    </template>
  </fieldset>
</template>
<script>
import { defineAsyncComponent } from 'vue';

export const VsfRatingButtonVariants = Object.freeze({
  xs: 'xs',
  sm: 'sm',
  base: 'base',
  lg: 'lg',
  xl: 'xl',
  '2xl': '2xl',
});
const DEFAULT_VALUES = {
  max: 5,
  size: VsfRatingButtonVariants.base,
};

export default {
  name: 'vsf-rating-button',

  props: ['max', 'size', 'onChange', 'modelValue', 'disabled'],

  computed: {
    useMaxProp() {
      return Number(this.max) || DEFAULT_VALUES.max;
    },
    useSizeProp() {
      return this.size || DEFAULT_VALUES.size;
    },
    sizeClass() {
      return {
        xs: 'h-4 w-4',
        sm: 'h-5 w-5',
        base: 'h-6 w-6',
        lg: 'h-10 w-10',
        xl: 'h-12 w-12',
        '2xl': 'h-20 w-20',
      }[this.useSizeProp];
    },
    vueProxyValue: {
      get: function () {
        return this.modelValue;
      },
      set: function (value) {
        this.$emit('update:modelValue', value);
      },
    },
  },

  methods: {
    onChangeHandler(item) {
      this.$emit('rating-changed', item);
      this.onChange && this.onChange(item);
    },
    _classStringToObject(str) {
      const obj = {};
      if (typeof str !== 'string') {
        return obj;
      }
      const classNames = str.trim().split(/\s+/);
      for (const name of classNames) {
        obj[name] = true;
      }
      return obj;
    },
  },
};
</script>

<style>
.star-input {
  background-color: #71717a;
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  -webkit-mask: url('../assets/star-outline.svg');
  -webkit-mask: url('data:image/svg+xml;base64,PCEtLSBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjY0OTggOS40Nzc1TDE0LjgwOTggOS4wNTc1TDEyLjkxOTggNC42MDc1QzEyLjU3OTggMy43OTc1IDExLjQxOTggMy43OTc1IDExLjA3OTggNC42MDc1TDkuMTg5ODMgOS4wNjc1TDQuMzU5ODMgOS40Nzc1QzMuNDc5ODMgOS41NDc1IDMuMTE5ODMgMTAuNjQ3NSAzLjc4OTgzIDExLjIyNzVMNy40NTk4MyAxNC40MDc1TDYuMzU5ODMgMTkuMTI3NUM2LjE1OTgzIDE5Ljk4NzUgNy4wODk4MyAyMC42Njc1IDcuODQ5ODMgMjAuMjA3NUwxMS45OTk4IDE3LjcwNzVMMTYuMTQ5OCAyMC4yMTc1QzE2LjkwOTggMjAuNjc3NSAxNy44Mzk4IDE5Ljk5NzUgMTcuNjM5OCAxOS4xMzc1TDE2LjUzOTggMTQuNDA3NUwyMC4yMDk4IDExLjIyNzVDMjAuODc5OCAxMC42NDc1IDIwLjUyOTggOS41NDc1IDE5LjY0OTggOS40Nzc1Wk0xMS45OTk4IDE1LjgzNzVMOC4yMzk4MyAxOC4xMDc1TDkuMjM5ODMgMTMuODI3NUw1LjkxOTgzIDEwLjk0NzVMMTAuMjk5OCAxMC41Njc1TDExLjk5OTggNi41Mzc1TDEzLjcwOTggMTAuNTc3NUwxOC4wODk4IDEwLjk1NzVMMTQuNzY5OCAxMy44Mzc1TDE1Ljc2OTggMTguMTE3NUwxMS45OTk4IDE1LjgzNzVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4KPCEtLSBlc2xpbnQtZW5hYmxlIG1heC1sZW4gLS0+Cg==');
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  mask: url('../assets/star-outline.svg');
  mask: url('data:image/svg+xml;base64,PCEtLSBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjY0OTggOS40Nzc1TDE0LjgwOTggOS4wNTc1TDEyLjkxOTggNC42MDc1QzEyLjU3OTggMy43OTc1IDExLjQxOTggMy43OTc1IDExLjA3OTggNC42MDc1TDkuMTg5ODMgOS4wNjc1TDQuMzU5ODMgOS40Nzc1QzMuNDc5ODMgOS41NDc1IDMuMTE5ODMgMTAuNjQ3NSAzLjc4OTgzIDExLjIyNzVMNy40NTk4MyAxNC40MDc1TDYuMzU5ODMgMTkuMTI3NUM2LjE1OTgzIDE5Ljk4NzUgNy4wODk4MyAyMC42Njc1IDcuODQ5ODMgMjAuMjA3NUwxMS45OTk4IDE3LjcwNzVMMTYuMTQ5OCAyMC4yMTc1QzE2LjkwOTggMjAuNjc3NSAxNy44Mzk4IDE5Ljk5NzUgMTcuNjM5OCAxOS4xMzc1TDE2LjUzOTggMTQuNDA3NUwyMC4yMDk4IDExLjIyNzVDMjAuODc5OCAxMC42NDc1IDIwLjUyOTggOS41NDc1IDE5LjY0OTggOS40Nzc1Wk0xMS45OTk4IDE1LjgzNzVMOC4yMzk4MyAxOC4xMDc1TDkuMjM5ODMgMTMuODI3NUw1LjkxOTgzIDEwLjk0NzVMMTAuMjk5OCAxMC41Njc1TDExLjk5OTggNi41Mzc1TDEzLjcwOTggMTAuNTc3NUwxOC4wODk4IDEwLjk1NzVMMTQuNzY5OCAxMy44Mzc1TDE1Ljc2OTggMTguMTE3NUwxMS45OTk4IDE1LjgzNzVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4KPCEtLSBlc2xpbnQtZW5hYmxlIG1heC1sZW4gLS0+Cg==');
  opacity: 0.8;
}
.star-input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.star-input:hover:not([disabled]),
.rating:hover .star-input:not(.rating .star-input:hover ~ .star-input):not([disabled]),
.rating .star-input:not(.rating .star-input:checked ~ .star-input) {
  background-color: #02bb4d;
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  -webkit-mask: url('../assets/star.svg');
  -webkit-mask: url('data:image/svg+xml;base64,PCEtLSBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjAwNzIgMTcuNjk3NUwxNi4xNTcyIDIwLjIwNzVDMTYuOTE3MiAyMC42Njc1IDE3Ljg0NzIgMTkuOTg3NSAxNy42NDcyIDE5LjEyNzVMMTYuNTQ3MiAxNC40MDc1TDIwLjIxNzIgMTEuMjI3NUMyMC44ODcyIDEwLjY0NzUgMjAuNTI3MiA5LjU0NzUgMTkuNjQ3MiA5LjQ3NzVMMTQuODE3MiA5LjA2NzVMMTIuOTI3MiA0LjYwNzVDMTIuNTg3MiAzLjc5NzUgMTEuNDI3MiAzLjc5NzUgMTEuMDg3MiA0LjYwNzVMOS4xOTcxNSA5LjA1NzVMNC4zNjcxNSA5LjQ2NzVDMy40ODcxNSA5LjUzNzUgMy4xMjcxNSAxMC42Mzc1IDMuNzk3MTUgMTEuMjE3NUw3LjQ2NzE1IDE0LjM5NzVMNi4zNjcxNSAxOS4xMTc1QzYuMTY3MTUgMTkuOTc3NSA3LjA5NzE1IDIwLjY1NzUgNy44NTcxNSAyMC4xOTc1TDEyLjAwNzIgMTcuNjk3NVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo8IS0tIGVzbGludC1lbmFibGUgbWF4LWxlbiAtLT4K');
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  mask: url('../assets/star.svg');
  mask: url('data:image/svg+xml;base64,PCEtLSBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjAwNzIgMTcuNjk3NUwxNi4xNTcyIDIwLjIwNzVDMTYuOTE3MiAyMC42Njc1IDE3Ljg0NzIgMTkuOTg3NSAxNy42NDcyIDE5LjEyNzVMMTYuNTQ3MiAxNC40MDc1TDIwLjIxNzIgMTEuMjI3NUMyMC44ODcyIDEwLjY0NzUgMjAuNTI3MiA5LjU0NzUgMTkuNjQ3MiA5LjQ3NzVMMTQuODE3MiA5LjA2NzVMMTIuOTI3MiA0LjYwNzVDMTIuNTg3MiAzLjc5NzUgMTEuNDI3MiAzLjc5NzUgMTEuMDg3MiA0LjYwNzVMOS4xOTcxNSA5LjA1NzVMNC4zNjcxNSA5LjQ2NzVDMy40ODcxNSA5LjUzNzUgMy4xMjcxNSAxMC42Mzc1IDMuNzk3MTUgMTEuMjE3NUw3LjQ2NzE1IDE0LjM5NzVMNi4zNjcxNSAxOS4xMTc1QzYuMTY3MTUgMTkuOTc3NSA3LjA5NzE1IDIwLjY1NzUgNy44NTcxNSAyMC4xOTc1TDEyLjAwNzIgMTcuNjk3NVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo8IS0tIGVzbGludC1lbmFibGUgbWF4LWxlbiAtLT4K');
  opacity: 1;
}
</style>
