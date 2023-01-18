<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfButton @click="modelValue = true">Open dialog example</VsfButton>

    <VsfDialog v-bind="state" v-model="modelValue">
      <section class="max-w-xs">
        <h3 class="font-bold text-lg">Title</h3>
        <p class="mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

        <footer class="mt-4 flex justify-end gap-4">
          <VsfButton autofocus :variant="VsfButtonVariant.secondary" @click="onClose('Close')">Close</VsfButton>
          <VsfButton @click="onClose('Accept')">Accept</VsfButton>
        </footer>
      </section>
    </VsfDialog>
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import VsfDialog from '@storefront-ui/vue/components//VsfDialog/VsfDialog.vue';
import { VsfButton, VsfButtonVariant } from '@storefront-ui/vue/components/VsfButton/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'VsfDialogExample',
  components: {
    ComponentExample,
    VsfDialog,
    VsfButton,
  },
  setup() {
    const modelValue = ref(false);

    return {
      onClose: (buttonName: string) => {
        modelValue.value = false;
        setTimeout(() => {
          alert(`Closed via "${buttonName}" button`);
        });
      },
      VsfButtonVariant,
      ...prepareControls(
        [
          {
            type: 'boolean',
            propType: 'boolean',
            modelName: 'modelValue',
            propDefaultValue: false,
            description: 'Controls whether the dialog is open or not',
          },
          {
            type: 'boolean',
            propType: 'boolean',
            modelName: 'hideCloseButton',
            propDefaultValue: false,
            description: 'When true, hides the default "X" close button located in dialog\'s top-right corner',
          },
          {
            type: 'boolean',
            propType: 'boolean',
            modelName: 'outsideClickClose',
            propDefaultValue: false,
            description: 'Controls whether click on outside overlay should close the dialog or not',
          },
        ],
        {
          modelValue,
          hideCloseButton: ref(),
          outsideClickClose: ref(false),
        },
      ),
    };
  },
};
</script>
