<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfSelect v-model="selected" :value="valueModel" :options="optionsModel" label="Select your favorite fruit" helpText="Help text"/>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import VsfSelect from '../../output/blocks/VsfSelect/VsfSelect.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
  name: 'VsfSelectExample',
  components: {
    VsfSelect,
    Controls,
  },
  setup() {
    return {
        selected: ref(''),
        valueModel: ref(''),
        optionsModel: ref([
            {
                label: "Apple",
                value: "apple"
            },
            {
                label: "Banana",
                value: "banana"
            },
            {
                label: "Grapes",
                value: "grapes"
            }
        ]),
      }
  },
});
</script>
