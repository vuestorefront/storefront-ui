<template>
  <div
    class="flex items-center h-6 font-normal pointer-events-none fill-warning-500 font-body"
  >
    <svg
      v-for="fill in filled"
      :key="'fill'+uid+fill"
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
    <svg
      v-if="isPartiallyFilled"
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
      <path d="M19.6498 9.4775L14.8098 9.0575L12.9198 4.6075C12.5798 3.7975 11.4198 3.7975 11.0798 4.6075L9.18983 9.0675L4.35983 9.4775C3.47983 9.5475 3.11983 10.6475 3.78983 11.2275L7.45983 14.4075L6.35983 19.1275C6.15983 19.9875 7.08983 20.6675 7.84983 20.2075L11.9998 17.7075L16.1498 20.2175C16.9098 20.6775 17.8398 19.9975 17.6398 19.1375L16.5398 14.4075L20.2098 11.2275C20.8798 10.6475 20.5298 9.5475 19.6498 9.4775ZM11.9998 15.8375V6.5375L13.7098 10.5775L18.0898 10.9575L14.7698 13.8375L15.7698 18.1175L11.9998 15.8375Z" />
    </svg>
    <svg
      v-for="empty in emptied"
      :key="'empty'+uid+empty"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      class="opacity-50 fill-gray-500"
      :class="{
        'h-4 w-4': size === 'xs',
        'h-5 w-5': size === 'sm',
        'h-6 w-6': size === 'base',
        'h-10 w-10': size === 'lg',
        'h-12 w-12': size === 'xl',
        'h-20 w-20': size === '2xl'
      }"
    >
      <path d="M19.6498 9.4775L14.8098 9.0575L12.9198 4.6075C12.5798 3.7975 11.4198 3.7975 11.0798 4.6075L9.18983 9.0675L4.35983 9.4775C3.47983 9.5475 3.11983 10.6475 3.78983 11.2275L7.45983 14.4075L6.35983 19.1275C6.15983 19.9875 7.08983 20.6675 7.84983 20.2075L11.9998 17.7075L16.1498 20.2175C16.9098 20.6775 17.8398 19.9975 17.6398 19.1375L16.5398 14.4075L20.2098 11.2275C20.8798 10.6475 20.5298 9.5475 19.6498 9.4775ZM11.9998 15.8375L8.23983 18.1075L9.23983 13.8275L5.91983 10.9475L10.2998 10.5675L11.9998 6.5375L13.7098 10.5775L18.0898 10.9575L14.7698 13.8375L15.7698 18.1175L11.9998 15.8375Z" />
    </svg>
    <span
      v-if="reviews >= 0"
      class="ml-1 text-gray-500"
      :class="{
        'text-xs': size === 'xs',
        'text-sm': size === 'sm',
        'text-base': size === 'base',
        'text-lg': size === 'lg' || size === 'xl' || size === '2xl'
      }"
    >
      ({{ reviews }})
    </span>
  </div>
</template>
<script>
import { getCurrentInstance, ref, onMounted } from '@vue/composition-api';

export default {
  name: 'RatingBase',
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
    const isPartiallyFilled = ref(props.value % 1 > 0.25 && props.value % 1 < 0.75);
    const filled = ref(Math.floor(props.value) + (props.value % 1 > 0.75));
    const emptied = ref(props.max - filled.value - isPartiallyFilled.value);
    const uid = ref(null);

    onMounted(() => {
      uid.value = getCurrentInstance().uid;
    });

    return {
      filled,
      emptied,
      isPartiallyFilled,
      uid
    };
  }
};
</script>
