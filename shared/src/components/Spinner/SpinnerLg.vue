<template>
  <div
    class="relative w-10 h-10"
  >
    <div
      class="sr-only"
      role="alert"
    >
      loading...
    </div>
    <div
      class="absolute w-10 h-10 bg-transparent border-2 border-gray-200 rounded-full"
      aria-hidden="true"
    />
    <div
      class="absolute w-10 h-10 bg-transparent border-2 rounded-[50%] is-animation-stopped animate-spin-base border-t-primary-600"
      aria-hidden="true"
    />
    <div
      class="absolute w-10 h-10 bg-transparent border-2 rounded-[50%] is-animation-stopped animate-spin-base animation-delay-1 border-t-primary-600 border-x-transparent border-b-transparent"
      aria-hidden="true"
    />
    <div
      class="absolute w-10 h-10 bg-transparent border-2 rounded-[50%] is-animation-stopped animate-spin-base animation-delay-2 border-t-primary-600 border-x-transparent border-b-transparent"
      aria-hidden="true"
    />
    <div
      class="absolute w-10 h-10 bg-transparent border-2 rounded-[50%] is-animation-stopped animate-spin-base animation-delay-3 border-t-primary-600 border-x-transparent border-b-transparent"
      aria-hidden="true"
    />
  </div>
</template>

<script>
export default {
  name: 'SpinnerLg'
};
</script>
