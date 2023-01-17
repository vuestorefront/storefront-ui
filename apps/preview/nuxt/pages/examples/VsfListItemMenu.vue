<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfListItemMenu class="max-w-sm" v-bind="state" @click="selected = !selected">
      <template v-if="prefixSlotOptions.getValue(slotPrefix)" #prefix>
        <component :is="prefixSlotOptions.getValue(slotPrefix)" />
      </template>
      <template v-if="suffixSlotOptions.getValue(slotSuffix)" #suffix>
        <component :is="suffixSlotOptions.getValue(slotSuffix)" />
      </template>
    </VsfListItemMenu>
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref, h } from 'vue';
import { VsfListItemMenu, VsfListItemMenuSizes } from '@storefront-ui/vue/components/VsfListItemMenu/index';
import { VsfIconSizeEnum, VsfIconCheck } from '@storefront-ui/vue/components/VsfIcons/index';
import { createControlsOptions } from '@storefront-ui/preview-shared/utils/controlsOptions';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const prefixSlotOptions = createControlsOptions({
  none: undefined,
  'Check icon': h(VsfIconCheck, { size: VsfIconSizeEnum.sm }),
});
const suffixSlotOptions = createControlsOptions({
  none: undefined,
  'Check icon': h(VsfIconCheck, { size: VsfIconSizeEnum.sm }),
});

export default defineComponent({
  name: 'VsfListItemMenuExample',
  components: {
    VsfListItemMenu,
    VsfIconCheck,
    ComponentExample,
  },
  setup() {
    return {
      prefixSlotOptions,
      suffixSlotOptions,
      ...prepareControls(
        [
          {
            type: 'text',
            modelName: 'label',
            propType: 'string',
            description: 'Set label value',
          },
          {
            type: 'text',
            modelName: 'link',
            propType: 'string',
            description: 'Set link to render as a link',
          },
          {
            type: 'text',
            modelName: 'secondaryText',
            propType: 'string',
            description: 'Set secondary text',
          },
          {
            type: 'text',
            modelName: 'counter',
            propType: 'string',
            description: 'Set counter value',
          },
          {
            type: 'select',
            modelName: 'slotPrefix',
            description: 'Custom component that could be placed before the element.',
            options: prefixSlotOptions.controlsOptions,
          },
          {
            type: 'select',
            modelName: 'slotSuffix',
            description: 'Custom component that could be placed after the element.',
            options: suffixSlotOptions.controlsOptions,
          },
          {
            type: 'select',
            modelName: 'size',
            options: Object.keys(VsfListItemMenuSizes),
            description: 'Set size variant',
          },
          {
            type: 'boolean',
            modelName: 'disabled',
            description: 'Show disabled state of component',
          },
          {
            type: 'boolean',
            modelName: 'selected',
            description: 'Show selected state of component',
          },
          {
            type: 'boolean',
            modelName: 'selectedBackground',
            description: 'Show selected background state of component',
          },
          {
            type: 'boolean',
            modelName: 'truncate',
            description: 'Show truncated version of secondary text',
          },
        ],
        {
          label: ref('Label'),
          size: ref<VsfListItemMenuSizes>(VsfListItemMenuSizes.base),
          link: ref(undefined),
          counter: ref(123),
          slotPrefix: ref(prefixSlotOptions.defaultOption),
          slotSuffix: ref(suffixSlotOptions.defaultOption),
          secondaryText: ref('Secondary text'),
          disabled: ref(undefined),
          selected: ref(false),
          selectedBackground: ref(false),
          truncate: ref(false),
        },
      ),
      VsfIconSizeEnum,
      VsfListItemMenuSizes,
    };
  },
});
</script>
