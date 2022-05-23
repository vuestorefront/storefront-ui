<template>
  <div
    class="relative h-48"
  >
    <div
      class="sr-only"
      role="alert"
    >
      loading...
    </div>
    <div
      class="absolute w-48 h-48 bg-transparent border-8 border-gray-200 rounded-[100%]"
      aria-hidden="true"
    />
    <div
      class="absolute w-48 h-48 bg-transparent border-8 rounded-[50%] is-animation-stopped animate-spin-base border-t-primary-600"
      aria-hidden="true"
    />
    <div
      class="absolute w-48 h-48 bg-transparent border-8 rounded-[50%] is-animation-stopped animate-spin-base animation-delay-1 border-t-primary-600 border-x-transparent border-b-transparent"
      aria-hidden="true"
    />
    <div
      class="absolute w-48 h-48 bg-transparent border-8 rounded-[50%] is-animation-stopped animate-spin-base animation-delay-2 border-t-primary-600 border-x-transparent border-b-transparent"
      aria-hidden="true"
    />
    <div
      class="absolute w-48 h-48 bg-transparent border-8 rounded-[50%] is-animation-stopped animate-spin-base animation-delay-3 border-t-primary-600 border-x-transparent border-b-transparent"
      aria-hidden="true"
    />
  </div>
</template>

<script>
export default {
  name: 'Spinner3Xl'
};
</script>
