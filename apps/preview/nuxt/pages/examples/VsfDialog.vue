<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfDialog v-model="modelValue" :hide-close-button="hideCloseButton" :outside-click-close="outsideClickClose">
        <section>
          Header<br />
          Some cool dialog text here
        </section>
        <menu>
          <div class="flex justify-between">
            <VsfButton autofocus @click="onClose('Canceled')">Close</VsfButton>
            <VsfButton @click="onClose('Accepted')">Accept</VsfButton>
          </div>
        </menu>
      </VsfDialog>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import VsfDialog from '@storefront-ui/vue/components//VsfDialog/VsfDialog.vue';
import { VsfButton, VsfButtonVariants } from '@storefront-ui/vue/components/VsfButton/index';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default {
  name: 'VsfDialogExample',
  components: {
    Controls,
    VsfDialog,
    VsfButton,
  },
  setup() {
    const { modelValue, hideCloseButton, outsideClickClose, controlsAttrs } = prepareControls(
      [
        {
          type: 'boolean',
          modelName: 'modelValue',
          propDefaultValue: false,
        },
        {
          type: 'boolean',
          modelName: 'hideCloseButton',
          propDefaultValue: false,
        },
        {
          type: 'boolean',
          modelName: 'outsideClickClose',
          propDefaultValue: false,
        },
      ],
      {
        modelValue: ref(false),
        hideCloseButton: ref(),
        outsideClickClose: ref(false),
      },
    );

    return {
      onClose: (msg: string) => {
        modelValue.value = false;
        setTimeout(() => {
          alert(msg);
        });
      },
      VsfButtonVariants,
      controlsAttrs,
      modelValue,
      hideCloseButton,
      outsideClickClose,
    };
  },
};
</script>
