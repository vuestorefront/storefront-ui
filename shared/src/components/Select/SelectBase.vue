<template>
  <div class="relative w-80">
    <div class="after:absolute box-border flex flex-col font-body after:pointer-events-none after:content-['<>'] after:top-[42px] after:right-[14px] after:rotate-90 after:font-base after:text-xl after:text-gray-500 after:z-0">
      <select
        id="select"
        ref="select"
        v-focus
        :value="selected"
        :invalid="invalid"
        :required="required"
        :disabled="disabled"
        class="disabled:cursor-not-allowed remove-default-styling order-2 peer py-3 pl-[16px] pr-3.5 m-px required:m-0 invalid:m-0 active:m-0 text-gray-900 bg-transparent border border-gray-300 rounded-md hover:border-primary-400 active:border-2 active:border-primary-500 disabled:bg-gray-100 disabled:opacity-50  disabled:text-gray-900/40 disabled:border-gray-200 invalid:border-negative-600 invalid:border-2 outline-violet"
      >
        <option
          :selected="selected === value"
          class="font-[Arial] bg-gray-300"
          value=""
        >
          --Please choose an option--
        </option>
        <option
          v-for="(option, key) in options"
          :key="`${option}-${key}`"
          :selected="selected === value"
          class="font-[Arial] bg-gray-300"
          value="option1"
        >
          {{ option }}
        </option>
      </select>
      <label
        for="select"
        class="peer-required:after:content-['*'] peer-required:after:text-sm order-1 mt-2 text-sm text-gray-500 peer-disabled:text-gray-500/50 peer-disabled:cursor-not-allowed font-medium"
      >{{ label }}</label>
      <span
        class="order-3 mt-1 text-sm font-medium text-negative-600 peer-disabled:cursor-not-allowed"
        :class="invalid ? 'block' : 'hidden'"
      >
        {{ errorText }}
      </span>
      <span class="order-4 mt-1 text-xs text-gray-500 peer-disabled:text-gray-500/50 peer-disabled:cursor-not-allowed">{{ helpText }}</span>
      <span class="order-5 hidden mt-1 text-xs text-gray-500 peer-required:block peer-disabled:cursor-not-allowed">*Required</span>
    </div>
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api';
import { focus } from '../../utils/focus-directive.js';

export default {
  name: 'SelectBase',
  directives: {
    focus
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    invalid: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: ''
    },
    helpText: {
      type: String,
      default: ''
    },
    errorText: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const selected = ref(props.value);
    return { selected };
  }
};
</script>
