<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <SfSwitch :value="value" :disabled="disabled" v-model="modelValue" />
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import { SfSwitch } from '@storefront-ui/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'SfSwitchExample',
  components: {
    SfSwitch,
    ComponentExample,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'boolean',
            modelName: 'modelValue',
            propDefaultValue: 'false',
            propType: 'boolean',
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
        ],
        {
          value: ref('value'),
          disabled: ref(false),
          modelValue: ref(),
        },
      ),
    };
  },
};
</script>
