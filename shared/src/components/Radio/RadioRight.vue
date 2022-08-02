<template>
  <div class="grid max-w-xs  grid-cols-[1fr_24px] grid-flow-col-dense gap-x-2.5 py-3.5">
    <input
      :id="id"
      v-focus
      type="radio"
      :name="name"
      :value="value"
      :disabled="disabled"
      :required="required"
      :checked="isChecked"
      class="w-5 h-5 mt-px border-2 border-gray-500 rounded-full appearance-none cursor-pointer peer hover:border-primary-500 checked:bg-primary-500 checked:border-primary-500 checked:shadow-inset disabled:cursor-not-allowed disabled:border-gray-500/50 outline-violet"
      :class="{'border-negative-600': invalid, '!border-gray-500 opacity-50': disabled, '!border-gray-500 !bg-gray-500 opacity-50': isChecked & disabled }"
      @change="changeHandler"
      @input="inputHandler"
    >
    <label
      :for="id"
      class="col-start-1 text-gray-900 cursor-pointer text-base peer-required:after:content-['*'] peer-disabled:text-gray-900/40 peer-disabled:cursor-not-allowed font-body"
    > {{ label }}</label>
    <span class="hidden col-start-1 mt-1 text-xs text-gray-500 peer-required:block font-body">*Required</span>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api';
import { focus } from '../../utils/focus-directive.js';
export default {
  name: 'RadioRight',
  directives: {
    focus
  },
  model: {
    prop: 'selected',
    event: 'change'
  },
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: 'Label'
    },
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    invalid: {
      type: Boolean,
      default: false
    },
    selected: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const changeHandler = () => {
      emit('change', props.value);
    };

    const inputHandler = () => {
      emit('input', props.value);
    };

    const isChecked = computed(() => props.value === props.selected);

    return {
      changeHandler,
      inputHandler,
      isChecked
    };
  }
};
</script>
