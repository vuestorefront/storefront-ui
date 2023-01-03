<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfDialog v-bind="state" v-model="modelValue">
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
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import VsfDialog from '@storefront-ui/vue/components//VsfDialog/VsfDialog.vue';
import { VsfButton, VsfButtonVariants } from '@storefront-ui/vue/components/VsfButton/index';
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
      state,
      modelValue,
      hideCloseButton,
      outsideClickClose,
    };
  },
};
</script>
