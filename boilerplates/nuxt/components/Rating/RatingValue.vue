<template>
  <div
    class="flex h-6 text-base font-normal pointer-events-none fill-warning-500 font-body"
    :class="{'fill-gray-500': disabled, 'opacity-50': disabled}"
    role="image"
  >
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12.0072 17.6975L16.1572 20.2075C16.9172 20.6675 17.8472 19.9875 17.6472 19.1275L16.5472 14.4075L20.2172 11.2275C20.8872 10.6475 20.5272 9.5475 19.6472 9.4775L14.8172 9.0675L12.9272 4.6075C12.5872 3.7975 11.4272 3.7975 11.0872 4.6075L9.19715 9.0575L4.36715 9.4675C3.48715 9.5375 3.12715 10.6375 3.79715 11.2175L7.46715 14.3975L6.36715 19.1175C6.16715 19.9775 7.09715 20.6575 7.85715 20.1975L12.0072 17.6975Z" />
    </svg>
    <span
      class="mx-1 font-medium"
      :tabindex="disabled ? null : 0"
    >
      {{ value }}
    </span>
    <span
      class="text-gray-500"
      :tabindex="disabled ? null : 0"
    >
      ({{ reviews }})
    </span>
  </div>
</template>
<script>
import { ref } from '@nuxtjs/composition-api'
export default {
  name: "RatingValue",
  props: {
    value: {
      type: Number,
      default: 0
    },
    reviews: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    }

  },
  setup(props) {
    const isPartiallyFilled = ref(ref(0.25 < props.value % 1 && props.value % 1 < 0.75))
    const filled = ref(Math.floor(props.value) + (props.value % 1 > 0.75))    
    const empty = ref(props.max - filled.value - isPartiallyFilled.value)

    return {
      filled,
      empty,
      isPartiallyFilled
    }
  }
}
</script>