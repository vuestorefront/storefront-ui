<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfButton type="button" @click="modelValue = true"> Click to Open navigation top </VsfButton>

      <VsfNavigationTop v-model="modelValue" :variant="variant">
        <div className="border border-primary-400">Column1</div>
        <div className="border border-primary-400">Column2</div>
        <div className="border border-primary-400">Column3</div>
        <div className="border border-primary-400">Column4</div>
        <div
          v-if="variant !== VsfNavigationTopVariant['half-3'] && variant !== VsfNavigationTopVariant['3-half']"
          className="border border-primary-400"
        >
          Column5
        </div>
        <template v-if="slotButtonClose" #buttonClose>{{ slotButtonClose }}</template>
      </VsfNavigationTop>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import VsfNavigationTop from '@sfui/sfui/frameworks/vue/components/VsfNavigationTop/VsfNavigationTop.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';
import VsfButton from '@sfui/sfui/frameworks/vue/components/VsfButton/VsfButton.vue';
import { VsfNavigationTopVariant } from '@sfui/sfui/frameworks/vue/components/VsfNavigationTop/types';

export default {
  name: 'VsfNavigationTopExample',
  components: {
    Controls,
    VsfNavigationTop,
    VsfButton,
  },
  setup() {
    return {
      VsfNavigationTopVariant,
      ...prepareControls(
        [
          {
            type: 'boolean',
            modelName: 'modelValue',
            propType: 'boolean',
            description:
              'NOTE: When navigation is opened click on switch control will loop, because you also click outside',
          },
          {
            type: 'select',
            modelName: 'variant',
            options: Object.keys(VsfNavigationTopVariant),
          },
          {
            type: 'text',
            modelName: 'slotButtonClose',
            propType: 'slot',
          },
        ],
        {
          modelValue: ref(false),
          variant: ref(VsfNavigationTopVariant.auto),
          slotButtonClose: ref(undefined),
        },
      ),
    };
  },
};
</script>
