<template>
  <div class="e-page">
    <div class="e-page-component">
      <Checkbox v-model="toggle" name="custom" label="label"></Checkbox>
      {{ toggle }}
      <Checkbox v-model="arrayData" name="checkbox1" label="checkbox1" value="checkbox1"></Checkbox>
      <Checkbox v-model="arrayData" name="checkbox2" label="checkbox2" value="checkbox2"></Checkbox>
      {{ arrayData }}
    </div>
    <div class="e-page-controls"></div>
  </div>
</template>

<script>
import Checkbox from '../../output/blocks/Checkbox.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CheckboxExample',
  components: {
    Checkbox,
  },
  data() {
    return {
      toggle: false,
      arrayData: []
    };
  },
});
</script>
