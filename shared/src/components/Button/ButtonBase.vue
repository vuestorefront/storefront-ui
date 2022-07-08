<template>
  <button
    v-focus
    :disabled="disabled"
    :class="[buttonType, buttonSize]"
    class="inline-flex items-center justify-center rounded-md cursor-pointer font-body disabled:cursor-not-allowed outline-violet"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
import { computed } from '@vue/composition-api';
import { focus } from '../../utils/focus-directive.js';

export default {
  name: 'ButtonPrimary',
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
    const buttonSize = computed(() => {
      if (props.type.includes('tertiary')) {
        switch (props.size) {
          case 'small':
            return 'button-small-tertiary';
          case 'large':
            return 'button-large-tertiary';
          default:
            return 'button-medium-tertiary';
        }
      } else {
        switch (props.size) {
          case 'small':
            return 'button-small';
          case 'large':
            return 'button-large';
          default:
            return 'button-medium';
        }
      }
    });

    return {
      buttonType,
      buttonSize
    };
  }
};
</script>
