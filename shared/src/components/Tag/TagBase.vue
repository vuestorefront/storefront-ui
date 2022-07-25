<template>
  <div
    class="inline-flex font-normal rounded-md font-body direction-row"
    :class="{
      'bg-gray-100 text-gray-600': type === 'base',
      'bg-secondary-100 text-secondary-800': type === 'info',
      'bg-primary-100 text-primary-600': type === 'positive',
      'bg-warning-100 text-warning-700': type === 'warning',
      'bg-negative-100 text-negative-700': type === 'error',
      'bg-gray-100 text-gray-500 opacity-50': type === 'disabled',
      'px-2 py-1 text-xs': size === 'sm',
      'px-3 py-1 text-sm': size === 'base'
    }"
  >
    {{ label }}
  </div>
</template>

<script>
export default {
  name: 'TagBase',
  props: {
    label: {
      type: String,
      default: 'Label'
    },
    type: {
      type: String,
      default: 'base',
      validator(value) {
        return [
          'base',
          'info',
          'positive',
          'warning',
          'error',
          'disabled'
        ].includes(value);
      }
    },
    size: {
      type: String,
      default: 'base',
      validator(value) {
        return [
          'base',
          'sm'
        ].includes(value);
      }
    }
  }
};
</script>
