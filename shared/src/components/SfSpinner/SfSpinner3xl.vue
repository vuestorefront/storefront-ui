<template>
  <div
    class="relative h-48"
    role="presentation"
    aria-live="polite"
    aria-busy="true"
  >
    <div class="absolute w-48 h-48 bg-transparent border-8 border-gray-200 rounded-[100%]" />
    <div class="stopped-animation absolute w-24 h-24 bg-transparent border-8 border-transparent rounded-tl-[100%] animate-spin border-t-primary-600" />
  </div>
</template>

<script>
export default {
  name: 'SfSpinner3xl'
}
</script>
