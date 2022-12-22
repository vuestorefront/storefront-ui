<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<script lang="ts" setup>
import VsfButton from '../VsfButton/VsfButton.vue';
import { VsfButtonVariants } from '../VsfButton/types';
import { VsfIconClose } from '../VsfIcons';
import { ref, toRefs, watch } from 'vue';
import { waitForElementInDOM } from '../../shared/utils/render';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  hideCloseButton: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void;
}>();
const { modelValue } = toRefs(props);
const dialogRef = ref<HTMLDialogElement>();

const handleCloseDialog = () => {
  dialogRef.value?.close();
  emit('update:modelValue', false);
};

const onClick = (event: MouseEvent) => {
  if (event.target === dialogRef.value) {
    handleCloseDialog();
  }
};

watch(
  [modelValue, dialogRef] as const,
  async ([modelValue, dialogRef]) => {
    if (!dialogRef) return;

    await waitForElementInDOM(dialogRef);

    if (modelValue && dialogRef.getAttribute('open') === null) {
      dialogRef.showModal();
    } else {
      dialogRef.close();
    }
  },
  { immediate: true },
);
</script>

<template>
  <dialog ref="dialogRef" class="vsf-dialog" data-testid="dialog" @click="onClick($event)">
    <div class="vsf-dialog__inner" v-bind="$attrs">
      <template v-if="!hideCloseButton">
        <VsfButton class="vsf-dialog__btn-close" :variant="VsfButtonVariants.tertiary" @click="handleCloseDialog()">
          <template #prefix><VsfIconClose /></template>
        </VsfButton>
      </template>
      <slot />
    </div>
  </dialog>
</template>
