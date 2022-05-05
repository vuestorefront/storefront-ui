<template>
  <div
    class="relative h-10"
    role="presentation"
    aria-live="polite"
    aria-busy="true"
  >
    <div class="absolute w-10 h-10 bg-transparent border-2 border-gray-200 rounded-full" />
    <div class="absolute w-5 h-5 bg-transparent border-2 border-transparent rounded-tl-full animate-spin border-t-primary-600" />
  </div>
</template>

<script>
export default {
  name: 'SfSpinnerLg'
}
</script>
