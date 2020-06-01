<template>
  <div class="sf-header-navigation-item" v-bind="$attrs">
    <slot />
  </div>
</template>
<script>
export default {
  name: "SfHeaderNavigationItem",
};
</script>
