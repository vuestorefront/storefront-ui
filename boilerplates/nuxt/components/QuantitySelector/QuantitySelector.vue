<template>
  <div class="relative flex flex-col items-center remove-default-styling" :class="quantitySelectorSize">
    <div
      class="flex items-center justify-between border border-gray-300 rounded-md"
      :class="{ 'bg-gray-200 opacity-50 ': disabled }"
    >
      <ButtonBase
        class="rounded-r-none fill-primary-500 disabled:fill-gray-500/50 disabled:pointer-events-none"
        type="tertiary"
        :disabled="quantity === min || disabled"
        aria-controls="quantity-selector"
        aria-label="decrement"
        :aria-disabled="quantity === min || disabled"
        @click.native="Number(quantity -= 1)"
      >
        <svg class="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" />
        </svg>
      </ButtonBase>
      <div class="flex h-full" :class="disabledStyle">
        <input
          id="quantity-selector"
          ref="input"
          v-model.number="quantity"
          v-focus
          :disabled="disabled"
          aria-label="QuantitySelector"
          :aria-valuenow="quantity"
          :aria-valuemin="min"
          :aria-valuemax="qtyInStock"
          :aria-disabled="disabled"
          type="number"
          class="w-full text-center text-gray-900 disabled:bg-gray-200 outline-violet"
        >
      </div>
      <ButtonBase
        class="rounded-l-none fill-primary-500 disabled:fill-gray-500/50 disabled:pointer-events-none"
        type="tertiary"
        :disabled="quantity === qtyInStock || disabled"
        aria-controls="quantity-selector"
        aria-label="increment"
        :aria-disabled="quantity === qtyInStock || disabled"
        @click.native="Number(quantity += 1)"
      >
        <svg class="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 11V5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11Z" />
          <path d="M11 11V5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11Z" />
        </svg>
      </ButtonBase>
    </div>
    <div v-if="!disabled" class="text-xs font-normal font-body">
      <span class="font-medium">
        {{ qtyInStock }}
      </span>
      <span>
        in stock
      </span>
    </div>
    <div v-else class="text-xs font-medium font-body text-negative-600">
      <span>
        Out of stock
      </span>
    </div>
  </div>
</template>

<script>
import { computed, ref, watchEffect } from '@nuxtjs/composition-api';
import ButtonBase from '../Button/ButtonBase.vue';
import { focus } from '../../utils/focus-directive.js';

export default {
  name: 'QuantitySelector',
  components: {
    ButtonBase
  },
  directives: {
    focus
  },
  props: {
    value: {
      type: [Number, String],
      default: 1
    },
    quantityInStock: {
      type: [Number, String],
      default: 5
    },
    minQuantity: {
      type: [Number, String],
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'base',
      validator(value) {
        return [
          'base',
          'lg'
        ].includes(value);
      }
    }
  },
  setup(props, { emit }) {
    const quantitySelectorSize = computed(() => {
      switch (props.size) {
        case 'base':
          return 'quantity-selector-base';
        case 'lg':
          return 'quantity-selector-large';
        default:
          return 'quantity-selector-base';
      }
    });
    const qtyInStock = computed(() => {
      return Number(props.quantityInStock);
    });
    const min = computed(() => {
      return Number(props.minQuantity);
    });
    const disabledState = ref(props.disabled);
    const input = ref(null);
    const disabledStyle = ref({
      'after:content-["-"] after:absolute after:top-[50%] after:-translate-y-1/2 after:left-[50%] after:font-medium after:text-gray-900 after:opacity-40': disabledState.value
    });
    watchEffect(
      () => {
        if (disabledState.value === true) {
          emit('input', '-');
        };
      }
    );
    const quantity = computed({
      get() {
        return Number(props.value);
      },
      set(qty) {
        if (qty > qtyInStock.value) {
          qty = qtyInStock.value;
        } else if (qty < min.value) {
          qty = min.value;
        } else {
          emit('input', qty);
        }
      }
    });
    return {
      quantitySelectorSize,
      quantity,
      qtyInStock,
      min,
      input,
      disabledStyle
    };
  }
};
</script>
<style scoped>
.quantity-selector-base {
  @apply w-40 h-10;
}
.quantity-selector-base button {
  @apply w-10 h-10;
}
.quantity-selector-large {
  @apply w-40 h-12;
  }
.quantity-selector-large button {
  @apply w-12 h-12;
}
</style>
