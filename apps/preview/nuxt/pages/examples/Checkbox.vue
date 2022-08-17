<template>
  <div class="e-page">
    <div class="e-page-component">
      <checkbox-base name="chkbx" :label="'label'" :rightCheckbox="true"/>
      <Checkbox :name="'custom'" label="label" :rightCheckbox="true" :indeterminate="true"></Checkbox>
    </div>
    <div class="e-page-controls">
    </div>
  </div>
</template>

<script>
import CheckboxBase from '../../components/CheckboxBase.vue';
import Checkbox from '../../output/blocks/Checkbox.vue';
import { defineComponent } from "vue";

export default defineComponent({
  name: 'CheckboxExample',
  components: {
    CheckboxBase,
    Checkbox
  }
});
</script>
