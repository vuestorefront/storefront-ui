<template>
  <div
    class="relative h-4"
    role="presentation"
    aria-live="polite"
    aria-busy="true"
  >
    <div class="absolute w-4 h-4 bg-transparent border-2 border-gray-200 rounded-3xl" />
    <div class="absolute w-[10px] h-[10px] bg-transparent border-2 border-transparent rounded-tl-xl animate-spin border-t-primary-600" />
  </div>
</template>

<script>
export default {
  name: 'SfSpinnerSm'
}
</script>
