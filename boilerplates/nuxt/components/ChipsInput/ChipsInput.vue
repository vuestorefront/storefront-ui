<template>
  <div
    class="rounded-full group pl-0.5 pr-1 py-0.5 text-gray-900 bg-white border-2 border-primary-500 font-body font-normal inline-flex items-center align-center w-max cursor-pointer transition duration-300 ease outline-violet"
    :class="{'!pr-3 bg-gray-100 border-gray-200 opacity-50 cursor-not-allowed' : disabled, '!pr-0.5': !value}"
  >
    <div :class="chipsIconSize">
      <slot name="icon" />
    </div>
    <span v-if="value" class="ml-1" :class="chipsFontSize">{{ value }}</span>
    <slot name="close">
      <button v-if="!disabled" v-focus class="bg-transparent" :class="[chipsButtonSpacing, hideButton]" @click="$emit('chips-close')">
        <svg
          class="transition duration-300 fill-gray-500 group-hover:fill-primary-600 group-active:fill-primary-700 ease"
          :class="[chipsSize]"
          :aria-label="`Close ${value} chip`"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.1964 4.74332C12.456 4.48375 12.456 4.0629 12.1964 3.80332C11.9368 3.54375 11.516 3.54375 11.2564 3.80332L7.99975 7.05999L4.74308 3.80332C4.4835 3.54375 4.06265 3.54375 3.80308 3.80332C3.5435 4.0629 3.5435 4.48375 3.80308 4.74332L7.05975 7.99999L3.80308 11.2567C3.5435 11.5162 3.5435 11.9371 3.80308 12.1967C4.06265 12.4562 4.4835 12.4562 4.74308 12.1967L7.99975 8.93999L11.2564 12.1967C11.516 12.4562 11.9368 12.4562 12.1964 12.1967C12.456 11.9371 12.456 11.5162 12.1964 11.2567L8.93975 7.99999L12.1964 4.74332Z"
          />
          <path
            d="M12.1964 4.74332C12.456 4.48375 12.456 4.0629 12.1964 3.80332C11.9368 3.54375 11.516 3.54375 11.2564 3.80332L7.99975 7.05999L4.74308 3.80332C4.4835 3.54375 4.06265 3.54375 3.80308 3.80332C3.5435 4.0629 3.5435 4.48375 3.80308 4.74332L7.05975 7.99999L3.80308 11.2567C3.5435 11.5162 3.5435 11.9371 3.80308 12.1967C4.06265 12.4562 4.4835 12.4562 4.74308 12.1967L7.99975 8.93999L11.2564 12.1967C11.516 12.4562 11.9368 12.4562 12.1964 12.1967C12.456 11.9371 12.456 11.5162 12.1964 11.2567L8.93975 7.99999L12.1964 4.74332Z"
          />
        </svg>
      </button>
    </slot>
  </div>
</template>
<script>
import { computed } from '@nuxtjs/composition-api';
import { focus } from '../../utils/focus-directive.js';

export default {
  name: 'ChipsInput',
  directives: {
    focus
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return [
          'small',
          'medium',
          'large'
        ].includes(value);
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const chipsSize = computed(() => {
      switch (props.size) {
        case 'small':
          return 'w-4 h-4';
        case 'large':
          return 'w-5 h-5';
        default:
          return 'w-4 h-4';
      }
    });
    const chipsIconSize = computed(() => {
      switch (props.size) {
        case 'small':
          return 'w-5 h-5';
        case 'large':
          return 'w-8 h-8';
        default:
          return 'w-6 h-6';
      }
    });
    const chipsFontSize = computed(() => {
      switch (props.size) {
        case 'small':
          return 'text-sm';
        case 'large':
          return 'text-base';
        default:
          return 'text-sm';
      }
    });
    const chipsButtonSpacing = computed(() => {
      switch (props.size) {
        case 'small':
          return 'ml-2 mr-1';
        case 'large':
          return 'ml-3 mr-1.5';
        default:
          return 'ml-2.5 mr-1';
      }
    });
    const hideButton = computed(() => {
      return !props.value ? 'hidden' : 'block';
    });
    return {
      chipsSize,
      chipsIconSize,
      chipsFontSize,
      chipsButtonSpacing,
      hideButton
    };
  }
};
</script>
