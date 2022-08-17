<template>
  <div
    class="inline-flex items-center text-sm font-normal rounded-md font-body direction-row"
    :class="{
      'bg-gray-100 fill-gray-600': type === 'base',
      'bg-secondary-100 fill-secondary-800': type === 'info',
      'bg-primary-100 fill-primary-600': type === 'positive',
      'bg-warning-100 fill-warning-700': type === 'warning',
      'bg-negative-100 fill-negative-700': type === 'error',
      'bg-gray-100 opacity-50 fill-gray-500/50': type === 'disabled',
      'p-1': size === 'sm',
      'p-1.5': size === 'base'
    }"
  >
    <div
      :class="{
        'w-4 h-4': size === 'sm',
        'w-5 h-5': size === 'base'
      }"
    >
      <slot v-bind="{type, size}" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TagIcon',
  props: {
    color: {
      type: String,
      default: 'bg-black',
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
          'disabled',
        ].includes(value);
      },
    },
    size: {
      type: String,
      default: 'base',
      validator(value) {
        return [
          'base',
          'sm',
        ].includes(value);
      },
    },
  },
};
</script>
