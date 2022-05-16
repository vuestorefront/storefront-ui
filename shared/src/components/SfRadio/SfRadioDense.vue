<template>
  <div class="grid max-w-xs grid-cols-[24px_1fr] gap-x-2.5 py-3.5">
    <input
      :id="`radio${_uid}`"
      v-focus
      type="radio"
      :name="name"
      :value="value"
      :disabled="disabled"
      :required="required"
      :checked="isChecked"
      class="peer w-[20px] h-[20px] mt-px cursor-pointer appearance-none rounded-full border-2 border-gray-500 hover:border-primary-500 checked:bg-primary-500 checked:border-primary-500 checked:shadow-inset disabled:cursor-not-allowed disabled:border-gray-500/50 outline-violet"
      :class="{'border-negative-600': invalid }"
      @change="changeHandler"
      @input="inputHandler"
    >
    <label
      :for="`radio${_uid}`"
      class="text-gray-900 cursor-pointer text-base peer-required:after:content-['*'] peer-disabled:text-gray-900/40 peer-disabled:cursor-not-allowed font-body"
    > Label</label>
    <span class="hidden col-start-2 mt-1 text-xs text-gray-500 peer-required:block font-body">*Required</span>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'
import { focus } from '../../utils/focus-directive.js'
export default {
  name: 'SfRadioDense',
  directives: {
    focus
  },
  model: {
    prop: 'selected',
    event: 'change'
  },
  props: {
    name: {
      type: String,
      default: ''
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
  setup (props, { emit }) {
    const changeHandler = () => {
      emit('change', props.value)
    }

    const inputHandler = () => {
      emit('input', props.value)
    }

    const isChecked = computed(() => props.value === props.selected)

    return {
      changeHandler,
      inputHandler,
      isChecked
    }
  }
}
</script>
