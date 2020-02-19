<template>
  <section>
    <div v-for="(label, index) in labels" :key="index" class="label">
      <span class="label-color" :style="`background-color: ${label.color}`">&nbsp;</span>
      <div class="label-info">
        <div class="label-name">{{label.name}}</div>
          <div class="label-description">{{label.description}}</div>
      </div>
    </div>
  </section>
</template>
<script>
import labels from '../../assets/labels.json';
export default {
  props: {
    groupByType: {
      type: String,
      default: '',
    }
  },
  computed: {
    labels() {
      return labels.filter(label => !this.groupByType || label.type === this.groupByType);
    }
  }
}
</script>
<style scoped>
section {
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    border: 1px solid #e0dede;
    margin: 1rem 0;
}
.label {
    margin: 0.5rem;
    width: 100%;
    padding: 0.3rem;
    display: flex;
    align-items: flex-start;
}
.label:not(:last-child) {
    border-bottom: 1px dashed #e0dede;
}
.label-color {
    width: 20px;
    height: 20px;
    border-radius: 5px;
}
.label-info {
    margin-left: 0.5rem;
}
.label-name {
    text-transform: uppercase;
    margin-bottom: 0.4rem;
}
.label-description {
    font-size: 0.9rem;
    color: gray;
}
</style>