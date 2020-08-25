<template>
  <section class="sf-review">
    <!-- @slot Review author. Slot content will replace default <div> tag (bind 'author' string). -->
    <slot name="author" v-bind="{ author }">
      <div class="sf-review__author">
        <!-- @slot Review icon. Slot content can be replaced by custom icon. -->
        <slot name="icon">
          <SfIcon class="sf-review__icon">
            <svg viewbox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.303.429l.863.985 1.29-.548a.386.386 0 01.516.241l.394 1.27 1.4.025a.385.385 0 01.374.43l-.155 1.32 1.268.592c.192.09.275.319.185.51-.173.359-.486.82-.698 1.176l.919 1.059a.387.387 0 01-.07.566l-1.085.767.409 1.34a.384.384 0 01-.294.487l-1.302.26-.17 1.389a.386.386 0 01-.496.322l-1.269-.288-.721 1.2a.385.385 0 01-.56.11l-1.067-.796-1.146.803a.384.384 0 01-.556-.128l-.649-1.16-1.376.268a.385.385 0 01-.457-.366l-.119-1.3-1.363-.315a.386.386 0 01-.28-.499l.428-1.259-1.118-.843a.385.385 0 01-.029-.59l.882-.953-.68-1.225a.385.385 0 01.187-.541l1.219-.524-.121-1.395a.387.387 0 01.422-.417l1.295.017.456-1.324a.386.386 0 01.545-.216l1.188.548.955-1.023a.385.385 0 01.584.025h.002zM3.848 7.146c-.511-.51.265-1.287.776-.777l1.72 1.72L9.356 4.75c.482-.535 1.297.199.815.734L6.79 9.232a.55.55 0 01-.814.042l-2.13-2.129.002.001z"
              />
            </svg>
          </SfIcon>
        </slot>
        {{ author }}
      </div>
    </slot>
    <!-- @slot Review information. Slot content will replace default <div> tag and its inner <div> tags (bind 'rating' boolean|number, 'maxRating' number, 'date' string). -->
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
    <!-- @slot Review message. Slot content will replace default <div> tag and its inner <span> and <a> tags (bind 'finalMessage' computed property, 'buttonText' computed property). -->
    <slot name="message" v-bind="{ finalMessage, buttonText }">
      <div v-if="message">
        <p class="sf-review__message">{{ finalMessage }}</p>
        <SfButton
          v-if="showButton"
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
    /**
     * Author of the review
     */
    author: {
      type: String,
      default: "",
    },
    /**
     * Date of the review
     */
    date: {
      type: String,
      default: "",
    },
    /**
     * Message from the reviewer
     */
    message: {
      type: String,
      default: "",
    },
    /**
     * Rating from the reviewer
     */
    rating: {
      type: [Number, String, Boolean],
      default: false,
    },
    /**
     * Max rating for the review
     */
    maxRating: {
      type: [Number, String],
      default: 5,
    },
    /**
     * Char limit for the review
     */
    charLimit: {
      type: [Number, String],
      default: 250,
    },
    /**
     * Read more text for the review
     */
    readMoreText: {
      type: String,
      default: "Read more",
    },
    /**
     * Hide full text message for the review
     */
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
