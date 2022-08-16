<template>
  <div class="p-4 border border-gray-200 rounded-md">
    <span class="block text-base font-medium leading-6 text-gray-900 font-body">
      {{ title }}
    </span>
    <div class="medium:flex medium:justify-end medium:items-center">
      <div class="flex items-center mb-2 mr-auto justify-self-start medium:mb-0">
        <RatingBase
          :value="value"
          :max="max"
          :reviews="reviews"
        />
        <span class="ml-4 text-xs font-normal leading-4 text-gray-500 font-body">{{ time }}</span>
      </div>
      <span class="text-xs font-normal leading-4 font-body">{{ user }}</span>
      <TagIconLeft
        v-if="verified"
        class="ml-4"
        label="Verified purchaser"
        type="positive"
      >
        <!-- eslint-disable max-len -->
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.00023 16.1702L4.53485 12.7048C4.1453 12.3152 3.51367 12.3145 3.12274 12.7027C2.72986 13.0928 2.72834 13.7283 3.11984 14.1198L7.29313 18.2931C7.68365 18.6836 8.31682 18.6836 8.70734 18.2931L19.2951 7.70535C19.6845 7.3159 19.6845 6.68447 19.2951 6.29502C18.9057 5.9057 18.2746 5.90555 17.8851 6.29469L8.00023 16.1702Z" />
          <path d="M8.00023 16.1702L4.53485 12.7048C4.1453 12.3152 3.51367 12.3145 3.12274 12.7027C2.72986 13.0928 2.72834 13.7283 3.11984 14.1198L7.29313 18.2931C7.68365 18.6836 8.31682 18.6836 8.70734 18.2931L19.2951 7.70535C19.6845 7.3159 19.6845 6.68447 19.2951 6.29502C18.9057 5.9057 18.2746 5.90555 17.8851 6.29469L8.00023 16.1702Z" />
          <path d="M8.00023 16.1702L4.53485 12.7048C4.1453 12.3152 3.51367 12.3145 3.12274 12.7027C2.72986 13.0928 2.72834 13.7283 3.11984 14.1198L7.29313 18.2931C7.68365 18.6836 8.31682 18.6836 8.70734 18.2931L19.2951 7.70535C19.6845 7.3159 19.6845 6.68447 19.2951 6.29502C18.9057 5.9057 18.2746 5.90555 17.8851 6.29469L8.00023 16.1702Z" />
          <path d="M8.00023 16.1702L4.53485 12.7048C4.1453 12.3152 3.51367 12.3145 3.12274 12.7027C2.72986 13.0928 2.72834 13.7283 3.11984 14.1198L7.29313 18.2931C7.68365 18.6836 8.31682 18.6836 8.70734 18.2931L19.2951 7.70535C19.6845 7.3159 19.6845 6.68447 19.2951 6.29502C18.9057 5.9057 18.2746 5.90555 17.8851 6.29469L8.00023 16.1702Z" />
        </svg>
        <!-- eslint-enable max-len -->
      </TagIconLeft>
    </div>
    <span
      class="block my-2 text-sm font-normal leading-5 text-gray-900 font-body"
    >
      {{ textTooLong ? text : shortenText }}
    </span>
    <button
      v-if="readMoreVisible"
      class="mb-2 text-sm font-normal leading-5 text-gray-900 underline font-body"
      @click="textTooLong = true; readMoreVisible = false"
    >
      Read more
    </button>
    <div class="flex">
      <button
        class="inline-flex items-center mr-4 text-sm font-normal leading-5 text-gray-500"
        :aria-label="`Current likes - ${likesCounter} for ${title}. Click to increment`"
        @click="likesCounter++"
      >
        <!-- eslint-disable max-len -->
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="mr-1"
        >
          <path d="M24.2577 14.7509C24.1743 14.4592 24.0327 14.1842 23.841 13.9509C23.6493 13.7176 23.3993 13.5259 23.1327 13.3926C22.8577 13.2592 22.5577 13.1842 22.2243 13.1759H17.9993V10.6092C17.9993 10.3259 17.941 10.0509 17.8243 9.78423C17.7077 9.5259 17.5493 9.29256 17.3493 9.09256C17.141 8.89256 16.9077 8.74256 16.641 8.64256C16.3743 8.54256 16.091 8.49256 15.8493 8.5009C15.4827 8.5009 15.1327 8.58423 14.816 8.76756C14.4993 8.94256 14.2327 9.2009 14.0493 9.5009L11.566 13.5009H9.08268C8.70768 13.5009 8.34102 13.6592 8.07435 13.9259C7.80768 14.1926 7.66602 14.5509 7.66602 14.9259V21.2342C7.66602 21.6092 7.80768 21.9676 8.07435 22.2342C8.34102 22.5009 8.70768 22.6592 9.08268 22.6592H11.366C11.366 22.6592 11.4327 22.7176 11.4743 22.7426L12.3077 23.1592C12.741 23.3759 13.2243 23.4926 13.7077 23.4926H21.2743C21.7993 23.4926 22.2993 23.3009 22.691 22.9509C23.0827 22.6009 23.3327 22.1259 23.391 21.6259L24.316 15.6342C24.3577 15.3259 24.341 15.0259 24.2577 14.7342V14.7509ZM9.33268 15.1759H10.9993V21.0092H9.33268V15.1759ZM21.7327 21.4176C21.716 21.5342 21.6577 21.6426 21.5744 21.7259C21.491 21.8009 21.3743 21.8426 21.2577 21.8426H13.6993C13.4743 21.8426 13.2493 21.7926 13.0493 21.6842L12.666 21.4926V14.8926L15.466 10.3759C15.5077 10.3092 15.5577 10.2592 15.6243 10.2259C15.691 10.1926 15.7577 10.1759 15.866 10.1759C15.9243 10.1759 15.9827 10.1759 16.041 10.2009C16.0993 10.2259 16.1493 10.2509 16.191 10.2926C16.2327 10.3342 16.2743 10.3842 16.291 10.4426C16.316 10.5009 16.3243 10.5592 16.3327 10.6176V14.0009C16.3327 14.4592 16.7077 14.8342 17.166 14.8342H22.191C22.2577 14.8342 22.3243 14.8509 22.391 14.8842C22.4577 14.9176 22.5077 14.9592 22.5493 15.0092C22.591 15.0676 22.6243 15.1259 22.6493 15.2009C22.666 15.2676 22.6743 15.3426 22.666 15.4092L21.741 21.4259L21.7327 21.4176Z" fill="#71717A" />
        </svg>
        <!-- eslint-enable max-len -->

        ({{ likesCounter }})
      </button>
      <button
        class="inline-flex items-center text-sm font-normal leading-5 text-gray-500"
        :aria-label="`Current dislikes - ${dislikesCounter} for ${title}. Click to decrement`"
        @click="dislikesCounter++"
      >
        <!-- eslint-disable max-len -->
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="mr-1"
        >
          <path d="M7.7463 17.2417C7.82964 17.5333 7.9713 17.8083 8.16297 18.0417C8.35464 18.275 8.60464 18.4667 8.8713 18.6C9.1463 18.7333 9.4463 18.8083 9.77964 18.8167L14.0046 18.8167L14.0046 21.3833C14.0046 21.6667 14.063 21.9417 14.1796 22.2083C14.2963 22.4667 14.4546 22.7 14.6546 22.9C14.863 23.1 15.0963 23.25 15.363 23.35C15.6296 23.45 15.913 23.5 16.1546 23.4917C16.5213 23.4917 16.8713 23.4083 17.188 23.225C17.5046 23.05 17.7713 22.7917 17.9546 22.4917L20.438 18.4917L22.9213 18.4917C23.2963 18.4917 23.663 18.3333 23.9296 18.0667C24.1963 17.8 24.338 17.4417 24.338 17.0667L24.338 10.7583C24.338 10.3833 24.1963 10.025 23.9296 9.75834C23.663 9.49167 23.2963 9.33333 22.9213 9.33333L20.638 9.33333C20.638 9.33333 20.5713 9.275 20.5296 9.25L19.6963 8.83333C19.263 8.61667 18.7796 8.5 18.2963 8.5L10.7296 8.5C10.2046 8.5 9.70464 8.69167 9.31297 9.04167C8.9213 9.39167 8.6713 9.86667 8.61297 10.3667L7.68797 16.3583C7.6463 16.6667 7.66297 16.9667 7.7463 17.2583L7.7463 17.2417ZM22.6713 16.8167L21.0046 16.8167L21.0046 10.9833L22.6713 10.9833L22.6713 16.8167ZM10.2713 10.575C10.288 10.4583 10.3463 10.35 10.4296 10.2667C10.513 10.1917 10.6296 10.15 10.7463 10.15L18.3046 10.15C18.5296 10.15 18.7546 10.2 18.9546 10.3083L19.338 10.5L19.338 17.1L16.538 21.6167C16.4963 21.6833 16.4463 21.7333 16.3796 21.7667C16.313 21.8 16.2463 21.8167 16.138 21.8167C16.0796 21.8167 16.0213 21.8167 15.963 21.7917C15.9046 21.7667 15.8546 21.7417 15.813 21.7C15.7713 21.6583 15.7296 21.6083 15.713 21.55C15.688 21.4917 15.6796 21.4333 15.6713 21.375L15.6713 17.9917C15.6713 17.5333 15.2963 17.1583 14.838 17.1583L9.81297 17.1583C9.7463 17.1583 9.67964 17.1417 9.61297 17.1083C9.5463 17.075 9.4963 17.0333 9.45464 16.9833C9.41297 16.925 9.37964 16.8667 9.35464 16.7917C9.33797 16.725 9.32964 16.65 9.33797 16.5833L10.263 10.5667L10.2713 10.575Z" fill="#71717A" />
        </svg>
        <!-- eslint-enable max-len -->

        ({{ dislikesCounter }})
      </button>
      <button class="ml-auto text-sm font-normal leading-5 text-gray-500 justify-self-end">
        Report abuse
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from '@vue/composition-api';
import RatingBase from './Rating/RatingBase/RatingBase.vue';
import TagIconLeft from './Tag/TagIconLeft/TagIconLeft.vue';

export default {
  name: 'CustomerReview',
  components: {
    RatingBase,
    TagIconLeft,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    value: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 5,
    },
    reviews: {
      type: Number,
      default: 0,
    },
    time: {
      type: String,
      default: '',
    },
    user: {
      type: String,
      default: '',
    },
    verified: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '',
    },
    likes: {
      type: Number,
      default: 0,
    },
    dislikes: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const textTooLong = ref(false);
    const readMoreVisible = ref(false);
    const likesCounter = ref(props.likes);
    const dislikesCounter = ref(props.dislikes);
    const shortenText = computed(() => {
      if (props.text.length <= 740) {
        return props.text;
      }
      return `${props.text.substring(0, 740)}...`;
    });

    watch(shortenText, () => {
      if (props.text.length > 740) { readMoreVisible.value = true; }
    }, { immediate: true });

    return {
      textTooLong,
      likesCounter,
      dislikesCounter,
      shortenText,
      readMoreVisible,
    };
  },
};
</script>
