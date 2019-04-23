import SfPrice from "@/components/atoms/SfPrice/SfPrice.vue";
import SfRating from "@/components/atoms/SfRating/SfRating.vue";

export default {
  name: "SfProductCard",
  props: {
    title: {
      type: String,
      required: true
    },
    rating: {
      type: [Object, Boolean],
      default: false
    },
    price: {
      type: [Object, Boolean],
      default: false
    }
  },
  components: {
    SfPrice,
    SfRating
  }
};
