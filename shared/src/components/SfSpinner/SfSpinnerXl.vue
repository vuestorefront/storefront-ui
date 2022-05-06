<template>
  <div
    class="relative h-14"
  >
    <div
      class="sr-only"
      role="alert"
    >
      loading...
    </div>
    <div class="absolute w-14 h-14 bg-transparent border-[3px] border-gray-200 rounded-full" />
    <div class="absolute w-14 h-14 bg-transparent border-2 rounded-[50%] is-animation-stopped animate-spin border-t-primary-600" />
    <div class="absolute w-14 h-14 bg-transparent border-2 rounded-[50%] is-animation-stopped animate-spin animation-delay-1 border-t-primary-600 border-x-transparent border-b-transparent" />
    <div class="absolute w-14 h-14 bg-transparent border-2 rounded-[50%] is-animation-stopped animate-spin animation-delay-2 border-t-primary-600 border-x-transparent border-b-transparent" />
    <div class="absolute w-14 h-14 bg-transparent border-2 rounded-[50%] is-animation-stopped animate-spin animation-delay-3 border-t-primary-600 border-x-transparent border-b-transparent" />
  </div> 
</template>

<script>
export default {
  name: 'SfSpinnerXl'
}
</script>
