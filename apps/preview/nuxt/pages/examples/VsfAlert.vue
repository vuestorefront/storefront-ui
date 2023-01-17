<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfAlert
      v-model="modelValue"
      :variant="variant"
      :type="type"
      :text="text"
      :header="header"
      :with-shadow="withShadow"
      :hide-prefix="hidePrefix"
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
import { VsfAlert, VsfAlertTypes, VsfAlertVariants } from '@storefront-ui/vue/components/VsfAlert/index';
import { VsfButton, VsfButtonVariants } from '@storefront-ui/vue/components/VsfButton/index';
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
  'Custom component': h(VsfButton, { variant: VsfButtonVariants.tertiary }, 'Button'),
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
      VsfButtonVariants,
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
            propDefaultValue: VsfAlertVariants.gray,
            options: Object.keys(VsfAlertVariants),
            propType: 'VsfAlertVariants',
            description: 'Alert color variant, affect rendered icon.',
          },
          {
            type: 'select',
            modelName: 'type',
            propDefaultValue: VsfAlertTypes.temporary,
            options: Object.keys(VsfAlertTypes),
            propType: 'VsfAlertTypes',
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
            description:
              'Shows prefix slot (which is filled with icon by default). Gets styled with proper icon color based on variant prop.',
          },
          {
            type: 'select',
            modelName: 'prefix',
            options: prefixSlotOptions.controlsOptions,
            propDefaultValue: '',
            propType: 'Slot',
            description: 'Slot used for prefix. Replaces the default icon prefixes.',
          },
          {
            type: 'select',
            modelName: 'suffix',
            options: suffixSlotOptions.controlsOptions,
            propDefaultValue: '',
            propType: 'Slot',
            description: 'Slot used for suffix. In "temporary" variant replaces the close button.',
          },
        ],
        {
          modelValue: ref(true),
          variant: ref(undefined),
          type: ref(VsfAlertTypes.persistent),
          text: ref('Informative text'),
          header: ref('Header'),
          withShadow: ref(undefined),
          hidePrefix: ref(undefined),
          prefix: ref(prefixSlotOptions.defaultOption),
          suffix: ref(suffixSlotOptions.defaultOption),
        },
      ),
    };
  },
});
</script>
