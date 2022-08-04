<template>
  <div class="2-extra-large:flex 2-extra-large:items-stretch">
    <QuantitySelector
      v-model="quantity"
      class="w-full mb-8 2-extra-large:mb-0 2-extra-large:mr-4 2-extra-large:max-w-[156px]"
      :quantity-in-stock="quantityInStock"
      :min-quantity="minQuantity"
      :disabled="disabled"
      size="lg"
    />
    <ButtonBase class="w-full">
      <svg
        class="mr-2"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M18.2002 22C17.0956 22 16.2002 21.1046 16.2002 20C16.2002 18.8954 17.0956 18 18.2002 18C19.3048 18 20.2002 18.8954 20.2002 20C20.2002 21.1046 19.3048 22 18.2002 22Z" fill="white" />
        <path d="M10.2002 22C9.09563 22 8.2002 21.1046 8.2002 20C8.2002 18.8954 9.09563 18 10.2002 18C11.3048 18 12.2002 18.8954 12.2002 20C12.2002 21.1046 11.3048 22 10.2002 22Z" fill="white" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 3C1.5 2.44772 1.94772 2 2.5 2H4.80673C5.97087 2 6.98094 2.80352 7.24271 3.93785L7.48782 5H20.0788C21.7053 5 22.8987 6.52847 22.5042 8.10634L20.7542 15.1063C20.476 16.2193 19.476 17 18.3288 17H10.1933C9.02913 17 8.01906 16.1965 7.75729 15.0621L5.29393 4.38757C5.24157 4.1607 5.03956 4 4.80673 4H2.5C1.94772 4 1.5 3.55228 1.5 3ZM7.94936 7L9.70607 14.6124C9.75843 14.8393 9.96044 15 10.1933 15H18.3288C18.5583 15 18.7583 14.8439 18.8139 14.6213L20.5639 7.62127C20.6428 7.30569 20.4041 7 20.0788 7H7.94936Z" fill="white" />
      </svg>

      Add to cart
    </ButtonBase>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import QuantitySelector from './QuantitySelector/QuantitySelector.vue';
import ButtonBase from './Button/ButtonBase/ButtonBase.vue';

export default {
  name: 'AddToCart',
  components: {
    QuantitySelector,
    ButtonBase
  },
  props: {
    productQuantity: {
      type: Number,
      default: 1
    },
    quantityInStock: {
      type: Number,
      default: 0
    },
    minQuantity: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const quantity = ref(props.productQuantity);
    return {
      quantity
    };
  }
};
</script>
