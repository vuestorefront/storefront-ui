<template>
  <div
    class="flex h-10"
    role="search"
  >
    <div class="relative">
      <input
        v-model="inputValue"
        v-focus
        type="search"
        :disabled="disabled"
        class="w-full h-10 pl-4 text-gray-900 border border-gray-200 disabled:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 peer rounded-l-md hover:border-primary-500 active:border-2 active:border-r-0 focus:border-primary-500 focus:border-2 focus:border-r-0 remove-default-styling outline-violet"
        :placeholder="placeholder"
        aria-label="search"
      >
      <span
        class="absolute hidden fill-gray-500 top-2 right-2"
        :class="{'!flex': !!inputValue}"
        @click="inputValue = ''"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM16.295 14.885C16.6844 15.2744 16.6844 15.9056 16.295 16.295C15.9056 16.6844 15.2744 16.6844 14.885 16.295L12 13.41L9.115 16.295C8.72564 16.6844 8.09436 16.6844 7.705 16.295C7.31564 15.9056 7.31564 15.2744 7.705 14.885L10.59 12L7.705 9.115C7.31564 8.72564 7.31564 8.09436 7.705 7.705C8.09436 7.31564 8.72564 7.31564 9.115 7.705L12 10.59L14.885 7.705C15.2744 7.31564 15.9056 7.31564 16.295 7.705C16.6844 8.09436 16.6844 8.72564 16.295 9.115L13.41 12L16.295 14.885Z" />
          <path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM16.295 14.885C16.6844 15.2744 16.6844 15.9056 16.295 16.295C15.9056 16.6844 15.2744 16.6844 14.885 16.295L12 13.41L9.115 16.295C8.72564 16.6844 8.09436 16.6844 7.705 16.295C7.31564 15.9056 7.31564 15.2744 7.705 14.885L10.59 12L7.705 9.115C7.31564 8.72564 7.31564 8.09436 7.705 7.705C8.09436 7.31564 8.72564 7.31564 9.115 7.705L12 10.59L14.885 7.705C15.2744 7.31564 15.9056 7.31564 16.295 7.705C16.6844 8.09436 16.6844 8.72564 16.295 9.115L13.41 12L16.295 14.885Z" />
        </svg>
      </span>
    </div>
    <slot>
      <ButtonBase
        class="rounded-l-none !shadow-none hover:!shadow-none w-25"
        :disabled="disabled"
        :class="{ '!bg-gray-200': disabled }"
        @click="$emit('click', inputValue)"
      >
        Search
      </ButtonBase>
    </slot>
  </div>
</template>

<script>
import { toRefs } from '@nuxtjs/composition-api';
import ButtonBase from '../Button/ButtonBase.vue';
import { focus } from '../../utils/focus-directive.js';
export default {
  name: 'SearchBase',
  directives: {
    focus
  },
  components: {
    ButtonBase
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const inputValue = toRefs(props.value);
    return {
      inputValue
    };
  }
};
</script>
