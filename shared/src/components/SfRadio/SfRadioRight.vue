<template>
  <div class="grid max-w-xs grid-cols-[1fr_24px] gap-x-2.5">
    <label
      :for="name"
      class="text-gray-900 cursor-pointer leading-6 text-base peer-required:after:content-['*'] peer-disabled:text-gray-900/40 peer-disabled:cursor-not-allowed font-body"
    > Label</label>
    <input
      :id="name"
      v-focus
      type="radio"
      class="peer w-[20px] h-[20px] cursor-pointer appearance-none rounded-full border-2 border-gray-500 hover:border-primary-500 checked:bg-primary-500 checked:border-primary-500 checked:shadow-m-inset disabled:cursor-not-allowed disabled:border-gray-500/50 invalid:border-negative-600"
      :name="name"
      :value="value"
      :disabled="disabled"
      :required="required"
    >
    <span class="col-start-1 mt-1 text-xs text-gray-500 peer-disabled:text-gray-500/50 font-body">Help text</span>
    <span class="hidden col-start-1 mt-1 text-xs text-gray-500 peer-required:block font-body">*Required</span>
    <span class="hidden col-start-1 mt-1 text-sm font-medium peer-invalid:block text-negative-600 font-body">Error message</span>
  </div>
</template>

<script>
// import { focus } from '../../utils/focus-directive.js'
export default {
  name: "SfRadio",
  directives: {
    focus,
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  setup() {},
}
</script>