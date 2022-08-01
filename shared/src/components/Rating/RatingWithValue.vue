<template>
  <div
    class="flex items-center h-6 text-base font-normal pointer-events-none fill-warning-500 font-body"
    role="img"
    :class="{
      'text-xs': size === 'xs',
      'text-sm': size === 'sm',
      'text-base': size === 'base',
      'text-lg': size === 'lg' || size === 'xl' || size === '2xl'
    }"
  >
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      :class="{
        'h-4 w-4': size === 'xs',
        'h-5 w-5': size === 'sm',
        'h-6 w-6': size === 'base',
        'h-10 w-10': size === 'lg',
        'h-12 w-12': size === 'xl',
        'h-20 w-20': size === '2xl'
      }"
    >
      <path d="M12.0072 17.6975L16.1572 20.2075C16.9172 20.6675 17.8472 19.9875 17.6472 19.1275L16.5472 14.4075L20.2172 11.2275C20.8872 10.6475 20.5272 9.5475 19.6472 9.4775L14.8172 9.0675L12.9272 4.6075C12.5872 3.7975 11.4272 3.7975 11.0872 4.6075L9.19715 9.0575L4.36715 9.4675C3.48715 9.5375 3.12715 10.6375 3.79715 11.2175L7.46715 14.3975L6.36715 19.1175C6.16715 19.9775 7.09715 20.6575 7.85715 20.1975L12.0072 17.6975Z" />
    </svg>
    <span
      class="mx-1 font-medium"
    >
      {{ ratingValue }}
    </span>
    <span
      v-if="reviews >= 0"
      class="text-gray-500"
    >
      ({{ reviews }})
    </span>
  </div>
</template>
<script>
import { computed } from '@vue/composition-api';
export default {
  name: 'RatingWithValue',
  props: {
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 5
    },
    reviews: {
      type: Number,
      default: 0
    },
    size: {
      type: String,
      default: 'base',
      validator(value) {
        return [
          'xs',
          'sm',
          'base',
          'lg',
          'xl',
          '2xl'
        ].includes(value);
      }
    }
  },
  setup(props) {
    const ratingValue = computed(() => props.value > props.max ? props.max : props.value);
    return {
      ratingValue
    };
  }
};
</script>
