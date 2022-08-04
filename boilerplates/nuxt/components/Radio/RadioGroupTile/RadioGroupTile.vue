<template>
  <fieldset
    aria-required="true"
    aria-invalid="true"
    aria-describedby="radio-tile-error"
    role="radiogroup"
    class="flex flex-col"
  >
    <RadioTile
      id="radio-5"
      name="radio-tile-group-1"
      :invalid="isInvalid"
      value="one"
      :disabled="disabled"
      :required="required"
      :selected="selectedValue"
      @change="newValue => changeValue(newValue)"
    />
    <RadioTile
      id="radio-6"
      name="radio-tile-group-2"
      value="two"
      :disabled="disabled"
      :required="required"
      :selected="selectedValue"
      @change="newValue => changeValue(newValue)"
    />
    <span
      id="radio-tile-error"
      class="block col-span-2 mt-1 text-sm font-medium text-negative-600 font-body"
      :class="{'hidden': !isInvalid }"
    >{{ errorMessage }}</span>
  </fieldset>
</template>

<script>
import { computed, ref } from '@vue/composition-api';
import RadioTile from '../RadioTile/RadioTile.vue';
export default {
  name: 'RadioGroupTile',
  components: {
    RadioTile
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: 'Error message'
    },
    selected: {
      type: String,
      default: 'one'
    }
  },
  setup(props) {
    const selectedValue = ref(props.selected);
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
