<template>
  <button
    class="bg-rose-600 hover:bg-rose-700 active:bg-rose-800 disabled:bg-gray-200 text-white disabled:text-gray-500 disabled:opacity-50 uppercase rounded-md font-body text-base font-medium leading-6 px-[16px] py-2 shadow hover:shadow-md disabled:shadow-none"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonDestroy'
}
</script>
