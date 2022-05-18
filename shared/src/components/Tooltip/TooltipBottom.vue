<template>
  <div class="relative flex flex-col items-center group">
    <button
      class="inline-flex items-center justify-center cursor-pointer bg-green-500 hover:bg-green-600 active:bg-green-700 disabled:bg-gray-200 text-white disabled:text-gray-500 disabled:opacity-50 uppercase font-body text-base font-medium px-[16px] py-2 rounded-md shadow hover:shadow-md disabled:shadow-none disabled:cursor-not-allowed outline-violet"
    >
      Hover me
    </button>
    <div class="absolute bottom-0 justify-center items-center hidden -mb-12 group-hover:flex z-50 bg-gray-500 font-body font-medium text-white text-sm leading-5 rounded-md px-3 py-1.5">
      <span>Tooltip text</span>
      <div class="absolute w-2 h-2 top-0 -mt-1 rotate-45 bg-gray-500" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'SfTooltipBottom'
}
</script>
