<template>
  <button class="button is-primary" @click="onClick">
    <!-- @slot default inner button content -->
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",

  methods: {
    onClick() {
      /**
       * Click event
       *
       * @event click
       */
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
button {
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 15pt;
  padding: 3px 10px;
  margin: 10px;
}
</style>
