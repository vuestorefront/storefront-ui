<template>
  <button
    v-focus
    :disabled="disabled"
    :class="buttonType"
    class="inline-flex items-center justify-center cursor-pointer font-body text-base font-medium pr-[16px] pl-[14px] py-2 rounded-md disabled:cursor-not-allowed outline-violet"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
import { computed } from '@vue/composition-api';
import { focus } from '../../utils/focus-directive.js';

export default {
  name: 'ButtonPrimaryIconLeft',
  directives: {
    focus
  },
  props: {
    type: {
      type: String,
      default: 'primary',
      validator(value) {
        return [
          'primary',
          'secondary',
          'tertiary',
          'destroy-primary',
          'destroy-secondary',
          'destroy-tertiary'
        ].includes(value);
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const buttonType = computed(() => {
      switch (props.type) {
        case 'secondary':
          return 'button-secondary';
        case 'tertiary':
          return 'button-tertiary';
        case 'destroy-primary':
          return 'button-destroy-primary';
        case 'destroy-secondary':
          return 'button-destroy-secondary';
        case 'destroy-tertiary':
          return 'button-destroy-tertiary';
        default:
          return 'button-primary';
      }
    });

    return {
      buttonType
    };
  }
};
</script>
