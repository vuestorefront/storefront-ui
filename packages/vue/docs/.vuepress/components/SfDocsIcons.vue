<template>
  <div class="icons--list">
    <div class="icon--wrapper" v-for="size in sizes" :key="size">
      <SfIcon icon="home" color="green-primary" :size="size"/>
      <h5 class="icon-size--label">{{size}}</h5>
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
.icons--list {
  display: flex;
  flex-wrap: wrap;
}

.icon--wrapper {
  margin: 0.5rem 1rem;
  align-self: flex-end;
  text-align: center;
}

.icon-size--label {
  margin: 1rem 0;
  font-size: 1rem;
}
</style>