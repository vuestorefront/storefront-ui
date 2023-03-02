<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <div class="flex items-center">
      <VsfCheckbox id="checkbox" ref="checkboxRef" v-bind="state" v-model="modelValue" value="label" />
      <label for="checkbox" class="ml-3 text-base text-gray-900 cursor-pointer font-body">Label</label>
    </div>
  </ComponentExample>
</template>

<script lang="ts">
import { VsfCheckbox } from '@storefront-ui/vue/components/VsfCheckbox/index';
import { defineComponent, ref, watch } from 'vue';
import { unrefElement, MaybeElement } from '@vueuse/core';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfCheckboxExample',
  components: {
    VsfCheckbox,
    ComponentExample,
  },
  setup() {
    const checkboxRef = ref<MaybeElement>();
    const indeterminate = ref(false);
    watch(indeterminate, (newIndeterminate) => {
      if (unrefElement(checkboxRef)) {
        (unrefElement(checkboxRef) as HTMLInputElement).indeterminate = newIndeterminate;
      }
    });
    return {
      ...prepareControls(
        [
          {
            type: 'text',
            modelName: 'modelValue',
            propDefaultValue: '',
            propType: 'string',
          },
          {
            type: 'boolean',
            modelName: 'indeterminate',
            propType: 'boolean',
          },
          {
            type: 'boolean',
            modelName: 'invalid',
            propType: 'boolean',
          },
        ],
        { modelValue: ref([]), indeterminate: indeterminate, invalid: ref(false) },
      ),
      checkboxRef,
    };
  },
});
</script>
