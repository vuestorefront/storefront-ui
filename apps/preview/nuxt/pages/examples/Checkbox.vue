<template>
  <div class="e-page">
    <div class="e-page-component">
      <Checkbox :name="'custom'" label="label" :rightCheckbox="true" :indeterminate="true"></Checkbox>
    </div>
    <div class="e-page-controls">
    </div>
  </div>
</template>

<script>
import Checkbox from '../../output/blocks/Checkbox.vue';
import { defineComponent } from "vue";

export default defineComponent({
  name: 'CheckboxExample',
  components: {
    Checkbox
  }
});
</script>
