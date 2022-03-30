<template>
  <button
    :disabled="disabled"
    :type="type"
    class="bg-transparent hover:bg-rose-100 active:bg-rose-200 disabled:bg-transparent text-rose-600 hover:text-rose-700 active:text-rose-800 disabled:text-gray-500 disabled:opacity-50 uppercase px-[16px] py-2 rounded-md font-body text-base font-medium leading-6"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'SfButtonDestroyTertiary',
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
