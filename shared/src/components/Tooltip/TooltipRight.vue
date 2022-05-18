<template>
  <div class="relative flex items-center group">
    <div class="absolute items-center hidden mr-2 group-hover:flex">
      <span class="relative z-10 bg-gray-500 font-body font-medium text-white text-sm leading-5 rounded-md px-3 py-1.5">Tooltip text</span>
      <div class="w-2 h-2 -ml-1 rotate-45 bg-gray-500" />
    </div>
    <button
      class="inline-flex ml-28 items-center justify-center cursor-pointer bg-green-500 hover:bg-green-600 active:bg-green-700 disabled:bg-gray-200 text-white disabled:text-gray-500 disabled:opacity-50 uppercase font-body text-base font-medium px-[16px] py-2 rounded-md shadow hover:shadow-md disabled:shadow-none disabled:cursor-not-allowed outline-violet"
    >
      Hover me
    </button>
  </div>
</template>

<script>

export default {
  name: 'SfTooltiptRight'
}
</script>
