<template>
  <div class="palette-wrapper">
    <h5 class="palette--name">{{paletteName}}</h5>
    <div  class="palette--wrapper">
      <div class="" v-for="(value, name) in palette" :key="name">
        <div :class="['palette--block', `${paletteName}-${name}`]"></div>
        <span class="palette--label">{{value}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    palette: {
      type: Object,
      default: () => ({})
    },
    paletteName: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
.palette--block {
  width: 80px;
  height: 80px;
  margin-bottom: 0.5rem;
}

.palette--wrapper {
  display: flex;
  align-items: center;
  text-align: center;
}

.palette--label {
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 500;
}

.palette--name {
  text-transform: uppercase;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 1rem;
}

.palette-wrapper {
  margin: 0.5rem;
  width: 160px;
}
</style>