<template>
  <div class="sizes--container">
    <div v-for="(value, name) in sizes" :key="name" class="size--wrapper">
      <div class="size--block" :class="value">{{value}}</div>
    </div>
  </div>
</template>
<script>
import sizes from '@storefront-ui/shared/variables/sizes';

export default {
  data() {
    return {
      sizes: sizes,
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70px;
  justify-content: flex-end;
}

.size--label {
  margin-top: 0.5rem;
}
</style>
<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/variables/_sizes.scss";

@each $profile, $size in $icon-sizes {
  .#{$profile} {
    font-size: #{$size};
  }
}
</style>