<template>
  <button
    :disabled="disabled"
    :type="type"
    class="bg-white hover:bg-rose-100 active:bg-rose-200 disabled:bg-gray-200 text-rose-600 hover:text-rose-600 active:text-rose-700 disabled:text-gray-500 disabled:opacity-50 border border-rose-400 disabled:border-0 uppercase px-[16px] py-2 rounded-md font-body text-base font-medium leading-6 shadow hover:shadow-md disabled:shadow-none"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'SfButtonDestroySecondary',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button',
      validator: value => ['button', 'submit', 'reset'].includes(value)
    }
  }
}
</script>
