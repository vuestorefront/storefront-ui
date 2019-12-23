<template>
  <div class="colors--container">
    <div v-for="(value, name) in colors" :key="name" class="color--wrapper">
      <div class="color--block" :class="value"></div>
      <span class="color--label">{{value}}</span>
    </div>
  </div>
    
</template>
<script>
import colors from '@storefront-ui/shared/variables/colors';

export default {
    data() {
        return {
            colors: colors,
        };
    },
}
</script>
<style scoped>
.colors--container {
  display: flex;
  flex-flow: wrap;
  text-align: center;
}

.color--block {
  width: 50px;
  height: 50px;
  border: 1px solid lightgray;
}

.color--wrapper {
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
}

.color--label {
  margin-top: 0.5rem;
  font-size: 0.8rem;
}
</style>
<style lang="scss">
@import "~@storefront-ui/shared/styles/variables/_colors.scss";

@each $pallete, $color in $icon-colors {
    .#{$pallete} {
        background-color: #{$color};
    }
}
</style>