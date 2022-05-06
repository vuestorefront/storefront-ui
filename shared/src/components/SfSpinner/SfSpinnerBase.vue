<template>
  <div
    class="relative h-6"
  >
    <div
      class="sr-only"
      role="alert"
    >
      loading...
    </div>
    <div class="absolute w-6 h-6 bg-transparent border-2 border-gray-200 rounded-full" />
    <div class="w-3 h-3 bg-transparent border-2 border-transparent rounded-tl-full stopped-animation before:absolute animate-spin border-t-primary-600" />
  </div> 
</template>

<script>
export default {
  name: 'SfSpinnerBase'
}
</script>
