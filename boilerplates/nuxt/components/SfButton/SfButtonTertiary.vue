<template>
  <button
    :disabled="disabled"
    :type="type"
    class="hover:bg-green-100 active:bg-green-200 disabled:bg-transparent text-green-500 hover:text-green-600 active:text-green-700 disabled:text-gray-500 disabled:opacity-50 uppercase p-2 rounded-md font-body text-base font-medium leading-6"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'SfButtonTertiary',
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
