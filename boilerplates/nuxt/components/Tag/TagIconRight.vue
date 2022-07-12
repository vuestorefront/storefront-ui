<template>
  <div class="inline-flex items-center px-3 py-1.5 text-sm font-normal text-gray-600 bg-gray-100 rounded-md font-body direction-row">
    <slot>
      Label
    </slot>
    <div class="w-4 h-4 ml-2 bg-black rounded-full" />
  </div>
</template>

<script>
export default {
  name: 'TagIconRight'
};
</script>
