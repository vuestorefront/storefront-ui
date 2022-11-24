<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfRadioGroup>
        <VsfRadio id="radio-1" name="radio-group-1" label="Radio 1" help-text="Help text"></VsfRadio>
        <VsfRadio id="radio-2" name="radio-group-2" label="Radio 2"></VsfRadio>
      </VsfRadioGroup>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VsfRadio from '@sfui/sfui/frameworks/vue/components/VsfRadio/VsfRadio.vue';
import VsfRadioGroup from '@sfui/sfui/frameworks/vue/components/VsfRadio/VsfRadioGroup.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
  name: 'VsfRadioExample',
  components: {
    VsfRadio,
    VsfRadioGroup,
    Controls,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'json',
            modelName: 'categoriesModel',
            propType: '[]',
            propDefaultValue: '[]',
          },
          {
            type: 'json',
            modelName: 'socialMediaModel',
            propType: '[]',
            propDefaultValue: '[]',
          },
          {
            type: 'json',
            modelName: 'contactOptionsModel',
            propType: '[]',
            propDefaultValue: '[]',
          },
          {
            type: 'json',
            modelName: 'bottomLinksModel',
            propType: '[]',
            propDefaultValue: '[]',
          },
          {
            type: 'text',
            modelName: 'companyNameModel',
            propDefaultValue: '',
            propType: 'string',
          },
        ],
        {
          categoriesModel: ref('elo'),
        },
      ),
    };
  },
});
</script>
