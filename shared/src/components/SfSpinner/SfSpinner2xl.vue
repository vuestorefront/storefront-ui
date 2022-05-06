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
    <div class="absolute  w-24 h-24 bg-transparent border-4 rounded-[50%] is-animation-stopped animate-spin border-t-primary-600" />
    <div class="absolute  w-24 h-24 bg-transparent border-4 rounded-[50%] is-animation-stopped animate-spin animation-delay-1 border-t-primary-600 border-x-transparent border-b-transparent" />
    <div class="absolute  w-24 h-24 bg-transparent border-4 rounded-[50%] is-animation-stopped animate-spin animation-delay-2 border-t-primary-600 border-x-transparent border-b-transparent" />
    <div class="absolute  w-24 h-24 bg-transparent border-4 rounded-[50%] is-animation-stopped animate-spin animation-delay-3 border-t-primary-600 border-x-transparent border-b-transparent" />
  </div>
</template>

<script>
export default {
  name: 'SfSpinner2xl'
}
</script>
