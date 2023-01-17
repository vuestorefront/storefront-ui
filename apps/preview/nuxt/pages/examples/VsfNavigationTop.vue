<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfButton type="button" @click="modelValue = true"> Click to Open navigation top </VsfButton>

    <VsfNavigationTop v-bind="state" v-model="modelValue">
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
      <template v-if="slotButtonCloseOptions.getValue(slotButtonClose)" #buttonClose>
        <component :is="slotButtonCloseOptions.getValue(slotButtonClose)" />
      </template>
    </VsfNavigationTop>
  </ComponentExample>
</template>

<script lang="ts">
import { ref, h } from 'vue';
import VsfButton from '@storefront-ui/vue/components/VsfButton/VsfButton.vue';
import { VsfNavigationTop, VsfNavigationTopVariant } from '@storefront-ui/vue/components/VsfNavigationTop/index';
import { createControlsOptions } from '@storefront-ui/preview-shared/utils/controlsOptions';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const slotButtonCloseOptions = createControlsOptions({
  default: undefined,
  'Custom button': h(VsfButton, 'Close'),
});

export default {
  name: 'VsfNavigationTopExample',
  components: {
    ComponentExample,
    VsfNavigationTop,
    VsfButton,
  },
  setup() {
    return {
      VsfNavigationTopVariant,
      slotButtonCloseOptions,
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
            type: 'select',
            modelName: 'slotButtonClose',
            propType: 'slot',
            options: slotButtonCloseOptions.controlsOptions,
          },
        ],
        {
          modelValue: ref(false),
          variant: ref(VsfNavigationTopVariant.auto),
          slotButtonClose: ref(slotButtonCloseOptions.defaultOption),
        },
      ),
    };
  },
};
</script>
