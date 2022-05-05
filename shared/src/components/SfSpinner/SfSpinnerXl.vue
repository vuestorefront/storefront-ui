<template>
  <div
    class="relative h-14"
    role="presentation"
    aria-live="polite"
    aria-busy="true"
  >
    <div class="absolute w-14 h-14 bg-transparent border-[3px] border-gray-200 rounded-full" />
    <div class="absolute w-7 h-7 bg-transparent border-[3px] border-transparent rounded-tl-full animate-spin border-t-primary-600" />
  </div> 
</template>

<script>
export default {
  name: 'SfSpinnerXl'
}
</script>
