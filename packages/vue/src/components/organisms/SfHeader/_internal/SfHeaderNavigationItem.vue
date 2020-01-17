<template>
  <div class="sf-header-navigation-item" v-on="$listeners">
    <slot />
  </div>
</template>
<script>
export default {
  name: "SfHeaderNavigationItem"
};
</script>
