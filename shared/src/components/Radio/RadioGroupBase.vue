<template>
  <fieldset
    aria-required="true"
    aria-invalid="true"
    aria-describedby="radio-base-error"
    role="radiogroup"
    class="flex flex-col"
  >
    <RadioBase
      id="radio-1"
      name="radio-group-1"
      :invalid="isInvalid"
      value="one"
      :disabled="disabled"
      :required="required"
      :selected="selectedValue"
      @change="newValue => changeValue(newValue)"
    />
    <RadioBase
      id="radio-2"
      name="radio-group-2"
      value="two"
      :disabled="disabled"
      :required="required"
      :selected="selectedValue"
      @change="newValue => changeValue(newValue)"
    />
    <span
      id="radio-base-error"
      class="block col-span-2 mt-1 text-sm font-medium text-negative-600 font-body"
      :class="{'hidden': !isInvalid }"
    >Error message</span>
  </fieldset>
</template>

<script>
import { computed, ref } from '@vue/composition-api'
import RadioBase from './RadioBase.vue'
export default {
  name: 'RadioGroupBase',
  components: {
    RadioBase
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    const selectedValue = ref('')
    const changeValue = (value) => {
       selectedValue.value = value
    }

    const isInvalid = computed(() => selectedValue.value === '')

    return {
      changeValue,
      selectedValue,
      isInvalid
    }
  }
}
</script>
