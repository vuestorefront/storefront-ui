<template>
  <div class="grid max-w-xs grid-cols-[1fr_24px] gap-x-2.5">
    <input
      id="checkbox-left"
      v-focus
      :indeterminate="indeterminate"
      type="checkbox"
      :name="name"
      :value="value"
      :required="required"
      :disabled="disabled"
      class="col-start-2 peer w-[18px] h-[18px] border-2 border-gray-500 rounded-sm appearance-none cursor-pointer hover:border-primary-500 checked:bg-primary-500 checked:bg-checked-checkbox checked:border-primary-500 disabled:border-gray-500/50 disabled:cursor-not-allowed outline-violet"
      :class="{'bg-indeterminate-checkbox border-primary-500': indeterminate, 'border-negative-600': !valid}"
    >
    <label
      for="checkbox-left"
      class="col-start-0 row-start-1 text-gray-900 cursor-pointer font-body peer-required:after:content-['*'] peer-disabled:text-gray-900/40 peer-disabled:cursor-not-allowed"
    >Label</label>
    <span
      :class="{'hidden': valid}"
      class="block col-start-1 mt-1 text-sm font-medium text-negative-600 font-body"
    >Error message</span>
    <span class="col-start-1 mt-1 text-xs text-gray-500 peer-disabled:text-gray-500/50 font-body">Help text</span>
    <span class="hidden col-start-1 mt-1 text-xs text-gray-500 peer-required:block font-body">*Required</span>
  </div>
</template>
<script>
import { focus } from '../../utils/focus-directive.js'

export default {
  directives: {
    focus
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Boolean],
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    indeterminate: {
      type: Boolean,
      default: false,
    },
    valid: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
