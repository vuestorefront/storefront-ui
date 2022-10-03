<script lang="ts" setup>
import { computed } from 'vue';
import { VsfIconCancel } from '@sfui/sfui/frameworks/vue/components/VsfIcons/index';
import VsfButton from '@sfui/sfui/frameworks/vue/components/VsfButton/VsfButton.vue';

const props = defineProps({
  placeholder: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    default: null,
  },
  required: {
    type: Boolean,
    default: false,
  },
  autocomplete: {
    type: String,
    default: null,
  },
});

const emit = defineEmits<{
  (e: 'update:modelValue', val: string): void;
  (e: 'reset', val: Event): void;
}>();

const onInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};
const onReset = (event: Event) => {
  emit('reset', event);
};

const classes = computed(() => [
  'vsf-search',
  {
    'vsf-search--disabled': props.disabled,
  },
]);
</script>

<template>
  <div :class="classes">
    <form role="search" class="vsf-search__form">
      <fieldset :disabled="disabled" class="vsf-search__fieldset">
        <div class="vsf-search__input-wrapper group">
          <span v-if="$slots.prefix" class="vsf-search__input-prefix"><slot name="prefix" /></span>

          <input
            role="searchbox"
            type="search"
            :name="name"
            :placeholder="placeholder"
            :required="required"
            :autocomplete="autocomplete"
            class="vsf-search__input peer"
            :value="modelValue"
            @input="onInput"
          />

          <span class="vsf-search__input-reset">
            <button type="reset" class="vsf-search__input-reset-button" @click="onReset">
              <VsfIconCancel />
            </button>
          </span>

          <span v-if="$slots.suffix" class="vsf-search__input-suffix"><slot name="suffix"></slot></span>
        </div>

        <VsfButton v-if="$slots.submit" type="submit" class="vsf-search__submit" tile icon :disabled="disabled">
          <slot name="submit"></slot>
        </VsfButton>
      </fieldset>
    </form>

    <div class="vsf-search__results"><slot name="results"></slot></div>
  </div>
</template>
