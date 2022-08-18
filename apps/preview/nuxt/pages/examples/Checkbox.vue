<template>
  <div class="e-page">
    <div class="e-page-component">
      <Checkbox v-model="toggle" name="custom" label="label"></Checkbox>
      {{ toggle }}
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
    };
  },
});
</script>
