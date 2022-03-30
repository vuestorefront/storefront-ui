<template>
  <button
    :disabled="disabled"
    :type="type"
    class="bg-green-500 hover:bg-green-600 active:bg-green-700 disabled:bg-gray-200 text-white disabled:text-gray-500 disabled:opacity-50 uppercase px-[16px] py-2 rounded-md font-body text-base font-medium leading-6 shadow hover:shadow-md disabled:shadow-none"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'SfButtonPrimary',
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
