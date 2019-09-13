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
      type: Number,
      required: true
    },
    /**
     * Max rating for the review
     */
    maxRating: {
      type: Number,
      required: true,
      default: 5
    },
    /**
     * Char limit for the review
     */
    charLimit: {
      type: Number,
      required: true,
      default: 250
    },
    /**
     * Read more text for the review
     */
    readMoreText: {
      type: String,
      required: false,
      default: "Read more"
    },
    /**
     * Hide full text message for the review
     */
    hideFullText: {
      type: String,
      required: false,
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
      return this.rating > this.maxRating ? this.maxRating : this.rating;
    },
    finalMessage() {
      return this.message.length > this.charLimit && this.showReadMore
        ? this.message.slice(0, this.charLimit) + "..."
        : this.message;
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
