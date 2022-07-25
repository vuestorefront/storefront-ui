<template>
  <div
    class="flex direction-row"
    :class="{
      'h-6 text-xs': size === 'xs',
      'h-7 text-sm': size === 'sm',
      'h-9 text-base': size === 'base'
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
          'w-4 h-4 my-1 mx-1.5': size === 'xs',
          'w-5 h-5 my-1 mx-1.5': size === 'sm',
          'w-6 h-6 m-2': size === 'base'
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
        'border-b-[24px] border-l-[10px]': size === 'xs',
        'border-b-[28px] border-l-[12px]': size === 'sm',
        'border-b-[36px] border-l-[16px]': size === 'base'
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
          'sm',
          'xs'
        ].includes(value);
      }
    }
  }
};
</script>
