<script lang="ts" setup>
import { ref, toRefs, computed } from 'vue';
import { generateId } from '@storefront-ui/shared';
import { extractProps } from '../../shared/props';
import { VsfInput, VsfInputRole, VsfInputAriaAutocomplete } from '../VsfInput';
import { VsfDropdownMenu } from '../VsfDropdownMenu';
import { VsfDropdownInternal } from '../VsfDropdownInternal';
import { VsfIconChevronDown, VsfIconCancel } from '../VsfIcons';

const props = defineProps({
  // TODO: issue with typing because one component has defineEmits
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...(extractProps(VsfInput as any, ['label', 'placeholder', 'required', 'disabled', 'invalid'] as const) as any),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...(extractProps(VsfDropdownMenu, ['loading'] as const) as any),
  modelValue: {
    type: String,
    default: '',
  },
  requiredText: {
    type: String,
    default: '',
  },
  helpText: {
    type: String,
    default: '',
  },
  errorText: {
    type: String,
    default: '',
  },
});
const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();
const { modelValue } = toRefs(props);
const isDropdownOpened = ref(false);
const listboxId = generateId('listbox');
const proxySelected = computed({
  get: () => modelValue.value,
  set: (value) => {
    emit('update:modelValue', value);
  },
});
</script>

<template>
  <div>
    <VsfDropdownInternal v-model="isDropdownOpened" dropdown-content-class="w-full">
      <template #trigger>
        <VsfInput
          v-model="proxySelected"
          v-bind="{ label, placeholder, disabled }"
          :role="VsfInputRole.combobox"
          :aria-autocomplete="VsfInputAriaAutocomplete.both"
          :aria-controls="listboxId"
          :aria-expanded="isDropdownOpened"
          data-testid="combobox-input"
          @change="emit('update:modelValue', modelValue)"
          @input="emit('update:modelValue', modelValue)"
        >
          <template #suffix>
            <div class="vsf-combobox__icons">
              <button
                v-if="!disabled && isDropdownOpened"
                type="button"
                class="vsf-combobox__icons-cancel"
                @click="emit('update:modelValue', '')"
              >
                <VsfIconCancel />
              </button>
              <VsfIconChevronDown :class="{ 'vsf-combobox__icons-chevron--rotate': isDropdownOpened }" />
            </div>
          </template>
        </VsfInput>
      </template>
      <VsfDropdownMenu
        v-if="!disabled"
        :id="listboxId"
        :loading="loading"
        role="listbox"
        @click="isDropdownOpened = false"
      >
        <slot />
      </VsfDropdownMenu>
    </VsfDropdownInternal>
    <!-- TODO: replace with validation component/wrapper in the future -->
    <div>
      <p v-if="invalid" class="vsf-combobox__error-text" data-testid="combobox-error-text">{{ errorText }}</p>
      <p v-if="helpText" class="vsf-combobox__help-text" data-testid="combobox-error-text">{{ helpText }}</p>
      <p v-if="requiredText && required" class="vsf-combobox__required-text" data-testid="combobox-required-text">
        {{ requiredText }}
      </p>
    </div>
  </div>
</template>
