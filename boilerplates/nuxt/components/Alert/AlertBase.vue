<template>
  <div
    role="alert"
    class="flex flex-wrap justify-between w-[360px] min-h-[56px] pl-4 pr-4 pt-3.5 pb-3.5 rounded-md shadow-medium border"
    :class="{
      'bg-secondary-100 border-secondary-400': type === 'info',
      'bg-primary-100 border-primary-400': type === 'positive',
      'bg-warning-100 border-warning-500': type === 'warning',
      'bg-negative-100 border-negative-400': type === 'error',
    }"
  >
    <div class="flex gap-2">
      <slot name="icon">
        <svg
          aria-hidden="true"
          class="w-6 h-6"
          :class="{
            'fill-secondary-800': type === 'info',
            'fill-primary-600': type === 'positive',
            'fill-warning-700': type === 'warning',
            'fill-negative-700': type === 'error',
            'hidden': !icon
          }"
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
      </slot>
      <div class="flex flex-col flex-shrink text-gray-900 font-body">
        <span class="text-lg font-medium">{{ header }}</span>
        <span class="text-base font-normal leading-6">{{ description }}</span>
      </div>
    </div>
    <slot name="button">
      <button
        class="w-6 h-6"
        :class="{'hidden': persistent }"
        @click="close"
      >
        <svg
          aria-hidden="true"
          class="w-6 h-6"
          :class="{
            'fill-secondary-800': type === 'info',
            'fill-primary-600': type === 'positive',
            'fill-warning-700': type === 'warning',
            'fill-negative-700': type === 'error',
          }"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.2947 7.11511C18.6841 6.72575 18.6841 6.09447 18.2947 5.70511C17.9054 5.31575 17.2741 5.31575 16.8847 5.70511L11.9997 10.5901L7.11474 5.70511C6.72538 5.31575 6.0941 5.31575 5.70474 5.70511C5.31538 6.09447 5.31538 6.72575 5.70474 7.11511L10.5897 12.0001L5.70474 16.8851C5.31538 17.2745 5.31538 17.9057 5.70474 18.2951C6.0941 18.6845 6.72538 18.6845 7.11474 18.2951L11.9997 13.4101L16.8847 18.2951C17.2741 18.6845 17.9054 18.6845 18.2947 18.2951C18.6841 17.9057 18.6841 17.2745 18.2947 16.8851L13.4097 12.0001L18.2947 7.11511Z" />
          <path d="M18.2947 7.11511C18.6841 6.72575 18.6841 6.09447 18.2947 5.70511C17.9054 5.31575 17.2741 5.31575 16.8847 5.70511L11.9997 10.5901L7.11474 5.70511C6.72538 5.31575 6.0941 5.31575 5.70474 5.70511C5.31538 6.09447 5.31538 6.72575 5.70474 7.11511L10.5897 12.0001L5.70474 16.8851C5.31538 17.2745 5.31538 17.9057 5.70474 18.2951C6.0941 18.6845 6.72538 18.6845 7.11474 18.2951L11.9997 13.4101L16.8847 18.2951C17.2741 18.6845 17.9054 18.6845 18.2947 18.2951C18.6841 17.9057 18.6841 17.2745 18.2947 16.8851L13.4097 12.0001L18.2947 7.11511Z" />
        </svg>
      </button>
    </slot>
  </div>
</template>

<script>

export default {
  name: 'AlertMultiline',
  props: {
    type: {
      type: String,
      default: 'info'
    },
    persistent: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean,
      default: true
    },
    header: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
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
