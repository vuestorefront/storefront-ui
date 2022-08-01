<template>
  <div
    class="flex direction-row"
    :class="{
      'h-6 text-xs': size === 'sm',
      'h-8 text-sm': size === 'base'
    }"
  >
    <div
      class="flex items-center font-medium text-white fill-white font-body direction-row"
      :class="{
        'bg-gray-600': type === 'base',
        'bg-secondary-800': type === 'info',
        'bg-primary-600': type === 'positive',
        'bg-warning-600': type === 'warning',
        'bg-negative-600': type === 'error',
        'bg-gray-500 opacity-50': type === 'disabled',
      }"
    >
      <span
        :class="{
          'w-4 h-4 m-1 mr-1.5': size === 'sm',
          'w-5 h-5 m-1.5': size === 'base'
        }"
      >
        <slot v-bind="{ type, size }" />
      </span>
      <span class="m-1.5" :class="$slots.default ? 'ml-0' : 'ml-3'"> {{ label }} </span>
    </div>
    <div
      class="border-t-0 border-b-transparent border-t-transparent"
      :class="{
        'border-l-gray-600': type === 'base',
        'border-l-secondary-800': type === 'info',
        'border-l-primary-600': type === 'positive',
        'border-l-warning-600': type === 'warning',
        'border-l-negative-600': type === 'error',
        'border-gray-500 opacity-50': type === 'disabled',
        'border-b-[24px] border-l-[12px]': size === 'sm',
        'border-b-[32px] border-l-[16px]': size === 'base'
      }"
    />
  </div>
</template>

<script>
export default {
  name: 'TagBadge',
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
