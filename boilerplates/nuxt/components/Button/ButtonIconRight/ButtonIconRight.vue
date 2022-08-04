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
import { focus } from '../../../utils/focus-directive.js';

export default {
  name: 'ButtonPrimaryIconRight',
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
<style scoped>
.button-primary {
  @apply font-medium text-white uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 disabled:bg-gray-200 disabled:text-gray-500 disabled:opacity-50 shadow-base hover:shadow-medium disabled:shadow-none;
}
.button-secondary {
  @apply font-medium uppercase bg-white border border-gray-200 hover:border-primary-300 active:border-primary-400 disabled:border-0 hover:bg-green-100 active:bg-green-200 disabled:bg-gray-200 text-primary-500 hover:text-primary-600 active:text-primary-700 disabled:text-gray-500 disabled:opacity-50 shadow-base hover:shadow-medium disabled:shadow-none;
}
.button-tertiary {
  @apply font-normal bg-transparent text-primary-500 hover:bg-green-100 active:bg-green-200 disabled:bg-transparent hover:text-primary-600 active:text-primary-700 disabled:text-gray-500 disabled:opacity-50;
}
.button-destroy-primary {
  @apply text-base font-medium text-white uppercase bg-rose-600 hover:bg-rose-700 active:bg-rose-800 disabled:bg-gray-200 disabled:text-gray-500 disabled:opacity-50 shadow-base hover:shadow-medium disabled:shadow-none;
}
.button-destroy-secondary {
  @apply text-base font-medium uppercase bg-white border border-rose-400 disabled:border-0 hover:bg-rose-100 active:bg-rose-200 disabled:bg-gray-200 text-rose-600 hover:text-rose-600 active:text-rose-700 disabled:text-gray-500 disabled:opacity-50 shadow-base hover:shadow-medium disabled:shadow-none;
}
.button-destroy-tertiary {
  @apply text-base font-medium bg-transparent hover:bg-rose-100 active:bg-rose-200 disabled:bg-transparent text-rose-600 hover:text-rose-700 active:text-rose-800 disabled:text-gray-500 disabled:opacity-50;
}
.button-small {
  @apply leading-5 px-3 py-[6px] text-sm;
}
.button-medium {
  @apply px-4 py-2;
}
.button-large {
  @apply px-6 py-3;
}
.button-small-tertiary {
  @apply leading-5 p-[6px] text-sm;
}
.button-medium-tertiary {
  @apply p-2;
}
.button-large-tertiary {
  @apply p-3;
}
.button-small {
  @apply leading-5 pl-3 py-[6px] pr-2 text-sm;
}
.button-medium {
  @apply pl-4 py-2 pr-3 text-base font-medium;
}
.button-large {
  @apply pl-6 py-3 pr-5 text-base font-medium;
}
.button-small-tertiary {
  @apply leading-5 p-[6px] text-sm;
}
.button-medium-tertiary {
  @apply p-2 text-base font-medium;
}
.button-large-tertiary {
  @apply p-3 text-base font-medium;
}
</style>
