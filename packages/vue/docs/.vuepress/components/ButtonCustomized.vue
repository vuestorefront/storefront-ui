<template>
  <button class="sf-button" v-on="$listeners" v-bind="$attrs">
  <!--@slot Use this slot to place content inside the button.-->
  <slot/>
</button>
</template>
<style lang="scss" scoped>
.sf-button {
  background: gray;
  color: white;
  padding: 10px 20px;
}
</style>