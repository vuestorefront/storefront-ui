<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfDialog v-model="openModel" :closeable="closeableModel">
        <section>
          Header<br>
          Some cool dialog text here
        </section>
        <menu>
          <div class="flex justify-between">
            <VsfButton @click="onClose('Canceled')" autoFocus>Close</VsfButton>
            <VsfButton @click="onClose('Accepted')">Accept</VsfButton>
          </div>
        </menu>
      </VsfDialog>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs"/>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import VsfDialog from '../../output/blocks/VsfDialog/VsfDialog.vue';
import VsfButton, { VsfButtonVariants } from '../../output/blocks/VsfButton/VsfButton.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default {
  name: 'VsfAlertExample',
  components: {
    Controls,
    VsfDialog,
    VsfButton
  },
  setup() {
    const { openModel, closeableModel, controlsAttrs } = prepareControls([{
      title: 'Open Dialog',
      type: 'boolean',
      modelName: 'openModel',
      propDefaultValue: false
    }, {
      title: 'Close button',
      type: 'boolean',
      modelName: 'closeableModel',
      propDefaultValue: true
    }], {
      openModel: ref(false),
      closeableModel: ref(true)
    });

    return {
      onClose: (msg: string) => {
        openModel.value = false;
        setTimeout(() => {
          alert(msg)
        })
      },
      VsfButtonVariants,
      controlsAttrs,
      openModel,
      closeableModel
    }
  }
};
</script>
