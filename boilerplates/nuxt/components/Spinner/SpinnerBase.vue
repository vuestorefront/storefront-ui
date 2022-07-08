<template>
  <div
    class="relative"
    :class="{
      'w-4 h-4': size === 'sm',
      'w-6 h-6': size === 'base',
      'w-10 h-10': size === 'lg',
      'w-14 h-14': size === 'xl',
      'w-24 h-24': size === '2xl',
      'w-48 h-48': size === '3xl',
    }"
    role="progressbar"
  >
    <div
      class="sr-only"
      role="alert"
    >
      loading...
    </div>
    <div
      :class="{
        'w-4 h-4 border-2': size === 'sm',
        'w-6 h-6 border-2': size === 'base',
        'w-10 h-10 border-2': size === 'lg',
        'w-14 h-14 border-[3px]': size === 'xl',
        'w-24 h-24 border-4': size === '2xl',
        'w-48 h-48 border-8': size === '3xl',
      }"
      class="absolute bg-transparent border-gray-200 rounded-full"
      aria-hidden="true"
    />
    <div
      :class="{
        'w-4 h-4 border-2': size === 'sm',
        'w-6 h-6 border-2': size === 'base',
        'w-10 h-10 border-2': size === 'lg',
        'w-14 h-14 border-[3px]': size === 'xl',
        'w-24 h-24 border-4': size === '2xl',
        'w-48 h-48 border-8': size === '3xl',
      }"
      class="absolute bg-transparent rounded-[50%] is-animation-stopped animate-spin-base border-t-primary-600"
      aria-hidden="true"
    />
    <div
      :class="{
        'w-4 h-4 border-2': size === 'sm',
        'w-6 h-6 border-2': size === 'base',
        'w-10 h-10 border-2': size === 'lg',
        'w-14 h-14 border-[3px]': size === 'xl',
        'w-24 h-24 border-4': size === '2xl',
        'w-48 h-48 border-8': size === '3xl',
      }"
      class="absolute bg-transparent rounded-[50%] is-animation-stopped animate-spin-base animation-delay-1 border-t-primary-600 border-x-transparent border-b-transparent"
      aria-hidden="true"
    />
    <div
      :class="{
        'w-4 h-4 border-2': size === 'sm',
        'w-6 h-6 border-2': size === 'base',
        'w-10 h-10 border-2': size === 'lg',
        'w-14 h-14 border-[3px]': size === 'xl',
        'w-24 h-24 border-4': size === '2xl',
        'w-48 h-48 border-8': size === '3xl',
      }"
      class="absolute bg-transparent rounded-[50%] is-animation-stopped animate-spin-base animation-delay-2 border-t-primary-600 border-x-transparent border-b-transparent"
      aria-hidden="true"
    />
    <div
      :class="{
        'w-4 h-4': size === 'sm',
        'w-6 h-6 border-2': size === 'base',
        'w-10 h-10 border-2': size === 'lg',
        'w-14 h-14 border-[3px]': size === 'xl',
        'w-24 h-24 border-4': size === '2xl',
        'w-48 h-48 border-8': size === '3xl',
      }"
      class="absolute bg-transparent rounded-[50%] is-animation-stopped animate-spin-base animation-delay-3 border-t-primary-600 border-x-transparent border-b-transparent"
      aria-hidden="true"
    />
  </div>
</template>

<script>
export default {
  name: 'SpinnerBase',
  props: {
    size: {
      type: String,
      default: 'base',
      validator(value) {
        return [
          'sm',
          'base',
          'lg',
          'xl',
          '2xl',
          '3xl'
        ].includes(value);
      }
    }
  }
};
</script>
