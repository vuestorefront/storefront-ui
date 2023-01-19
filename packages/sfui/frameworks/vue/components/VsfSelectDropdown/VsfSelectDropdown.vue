<script lang="ts" setup>
import { computed, ref } from 'vue';
import type { PropType } from 'vue';
import { VsfSelectDropdownSize } from './types';
import { VsfInputSize } from '../VsfInput/index';
import {
  VsfDropdownInternal,
  VsfDropdownInternalTriggerEvent,
  VsfDropdownInternalPlacement,
} from '../VsfDropdownInternal/index';
import { VsfInput } from '../VsfInput/index';
import { VsfDropdownMenu } from '../VsfDropdownMenu/index';
import { VsfIconChevronDown } from '../VsfIcons';
import { VsfListItemMenu } from '../VsfListItemMenu/index';
import { extractProps } from '../../shared/props';
import { VsfSelect } from '../VsfSelect';

const props = defineProps({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...(extractProps(VsfSelect as any, ['options', 'label', 'errorText', 'requiredText'] as const) as any),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...(extractProps(VsfInput as any, ['placeholder', 'required', 'disabled', 'invalid', 'helpText'] as const) as any),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...(extractProps(VsfDropdownMenu as any, ['loading'] as const) as any),
  modelValue: {
    type: String,
    default: '',
  },
  size: {
    type: String as PropType<`${VsfSelectDropdownSize}`>,
    default: VsfSelectDropdownSize.base,
  },
});

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

const isDropdownOpened = ref(false);

const proxySelected = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value);
  },
});

const selectDropdownSize = computed(() => {
  switch (props.size) {
    case VsfSelectDropdownSize.sm:
      return VsfInputSize.sm;

    case VsfSelectDropdownSize.lg:
      return VsfInputSize.lg;

    default:
      return VsfInputSize.base;
  }
});
</script>

<template>
  <div :class="['vsf-select-dropdown', { 'vsf-select-dropdown--disabled': disabled }]">
    <VsfDropdownInternal
      :placement="VsfDropdownInternalPlacement.bottom"
      :trigger-event="VsfDropdownInternalTriggerEvent.click"
      data-testid="select-dropdown"
      :model-value="isDropdownOpened"
      class="vsf-select-dropdown-internal"
      trigger-class="vsf-select-dropdown-internal__trigger"
      dropdown-class="vsf-select-dropdown-internal__dropdown"
      @update:model-value="(value) => (isDropdownOpened = value)"
    >
      <template #trigger>
        <VsfInput
          v-model="proxySelected"
          :size="selectDropdownSize"
          :label="label"
          :disabled="disabled"
          :invalid="invalid"
          :placeholder="placeholder"
          class="vsf-select-dropdown__input"
        >
          <template #suffix>
            <VsfIconChevronDown
              class="vsf-select-dropdown__chevron"
              :class="{ 'vsf-select-dropdown__chevron--up': isDropdownOpened }"
            />
          </template>
        </VsfInput>
      </template>
      <VsfDropdownMenu v-if="!disabled" :loading="loading" class="vsf-select-dropdown__dropdown-menu" role="listbox">
        <slot>
          <template v-if="options">
            <li v-for="option in options" :key="option" class="vsf-select-dropdown__list-item">
              <VsfListItemMenu
                :label="option"
                @click="
                  emit('update:modelValue', option);
                  isDropdownOpened = false;
                "
              />
            </li>
          </template>
        </slot>
      </VsfDropdownMenu>
    </VsfDropdownInternal>
    <span v-if="invalid" class="vsf-select-dropdown__error-text" data-testid="select-dropdown-error-text">
      {{ errorText }}
    </span>
    <span v-if="helpText" class="vsf-select-dropdown__help-text" data-testid="select-dropdown-help-text">
      {{ helpText }}
    </span>
    <span
      v-if="requiredText && required"
      class="vsf-select-dropdown__required-text"
      data-testid="select-dropdown-required-text"
    >
      {{ requiredText }}
    </span>
  </div>
</template>
