<template>
  <div class="sizes--container">
    <div v-for="(value, name) in sizes" :key="name" class="size--wrapper">
      <div class="size--block" :class="`${prefix}${value}`">{{value}}</div>
      <div class="size--label">.{{prefix}}{{value}}</div>
    </div>
  </div>
</template>
<script>
import sizes from '@storefront-ui/shared/variables/sizes';

export default {
  data() {
    return {
      sizes: sizes,
      prefix: `fs-`,
    };
  },
}
</script>
<style scoped>
.sizes--container {
  display: flex;
  flex-flow: wrap;
}

.size--wrapper {
  margin: 0.5rem;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100px;
  justify-content: flex-end;
  border: 1px solid #bebfc4;
}

.size--label {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #bebfc4;
  width: 100%;
  text-align: center;
  font-family: monospace;
  color: #6699cc;
}
</style>
<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/variables/_sizes.scss";
@import "~@storefront-ui/shared/styles/helpers/_typography.scss";
</style>