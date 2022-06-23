<template>
  <div
    role="alert"
    class="flex flex-wrap items-center justify-between w-[360px] min-h-[56px] pl-4 pr-4 pt-2 pb-2 rounded-md shadow-medium border"
    :class="{
      'bg-secondary-100 border-secondary-400': type === 'info',
      'bg-primary-100 border-primary-400': type === 'positive',
      'bg-warning-100 border-warning-500': type === 'warning',
      'bg-negative-100 border-negative-400': type === 'error',
    }"
  >
    <span class="text-base font-normal leading-6 text-gray-900 font-body">Informative text</span>
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
  </div>
</template>

<script>

export default {
  name: 'AlertSimple',
  props: {
    type: {
      type: String,
      default: 'info'
    },
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
