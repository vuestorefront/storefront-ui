<template>
  <div
    class="relative h-6"
    role="progressbar"
  >
    <div
      class="sr-only"
      role="alert"
    >
      loading...
    </div>
    <div
      class="absolute w-6 h-6 bg-transparent border-2 border-gray-200 rounded-full"
      aria-hidden="true"
    />
    <div
      class="absolute w-6 h-6 bg-transparent border-2 rounded-[50%] is-animation-stopped animate-spin border-t-primary-600"
      aria-hidden="true"
    />
    <div
      class="absolute w-6 h-6 bg-transparent border-2 rounded-[50%] is-animation-stopped animate-spin animation-delay-1 border-t-primary-600 border-x-transparent border-b-transparent"
      aria-hidden="true"
    />
    <div
      class="absolute w-6 h-6 bg-transparent border-2 rounded-[50%] is-animation-stopped animate-spin animation-delay-2 border-t-primary-600 border-x-transparent border-b-transparent"
      aria-hidden="true"
    />
    <div
      class="absolute w-6 h-6 bg-transparent border-2 rounded-[50%] is-animation-stopped animate-spin animation-delay-3 border-t-primary-600 border-x-transparent border-b-transparent"
      aria-hidden="true"
    />
  </div>
</template>

<script>
export default {
  name: 'SpinnerBase'
}
</script>
