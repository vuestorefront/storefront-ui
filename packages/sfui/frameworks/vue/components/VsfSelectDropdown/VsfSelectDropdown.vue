<script lang="ts" setup>
import { ref } from 'vue';
import type { PropType } from 'vue';
import { VsfSelectDropdownSize } from './types';
import {
  VsfDropdownInternal,
  VsfDropdownInternalTriggerEvent,
  VsfDropdownInternalPlacement,
} from '../VsfDropdownInternal/index';
import { VsfDropdownMenu } from '../VsfDropdownMenu/index';
import { VsfIconExpandMore } from '../VsfIcons';
import { VsfListItemMenu } from '../VsfListItemMenu/index';
import { extractProps } from '../../shared/props';
import { VsfSelect } from '../VsfSelect';

defineProps({
  ...extractProps(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    VsfSelect as any,
    [
      'options',
      'label',
      'errorText',
      'requiredText',
      'placeholder',
      'required',
      'disabled',
      'invalid',
      'helpText',
    ] as const,
  ),
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
</script>

<template>
  <div :class="['vsf-select-dropdown', { 'vsf-select-dropdown--disabled': disabled }]" data-testid="select-dropdown">
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
        <label :class="['vsf-select-dropdown__label', { 'vsf-select-dropdown__label--disabled': disabled }]">
          {{ label }}
          <span
            :class="[
              'vsf-select-dropdown__trigger',
              `vsf-select-dropdown__trigger--${size}`,
              { 'vsf-select-dropdown__trigger--invalid': invalid },
              { 'vsf-select-dropdown__trigger--required': required && !modelValue },
              { 'vsf-select-dropdown__trigger--disabled': disabled },
            ]"
            :tabindex="disabled ? undefined : 0"
          >
            <span
              v-if="!modelValue"
              :class="[
                'vsf-select-dropdown__placeholder',
                { 'vsf-select-dropdown__placeholder--hidden': !placeholder },
              ]"
            >
              {{ placeholder }}
            </span>
            <span>{{ modelValue }}</span>
            <VsfIconExpandMore
              :class="[
                'vsf-select-dropdown__chevron',
                { 'vsf-select-dropdown__chevron--up': isDropdownOpened && !disabled },
              ]"
            />
          </span>
        </label>
      </template>
      <VsfDropdownMenu v-if="!disabled" :loading="loading" class="vsf-select-dropdown__dropdown-menu" role="listbox">
        <slot>
          <template v-if="options">
            <li v-for="option in options" :key="option" class="vsf-select-dropdown__list-item">
              <VsfListItemMenu
                @click="
                  emit('update:modelValue', option);
                  isDropdownOpened = false;
                "
              >
                {{ option }}
              </VsfListItemMenu>
            </li>
          </template>
        </slot>
      </VsfDropdownMenu>
    </VsfDropdownInternal>
    <span v-if="invalid && !disabled" class="vsf-select-dropdown__error-text" data-testid="select-dropdown-error-text">
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
