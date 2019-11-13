<template>
  <div>
    <SfOverlay :visible="visible" v-bind="$attrs" @click="visible = false" />
    <button @click="onBtnClick">Highlight code block for 3 sec.</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    onBtnClick() {
      this.visible = true;
      window.setTimeout(() => {
        this.visible = false;
      }, 3000);
    }
  }
};
</script>
