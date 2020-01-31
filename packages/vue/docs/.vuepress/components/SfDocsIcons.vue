<template>
  <div class="sf-docs-icons--list">
    <div class="sf-docs-icons--list__item" v-for="size in sizes" :key="size">
      <SfIcon icon="home" color="green-primary" :size="size"/>
      <h5 class="sf-docs-icons--list__item-label">{{size}}</h5>
    </div>
  </div>
</template>
<script>
import { sizesValues } from '@storefront-ui/shared/variables/sizes';
 
export default {
  data() {
    return {
      sizes: sizesValues
    };
  }
}
</script>
<style scoped>
.sf-docs-icons--list {
  display: flex;
  flex-wrap: wrap;
}

.sf-docs-icons--list__item {
  margin: 0.5rem 1rem;
  align-self: flex-end;
  text-align: center;
}

.sf-docs-icons--list__item-label {
  margin: 1rem 0;
  font-size: 1rem;
}
</style>