<template>
  <button
    class="inline-flex items-center justify-center cursor-pointer bg-transparent hover:bg-rose-100 active:bg-rose-200 disabled:bg-transparent text-rose-600 hover:text-rose-700 active:text-rose-800 disabled:text-gray-500 disabled:opacity-50 font-body text-base font-medium px-[16px] py-2 rounded-md"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'SfButtonDestroyTertiary'
}
</script>
