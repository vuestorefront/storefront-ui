<script lang="ts" setup>
import type { PropType } from 'vue';
import { toRefs, watch } from 'vue';
import { useTimeoutFn } from '@vueuse/core';
import { VsfButton, VsfButtonVariant } from '../VsfButton';
import { VsfIconClose, VsfIconInfo, VsfIconError, VsfIconWarning, VsfIconCheckCircle } from '../VsfIcons';
import { VsfAlertVariant, VsfAlertType } from './types';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: false,
  },
  variant: {
    type: String as PropType<`${VsfAlertVariant}`>,
    default: VsfAlertVariant.gray,
  },
  type: {
    type: String as PropType<`${VsfAlertType}`>,
    default: VsfAlertType.temporary,
  },
  text: {
    type: String,
    default: '',
  },
  header: {
    type: String,
    default: '',
  },
  withShadow: {
    type: Boolean,
    default: false,
  },
  hidePrefix: {
    type: Boolean,
    default: false,
  },
});

const { modelValue, type } = toRefs(props);

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const { start: startTimeoutedClose, stop: stopTimeoutedClose } = useTimeoutFn(
  () => emit('update:modelValue', false),
  5000,
  { immediate: false },
);

watch(
  [modelValue, type] as const,
  ([modelValue, type]) => {
    stopTimeoutedClose();

    if (modelValue && type === VsfAlertType.temporary) {
      startTimeoutedClose();
    }
  },
  { immediate: true },
);
</script>

<template>
  <div
    v-if="modelValue"
    role="alert"
    :class="['vsf-alert', `vsf-alert--${variant}`, { 'vsf-alert--with-shadow': withShadow }]"
    data-testid="alert"
  >
    <div class="vsf-alert__prefix">
      <slot v-if="!hidePrefix" name="prefix">
        <VsfIconCheckCircle v-if="variant === VsfAlertVariant.positive" />
        <VsfIconError v-else-if="variant === VsfAlertVariant.error" />
        <VsfIconWarning v-else-if="variant === VsfAlertVariant.warning" />
        <VsfIconInfo v-else />
      </slot>
    </div>
    <div class="vsf-alert__content">
      <div class="vsf-alert__header" data-testid="alert-header">
        <slot name="header">{{ header }}</slot>
      </div>
      <slot>{{ text }}</slot>
    </div>
    <div class="vsf-alert__suffix">
      <slot name="suffix">
        <VsfButton
          v-if="type === VsfAlertType.persistent"
          :variant="VsfButtonVariant.tertiary"
          data-testid="alert-close-button"
          @click="$emit('update:modelValue', false)"
        >
          <template #prefix><VsfIconClose /></template>
        </VsfButton>
      </slot>
    </div>
  </div>
</template>
