<template>
  <button
    class="inline-flex items-center justify-center p-2 text-base font-medium text-green-500 bg-transparent rounded-md cursor-pointer hover:bg-green-100 active:bg-green-200 disabled:bg-transparent hover:text-green-600 active:text-green-700 disabled:text-gray-500 disabled:opacity-50 font-body"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'SfButtonTertiary'
}
</script>
