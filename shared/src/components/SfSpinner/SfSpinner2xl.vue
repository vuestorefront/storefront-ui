<template>
  <div
    class="relative h-24"
  >
    <div
      class="sr-only"
      role="alert"
    >
      loading...
    </div>
    <div class="absolute w-24 h-24 bg-transparent border-4 border-gray-200 rounded-full" />
    <div class="absolute w-12 h-12 bg-transparent border-4 border-transparent rounded-tl-full stopped-animation animate-spin border-t-primary-600" />
  </div>
</template>

<script>
export default {
  name: 'SfSpinner2xl'
}
</script>
