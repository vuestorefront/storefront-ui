<template>
  <div
    class="relative w-10 h-1 overflow-hidden"
  >
    <div
      class="sr-only"
      role="alert"
    >
      loading...
    </div>
    <div
      class="absolute w-10 h-1 bg-gray-200"
      aria-hidden="true"
    />
    <div
      class="absolute w-2.5 h-1 animate-linear-loader bg-primary-600"
      aria-hidden="true"
    />
  </div>
</template>

<script>
export default {
  name: 'SfSpinnerLinear'
}
</script>
