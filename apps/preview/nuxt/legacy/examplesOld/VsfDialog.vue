<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfDialog v-model="openModel" :disable-close="disableClose">
        <section>
          Header<br />
          Some cool dialog text here
        </section>
        <menu>
          <div class="flex justify-between">
            <VsfButton auto-focus @click="onClose('Canceled')">Close</VsfButton>
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
import VsfDialog from '../../output/blocks/VsfDialog/VsfDialog.vue';
import VsfButton, { VsfButtonVariants } from '../../output/blocks/VsfButton/VsfButton.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default {
  name: 'VsfAlertExample',
  components: {
    Controls,
    VsfDialog,
    VsfButton,
  },
  setup() {
    const { openModel, disableClose, controlsAttrs } = prepareControls(
      [
        {
          title: 'Open Dialog',
          type: 'boolean',
          modelName: 'openModel',
          propDefaultValue: false,
        },
        {
          title: 'Close button',
          type: 'boolean',
          modelName: 'disableClose',
          propDefaultValue: false,
        },
      ],
      {
        openModel: ref(false),
        disableClose: ref(false),
      },
    );

    return {
      onClose: (msg: string) => {
        openModel.value = false;
        setTimeout(() => {
          alert(msg);
        });
      },
      VsfButtonVariants,
      controlsAttrs,
      openModel,
      disableClose,
    };
  },
};
</script>
