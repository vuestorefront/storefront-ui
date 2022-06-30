<template>
  <div class="flex flex-col font-body">
    <ButtonSecondaryLarge
      class="group normal-case !text-gray-900 border-none !rounded-none !shadow-none hover:shadow-none hover:!text-primary-600 p-4 !justify-between w-80"
      :aria-expanded="expanded"
      :aria-controls="'content-' + uid"
      @click="$emit('toggle')"
    >
      {{ buttonText }}
      <slot name="header" v-bind="{ expanded }">
        <svg
          class="w-6 h-6 transition-transform fill-gray-500 group-hover:fill-primary-600 group-active:fill-primary-700"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          :class="{'rotate-180': !expanded}"
        >
          <path d="M7.82034 15.0014C7.43065 15.3903 6.79962 15.3899 6.41034 15.0006C6.02077 14.6111 6.02077 13.9794 6.41034 13.5899L10.9979 9.00237C11.3884 8.61184 12.0215 8.61184 12.4121 9.00237L16.9996 13.5899C17.3891 13.9794 17.3891 14.6111 16.9996 15.0006C16.6103 15.3899 15.9793 15.3903 15.5896 15.0014L11.705 11.1253L7.82034 15.0014Z" />
          <path d="M7.82034 15.0014C7.43065 15.3903 6.79962 15.3899 6.41034 15.0006C6.02077 14.6111 6.02077 13.9794 6.41034 13.5899L10.9979 9.00237C11.3884 8.61184 12.0215 8.61184 12.4121 9.00237L16.9996 13.5899C17.3891 13.9794 17.3891 14.6111 16.9996 15.0006C16.6103 15.3899 15.9793 15.3903 15.5896 15.0014L11.705 11.1253L7.82034 15.0014Z" />
        </svg>
      </slot>
    </ButtonSecondaryLarge>
    <div :id="'content-' + uid" class="px-4 py-2 text-gray-500 w-80" :class="{ 'hidden': !expanded }">
      <slot v-bind="{ expanded }" />
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from '@nuxtjs/composition-api';
import ButtonSecondaryLarge from '../Button/Secondary/ButtonSecondaryLarge.vue';

export default {
  name: 'AccordionBase',
  components: {
    ButtonSecondaryLarge
  },
  props: {
    expanded: {
      type: Boolean,
      default: true
    },
    buttonText: {
      type: String,
      default: ''
    }
  },
  setup() {
    const uid = getCurrentInstance().uid;
    return {
      uid
    };
  }
};
</script>
