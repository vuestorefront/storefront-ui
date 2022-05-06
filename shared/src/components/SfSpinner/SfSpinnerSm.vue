<template>
  <div
    class="relative h-4"
  >
    <div
      class="sr-only"
      role="alert"
    >
      loading...
    </div>
    <div class="absolute w-4 h-4 bg-transparent border-2 border-gray-200 rounded-3xl" />
    <div class="absolute w-4 h-4 bg-transparent border-2 rounded-[50%] is-animation-stopped animate-spin border-t-primary-600" />
    <div class="absolute w-4 h-4 bg-transparent border-2 rounded-[50%] is-animation-stopped animate-spin animation-delay-1 border-t-primary-600 border-x-transparent border-b-transparent" />
    <div class="absolute w-4 h-4 bg-transparent border-2 rounded-[50%] is-animation-stopped animate-spin animation-delay-2 border-t-primary-600 border-x-transparent border-b-transparent" />
    <div class="absolute w-4 h-4 bg-transparent border-2 rounded-[50%] is-animation-stopped animate-spin animation-delay-3 border-t-primary-600 border-x-transparent border-b-transparent" />
  </div>
</template>

<script>
export default {
  name: 'SfSpinnerSm'
}
</script>
