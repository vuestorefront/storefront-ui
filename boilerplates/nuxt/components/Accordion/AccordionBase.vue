<template>
  <div class="flex flex-col w-full font-body">
    <ButtonBase
      type="secondary"
      size="large"
      class="relative h-11 group normal-case !text-gray-900 border-none !rounded-none !shadow-none hover:shadow-none hover:!text-primary-600 hover:bg-gray-100 active:!text-gray-900 p-4 !justify-between"
      :aria-expanded="expanded"
      :aria-controls="'content-' + uid"
      @click="$emit('toggle')"
    >
      <span
        class="absolute"
        :class="{
          'left-12': chevronLeft,
          'text-2xl font-bold': headerSize === 'xl',
          'text-lg font-bold': headerSize === 'bold',
          'text-lg font-medium': headerSize === 'lg',
          'text-base font-medium': headerSize === 'base',
        }"
      >
        {{ buttonText }}
      </span>
      <slot name="header" v-bind="{ expanded, chevronLeft }">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute right-[10px] w-6 h-6 transition-transform fill-gray-500 group-hover:fill-primary-600 group-active:fill-gray-500"
          :class="{'rotate-180': expanded, 'left-4': chevronLeft}"
        >
          <path d="M11.2407 15.1143C11.6398 15.5798 12.3601 15.5798 12.7592 15.1143L16.585 10.6508C17.141 10.0021 16.6801 9 15.8257 9H8.17417C7.31982 9 6.85891 10.0021 7.41492 10.6508L11.2407 15.1143Z" />
        </svg>
      </slot>
    </ButtonBase>
    <div
      :id="'content-' + uid"
      class="px-4 py-2 text-gray-500"
      :class="{ 'hidden': !expanded }"
    >
      <slot v-bind="{ expanded }" />
    </div>
  </div>
</template>

<script>
import { getCurrentInstance, ref, onMounted } from '@nuxtjs/composition-api';
import ButtonBase from '../Button/ButtonBase.vue';

export default {
  name: 'AccordionBase',
  components: {
    ButtonBase
  },
  props: {
    expanded: {
      type: Boolean,
      default: true
    },
    buttonText: {
      type: String,
      default: ''
    },
    chevronLeft: {
      type: Boolean,
      default: false
    },
    headerSize: {
      type: String,
      default: 'lg',
      validator(value) {
        return [
          'base',
          'lg',
          'bold',
          'xl'
        ].includes(value);
      }
    }
  },
  setup() {
    const uid = ref(null);

    onMounted(() => {
      uid.value = getCurrentInstance().uid;
    });

    return {
      uid
    };
  }
};
</script>
