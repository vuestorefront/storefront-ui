<template>
  <div class="inline-flex items-center p-1.5 text-sm font-normal text-gray-600 bg-gray-100 rounded-md font-body direction-row">
    <slot>
      <div class="w-4 h-4 bg-black rounded-full" />
    </slot>
  </div>
</template>

<script>
export default {
  name: 'TagIcon'
};
</script>
