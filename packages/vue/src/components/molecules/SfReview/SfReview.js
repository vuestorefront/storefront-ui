import SfRating from "../../atoms/SfRating/SfRating.vue";

export default {
  name: "SfReview",
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
  methods: {
    toggleMessage() {
      this.isOpen = !this.isOpen;
    }
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
  components: {
    SfRating
  }
};
