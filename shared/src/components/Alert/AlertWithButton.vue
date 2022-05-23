<template>
  <div
    role="alert"
    class="flex flex-wrap items-center justify-between w-[360px] min-h-[56px] pl-4 pr-4 pt-2 pb-2 rounded-md shadow-medium bg-secondary-100 border border-secondary-400"
  >
    <div class="flex items-center gap-2">
      <svg
        aria-hidden="true"
        class="w-6 h-6 fill-secondary-800"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 17C11.4477 17 11 16.5523 11 16V12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17Z" />
        <path d="M12 9.25C12.6904 9.25 13.25 8.69036 13.25 8C13.25 7.30964 12.6904 6.75 12 6.75C11.3096 6.75 10.75 7.30964 10.75 8C10.75 8.69036 11.3096 9.25 12 9.25Z" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12Z"
        />
        <path d="M12 17C11.4477 17 11 16.5523 11 16V12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17Z" />
        <path d="M12 9.25C12.6904 9.25 13.25 8.69036 13.25 8C13.25 7.30964 12.6904 6.75 12 6.75C11.3096 6.75 10.75 7.30964 10.75 8C10.75 8.69036 11.3096 9.25 12 9.25Z" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12Z"
        />
      </svg>
      <span class="text-base font-normal leading-6 text-gray-900 font-body">Informative text</span>
    </div>
    <button
      v-focus
      class="inline-flex items-center justify-center p-2 text-base font-medium bg-transparent rounded-md cursor-pointer text-secondary-800 hover:bg-secondary-200 active:bg-secondary-300 hover:text-secondary-900 active:text-secondary-900 font-body outline-violet"
      :class="{'hidden': persistent }"
      @click="close"
    >
      BUTTON
    </button>
  </div>
</template>

<script>
import { focus } from '../../utils/focus-directive.js';
export default {
  name: 'AlertWithButton',
  directives: {
    focus
  },
  props: {
    persistent: {
      type: Boolean,
      default: false
    }
  },
  setup(_, { emit }) {
    const close = () => {
      emit('close');
    };

    return {
      close
    };
  }
};
</script>
