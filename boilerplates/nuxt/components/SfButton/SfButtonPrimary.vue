<template>
  <button
    class="inline-flex items-center justify-center cursor-pointer bg-green-500 hover:bg-green-600 active:bg-green-700 disabled:bg-gray-200 text-white disabled:text-gray-500 disabled:opacity-50 uppercase font-body text-base font-medium px-[16px] py-2 rounded-md shadow hover:shadow-md disabled:shadow-none"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'SfButtonPrimary'
}
</script>
