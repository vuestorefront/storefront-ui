<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfCheckbox v-model="toggle" name="custom" label="label"></VsfCheckbox>
      {{ toggle }}
      <VsfCheckbox v-model="arrayData" name="checkbox1" label="checkbox1" value="checkbox1" />
      <VsfCheckbox v-model="arrayData" name="checkbox2" label="checkbox2" value="checkbox2" />
      {{ arrayData }}
    </div>
    <div class="e-page-controls"></div>
  </div>
</template>

<script>
import VsfCheckbox from '../../output/blocks/VsfCheckbox/VsfCheckbox.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VsfCheckboxExample',
  components: {
    VsfCheckbox,
  },
  data() {
    return {
      toggle: false,
      arrayData: []
    };
  },
});
</script>
