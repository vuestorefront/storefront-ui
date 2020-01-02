<template>
  <section class="sf-review">
    <!-- @slot Review author. Slot content will replace default <div> tag (bind 'author' string). -->
    <slot name="author" v-bind="{ author }">
      <div class="sf-review__author">{{ author }}</div>
    </slot>
    <!-- @slot Review information. Slot content will replace default <div> tag and its inner <div> tags (bind 'rating' boolean|number, 'maxRating' number, 'date' string). -->
    <slot name="info" v-bind="{ rating, maxRating, date }">
      <div class="sf-review__info">
        <div :class="{ 'sf-review__rating': rating > 0 && maxRating > 0 }">
          <SfRating v-if="rating" :max="maxRating" :score="rating" />
        </div>
        <div
          class="sf-review__date"
          :class="[
            rating > 0 && maxRating > 0
              ? 'sf-review__display-inline-block sf-review__margin-left'
              : ''
          ]"
        >
          {{ date }}
        </div>
      </div>
    </slot>
    <!-- @slot Review message. Slot content will replace default <div> tag and its inner <span> and <a> tags (bind 'finalMessage' computed property, 'buttonText' computed property). -->
    <slot name="message" v-bind="{ finalMessage, buttonText }">
      <div v-if="message">
        <span class="sf-review__message">{{ finalMessage }} &nbsp;</span>
        <button
          v-if="showButton"
          class="sf-review__message_read_more"
          @click="toggleMessage"
        >
          {{ buttonText }}
        </button>
      </div>
    </slot>
  </section>
</template>
<script>
import SfRating from "../../atoms/SfRating/SfRating.vue";
export default {
  name: "SfReview",
  components: {
    SfRating
  },
  props: {
    /**
     * Author of the review
     */
    author: {
      type: String,
      default: ""
    },
    /**
     * Date of the review
     */
    date: {
      type: String,
      default: ""
    },
    /**
     * Message from the reviewer
     */
    message: {
      type: String,
      default: ""
    },
    /**
     * Rating from the reviewer
     */
    rating: {
      type: [Number, String, Boolean],
      default: false
    },
    /**
     * Max rating for the review
     */
    maxRating: {
      type: [Number, String],
      default: 5
    },
    /**
     * Char limit for the review
     */
    charLimit: {
      type: [Number, String],
      default: 250
    },
    /**
     * Read more text for the review
     */
    readMoreText: {
      type: String,
      default: "Read more"
    },
    /**
     * Hide full text message for the review
     */
    hideFullText: {
      type: String,
      default: "Read less"
    }
  },
  data() {
    return {
      isOpen: false
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
    }
  },
  methods: {
    toggleMessage() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfReview.scss";
</style>
