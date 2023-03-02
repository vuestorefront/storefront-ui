<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfSwitch v-model="modelCheck" :label="label" :value="value" :disabled="disabled" :help-text="helpText" />
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import { VsfSwitch } from '@storefront-ui/vue/components/VsfSwitch/index';
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
            type: 'text',
            modelName: 'label',
            propType: 'string',
          },
          {
            type: 'text',
            modelName: 'helpText',
            propType: 'string',
          },
        ],
        {
          value: ref('value'),
          disabled: ref(false),
          label: ref('Label'),
          helpText: ref('Help Text'),
          modelCheck: ref([]),
        },
      ),
    };
  },
};
</script>
