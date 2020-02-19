<template>
  <div class="sf-docs-color--palette">
    <h5 class="sf-docs-color--palette__name">{{paletteName}}</h5>
    <div class="sf-docs-color--palette__block">
      <div>
        <div :class="['sf-docs-color--palette__block--item-color', `bg-${paletteName}`]"></div>
      </div>
      <div>
        <div :class="['sf-docs-color--palette__block--item-color', `bg-${paletteName}--variant`]"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      paletteName: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style scoped>
  .sf-docs-color--palette {
    margin: 0 0.5rem;
    width: 160px;
  }
  .sf-docs-color--palette__name {
    text-transform: uppercase;
    font-size: 1rem;
    text-align: center;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  .sf-docs-color--palette__block {
    display: flex;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
  }
  .sf-docs-color--palette__block--item-color {
    width: 80px;
    height: 80px;
    margin-bottom: 0.5rem;
  }
  .sf-docs-color--palette__block--item-label {
    display: block;
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
</style>