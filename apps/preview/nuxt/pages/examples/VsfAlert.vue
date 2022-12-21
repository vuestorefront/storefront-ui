<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfAlert
        v-model="modelValue"
        :variant="variant"
        :type="type"
        :text="text"
        :header="header"
        :with-shadow="withShadow"
        :hide-prefix="hidePrefix"
      >
        <template v-if="prefix !== 'none'" #prefix>
          <VsfIconChat />
        </template>
        <template v-if="suffix !== 'none'" #suffix>
          <VsfButton :variant="VsfButtonVariants.tertiary">Button</VsfButton>
        </template>
      </VsfAlert>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VsfAlert, { VsfAlertTypes, VsfAlertVariants } from '@sfui/sfui/frameworks/vue/components/VsfAlert/index';
import VsfButton, { VsfButtonVariants } from '@sfui/sfui/frameworks/vue/components/VsfButton/index';
import { VsfIconChat } from '@sfui/sfui/frameworks/vue/components/VsfIcons/index';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
  name: 'VsfAlertExample',
  components: {
    VsfAlert,
    VsfButton,
    VsfIconChat,
    Controls,
  },
  setup() {
    const slotContent = ['none', 'custom slot content'] as const;
    return {
      VsfButtonVariants,
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
            options: slotContent,
            propDefaultValue: '',
            propType: 'Slot',
            description: 'Slot used for prefix. Replaces the default icon prefixes.',
          },
          {
            type: 'select',
            modelName: 'suffix',
            options: slotContent,
            propDefaultValue: '',
            propType: 'Slot',
            description: 'Slot used for suffix. In "temporary" variant replaces the close button.',
          },
        ],
        {
          modelValue: ref(true),
          variant: ref(undefined),
          type: ref(VsfAlertTypes.permanent),
          text: ref('Informative text'),
          header: ref('Header'),
          withShadow: ref(undefined),
          hidePrefix: ref(undefined),
          prefix: ref(slotContent[0]),
          suffix: ref(slotContent[0]),
        },
      ),
    };
  },
});
</script>
