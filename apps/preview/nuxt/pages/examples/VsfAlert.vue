<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfAlert
      v-model="modelValue"
      :variant="variant"
      :type="type"
      :text="text"
      :header="header"
      :aria-label-close="ariaLabelClose"
      :with-shadow="withShadow"
      :hide-prefix="hidePrefix"
      :hide-suffix="hideSuffix"
    >
      <template v-if="prefixSlotOptions.getValue(prefix)" #prefix>
        <component :is="prefixSlotOptions.getValue(prefix)" />
      </template>
      <template v-if="suffixSlotOptions.getValue(suffix)" #suffix>
        <component :is="suffixSlotOptions.getValue(suffix)" />
      </template>
    </VsfAlert>
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref, h } from 'vue';
import { VsfAlert, VsfAlertType, VsfAlertVariant } from '@storefront-ui/vue/components/VsfAlert/index';
import { VsfButton, VsfButtonVariant } from '@storefront-ui/vue/components/VsfButton/index';
import { VsfIconChat } from '@storefront-ui/vue/components/VsfIcons/index';
import { createControlsOptions } from '@storefront-ui/preview-shared/utils/controlsOptions';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const prefixSlotOptions = createControlsOptions({
  none: undefined,
  'Custom icon': h(VsfIconChat),
});
const suffixSlotOptions = createControlsOptions({
  none: undefined,
  'Custom component': h(VsfButton, { variant: VsfButtonVariant.tertiary }, 'Button'),
});

export default defineComponent({
  name: 'VsfAlertExample',
  components: {
    VsfAlert,
    VsfButton,
    VsfIconChat,
    ComponentExample,
  },
  setup() {
    return {
      VsfButtonVariant,
      prefixSlotOptions,
      suffixSlotOptions,
      ...prepareControls(
        [
          {
            type: 'boolean',
            modelName: 'modelValue',
            propDefaultValue: 'false',
            propType: 'boolean',
            description: 'Controls whether Alert component is open or not.',
          },
          {
            type: 'select',
            modelName: 'variant',
            propDefaultValue: VsfAlertVariant.gray,
            options: Object.keys(VsfAlertVariant),
            propType: 'VsfAlertVariant',
            description: 'Alert color variant, affect rendered icon.',
          },
          {
            type: 'select',
            modelName: 'type',
            propDefaultValue: VsfAlertType.temporary,
            options: Object.keys(VsfAlertType),
            propType: 'VsfAlertType',
            description: 'Shows/hides close button. Temporary Alert gets closed after 5 seconds.',
          },
          {
            type: 'text',
            modelName: 'text',
            propType: 'string',
            description: 'Used unless "default" slot is provided',
          },
          {
            type: 'text',
            modelName: 'header',
            propType: 'string',
            description: 'Used unless "header" slot is provided',
          },
          {
            type: 'text',
            modelName: 'ariaLabelClose',
            propType: 'string',
            propDefaultValue: 'Close',
            description: 'Aria label of the default close button icon',
          },
          {
            type: 'boolean',
            modelName: 'withShadow',
            propType: 'boolean',
            propDefaultValue: 'false',
            description: 'Shows notification shadow',
          },
          {
            type: 'boolean',
            modelName: 'hidePrefix',
            propType: 'boolean',
            description: 'Hides prefix content',
          },
          {
            type: 'boolean',
            modelName: 'hideSuffix',
            propType: 'boolean',
            description: 'Hides suffix content',
          },
          {
            type: 'select',
            modelName: 'prefix',
            options: prefixSlotOptions.controlsOptions,
            propDefaultValue: '',
            propType: 'Slot',
            description: 'Prefix content. If not provided the variant-related icon is used as an alert prefix.',
          },
          {
            type: 'select',
            modelName: 'suffix',
            options: suffixSlotOptions.controlsOptions,
            propDefaultValue: '',
            propType: 'Slot',
            description:
              'Suffix content. If not provided the close button is used as an alert suffix (but only when variant = temporary).',
          },
        ],
        {
          modelValue: ref(true),
          variant: ref(undefined),
          type: ref(VsfAlertType.persistent),
          text: ref('Informative text'),
          header: ref('Header'),
          withShadow: ref(),
          ariaLabelClose: ref('Close'),
          hidePrefix: ref(),
          hideSuffix: ref(),
          prefix: ref(prefixSlotOptions.defaultOption),
          suffix: ref(suffixSlotOptions.defaultOption),
        },
      ),
    };
  },
});
</script>
