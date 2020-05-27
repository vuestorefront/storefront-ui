<template>
  <button v-bind="$attrs" class="sf-button">
    <!--@slot Use this slot to place content inside the button.-->
    <slot />
  </button>
</template>
<style lang="scss" scoped>
.sf-button {
  background: gray;
  color: white;
  padding: 10px 20px;
}
</style>
