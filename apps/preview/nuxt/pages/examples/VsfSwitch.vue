<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfSwitch v-model="modelCheck" :value="value" :disabled="disabled" :invalid="invalid" />
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import { VsfSwitch } from '@storefront-ui/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'VsfSwitchExample',
  components: {
    VsfSwitch,
    ComponentExample,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'text',
            modelName: 'modelCheck',
            propDefaultValue: '',
            propType: 'string',
          },
          {
            type: 'text',
            modelName: 'value',
            propDefaultValue: '',
            propType: 'string',
          },
          {
            type: 'boolean',
            modelName: 'disabled',
            propType: 'boolean',
          },
          {
            type: 'boolean',
            modelName: 'invalid',
            propType: 'boolean',
          },
        ],
        {
          value: ref('value'),
          disabled: ref(false),
          invalid: ref(false),
          modelCheck: ref([]),
        },
      ),
    };
  },
};
</script>
