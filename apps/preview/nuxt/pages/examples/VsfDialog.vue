<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfDialog v-model="modelValue" :hide-close-button="hideCloseButton">
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
import VsfDialog from '@sfui/sfui/frameworks/vue/components//VsfDialog/VsfDialog.vue';
import VsfButton from '@sfui/sfui/frameworks/vue/components/VsfButton/VsfButton.vue';
import { VsfButtonVariants } from '@sfui/sfui/frameworks/vue/components/VsfButton/types';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default {
  name: 'VsfDialogExample',
  components: {
    Controls,
    VsfDialog,
    VsfButton,
  },
  setup() {
    const { modelValue, hideCloseButton, controlsAttrs } = prepareControls(
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
      ],
      {
        modelValue: ref(false),
        hideCloseButton: ref(),
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
    };
  },
};
</script>
