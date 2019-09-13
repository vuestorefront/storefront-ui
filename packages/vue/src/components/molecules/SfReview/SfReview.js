import { SfRating } from "@storefront-ui/vue";

export default {
  name: "SfReview",
  props: {
    /**
     * Author of the review
     */
    author: {
      type: String,
      required: true
    },
    /**
     * Date of the review
     */
    date: {
      type: String,
      required: true
    },
    /**
     * Message from the reviewer
     */
    message: {
      type: String,
      required: true
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
      showReadMore: false,
      showHide: false
    };
  },
  methods: {
    showFullMessage() {
      this.showReadMore = false;
      this.showHide = true;
    },
    hideFullMessage() {
      if (this.message.length > this.charLimit) {
        this.showHide = false;
        this.showReadMore = true;
      } else {
        this.showHide = false;
        this.showReadMore = false;
      }
    }
  },
  computed: {
    finalRating() {
      if (this.rating < 0) {
        return false;
      } else if (this.rating > this.maxRating && this.maxRating > 0) {
        return this.maxRating;
      } else if (this.maxRating <= 0) {
        return false;
      } else {
        return this.rating;
      }
    },
    finalMessage() {
      return this.message.length > this.charLimit && this.showReadMore
        ? this.message.slice(0, this.charLimit) + "..."
        : this.message;
    },
    finalMaxRating() {
      return this.maxRating <= 0 ? 1 : this.maxRating;
    }
  },
  created: function() {
    // It hides full message if needed- default
    this.hideFullMessage();
  },
  components: {
    SfRating
  }
};
