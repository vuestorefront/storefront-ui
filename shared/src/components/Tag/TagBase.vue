<template>
  <div class="inline-flex px-3 py-1 text-sm font-normal text-gray-600 bg-gray-100 rounded-md font-body direction-row">
    <slot>
      Label
    </slot>
  </div>
</template>

<script>
export default {
  name: 'TagBase'
};
</script>
