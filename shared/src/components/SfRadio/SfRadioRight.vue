<template>
  <div class="grid max-w-xs  grid-cols-[1fr_24px] grid-flow-col-dense gap-x-2.5 py-3.5">
    <input
      :id="`radio${_uid}`"
      v-focus
      type="radio"
      :name="name"
      :value="value"
      :disabled="disabled"
      :required="required"
      class="peer w-[20px] h-[20px] cursor-pointer appearance-none rounded-full border-2 border-gray-500 hover:border-primary-500 checked:bg-primary-500 checked:border-primary-500 checked:shadow-inset disabled:cursor-not-allowed disabled:border-gray-500/50 outline-violet"
      :class="{'border-negative-600': invalid }"
    >
    <label
      :for="`radio${_uid}`"
      class="col-start-1 text-gray-900 cursor-pointer text-base peer-required:after:content-['*'] peer-disabled:text-gray-900/40 peer-disabled:cursor-not-allowed font-body"
    > Label</label>
    <span class="hidden col-start-1 mt-1 text-xs text-gray-500 peer-required:block font-body">*Required</span>
  </div>
</template>

<script>
import { focus } from '../../utils/focus-directive.js'
export default {
  name: 'SfRadio',
  directives: {
    focus
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
    }
  }
}
</script>
