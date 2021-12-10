<template>
  <section class="sf-review">
    <slot name="author" v-bind="{ author }">
      <div class="sf-review__author">
        <slot name="icon">
          <SfIcon class="sf-review__icon">
            <svg viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.4544 1.14319L12.7481 2.62068L14.6831 1.79943C14.9962 1.66724 15.3581 1.83786 15.4575 2.1613L16.0481 4.06536L18.1472 4.10286C18.4866 4.10849 18.7518 4.40941 18.7097 4.74693L18.4762 6.7288L20.3794 7.61661C20.6672 7.75161 20.7919 8.09474 20.6569 8.38254C20.3972 8.91974 19.9275 9.61254 19.6097 10.146L20.9878 11.7332C21.21 11.9901 21.1603 12.3876 20.8837 12.5826L19.2553 13.7329L19.8684 15.742C19.9678 16.0701 19.7615 16.4085 19.4278 16.4741L17.475 16.8632L17.2191 18.9473C17.175 19.3045 16.8178 19.5351 16.4765 19.4301L14.5725 18.9979L13.4906 20.797C13.3153 21.0895 12.9234 21.1673 12.6506 20.9629L11.0512 19.7694L9.3309 20.9732C9.04871 21.1701 8.66528 21.0782 8.49745 20.781L7.52432 19.0429L5.45994 19.4441C5.10932 19.5107 4.78681 19.2482 4.77462 18.8947L4.59649 16.9447L2.55088 16.4722C2.2162 16.3954 2.02494 16.0476 2.13275 15.7241L2.77401 13.836L1.09681 12.5713C0.80807 12.3529 0.789326 11.9282 1.05369 11.6854L2.37556 10.2557L1.35743 8.41819C1.19056 8.11819 1.32181 7.74225 1.63588 7.60725L3.46494 6.82164L3.28307 4.72819C3.25213 4.36725 3.56056 4.06819 3.91681 4.10287L5.85933 4.12912L6.54371 2.14257C6.65996 1.80508 7.04809 1.65508 7.3612 1.81912L9.14245 2.64131L10.575 1.10663C10.8178 0.846016 11.2322 0.866632 11.4515 1.14319H11.4544ZM6.27084 11.2194C5.5049 10.4534 6.66929 9.2881 7.43616 10.054L10.0162 12.634L14.5339 7.62596C15.2567 6.82251 16.4792 7.92315 15.7564 8.72657L10.6845 14.3479C10.377 14.7257 9.8089 14.7566 9.46296 14.4107L6.26976 11.2184L6.27084 11.2194Z"
              />
            </svg>
          </SfIcon>
        </slot>
        {{ author }}
      </div>
    </slot>
    <slot name="info" v-bind="{ rating, maxRating, date }">
      <div class="sf-review__info">
        <div :class="{ 'sf-review__rating': rating > 0 && maxRating > 0 }">
          <SfRating v-if="rating" :max="maxRating" :score="rating" />
        </div>
        <div class="sf-review__date">
          {{ date }}
        </div>
      </div>
    </slot>
    <slot name="message" v-bind="{ finalMessage, buttonText }">
      <div :class="{ 'display-none': !message }">
        <p class="sf-review__message">{{ finalMessage }}</p>
        <SfButton
          :class="{ 'display-none': !showButton }"
          class="sf-button--text sf-review__read-more"
          @click="toggleMessage"
        >
          {{ buttonText }}
        </SfButton>
      </div>
    </slot>
  </section>
</template>
<script>
import SfRating from "../../atoms/SfRating/SfRating.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
export default {
  name: "SfReview",
  components: {
    SfRating,
    SfIcon,
    SfButton,
  },
  props: {
    author: {
      type: String,
      default: "",
    },
    date: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
    rating: {
      type: [Number, String, Boolean],
      default: false,
    },
    maxRating: {
      type: [Number, String],
      default: 5,
    },
    charLimit: {
      type: [Number, String],
      default: 250,
    },
    readMoreText: {
      type: String,
      default: "Read more",
    },
    hideFullText: {
      type: String,
      default: "Read less",
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    showButton() {
      return this.message.length > this.charLimit;
    },
    buttonText() {
      let buttonText = this.readMoreText;
      if (this.isOpen) {
        buttonText = this.hideFullText;
      }
      return buttonText;
    },
    finalMessage() {
      return this.message.length > this.charLimit && !this.isOpen
        ? this.message.slice(0, this.charLimit) + "..."
        : this.message;
    },
  },
  methods: {
    toggleMessage() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfReview.scss";
</style>
