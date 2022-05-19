<template>
  <fieldset
    aria-required="true"
    aria-invalid="true"
    aria-describedby="radio-multiline-error"
    role="radiogroup"
    class="flex flex-col"
  >
    <RadioMultiline
      id="radio-7"
      name="radio-multiline-group-1"
      :invalid="isInvalid"
      value="one"
      :disabled="disabled"
      :required="required"
      :selected="selectedValue"
      @change="newValue => changeValue(newValue)"
    />
    <RadioMultiline
      id="radio-8"
      name="radio-multiline-group-2"
      value="two"
      :disabled="disabled"
      :required="required"
      :selected="selectedValue"
      @change="newValue => changeValue(newValue)"
    />
    <span
      id="radio-multiline-error"
      class="block col-span-2 mt-1 text-sm font-medium text-negative-600 font-body"
      :class="{'hidden': !isInvalid }"
    >Error message</span>
  </fieldset>
</template>

<script>
import { computed, ref } from '@vue/composition-api';
import RadioMultiline from './RadioMultiline.vue';
export default {
  name: 'RadioGroupMultiline',
  components: {
    RadioMultiline
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
  setup() {
    const selectedValue = ref('');
    const changeValue = (value) => {
       selectedValue.value = value;
    };

    const isInvalid = computed(() => selectedValue.value === '');

    return {
      changeValue,
      selectedValue,
      isInvalid
    };
  }
};
</script>
