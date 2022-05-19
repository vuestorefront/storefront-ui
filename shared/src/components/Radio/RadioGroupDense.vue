<template>
  <fieldset
    aria-required="true"
    aria-invalid="true"
    aria-describedby="radio-dense-error"
    role="radiogroup"
    class="flex flex-col"
  >
    <RadioDense
      id="radio-9"
      name="radio-dense-group-1"
      :invalid="isInvalid"
      value="one"
      :disabled="disabled"
      :required="required"
      :selected="selectedValue"
      @change="newValue => changeValue(newValue)"
    />
    <RadioDense
      id="radio-10"
      name="radio-dense-group-2"
      value="two"
      :disabled="disabled"
      :required="required"
      :selected="selectedValue"
      @change="newValue => changeValue(newValue)"
    />
    <span
      id="radio-dense-error"
      class="block col-span-2 mt-1 text-sm font-medium text-negative-600 font-body"
      :class="{'hidden': !isInvalid }"
    >Error message</span>
  </fieldset>
</template>

<script>
import { computed, ref } from '@vue/composition-api';
import RadioDense from './RadioDense.vue';
export default {
  name: 'RadioGroupDense',
  components: {
    RadioDense
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
