import SfCarousel from "../SfCarousel/SfCarousel.vue";
import SfBanner from "../../molecules/SfBanner/SfBanner.vue";

export default {
  name: "SfHero",
  data() {
    return {
      carouselOptions: {
        perView: 1,
        autoplay: 500,
        breakpoints: {
          768: {} // to overwrite the default carousel behavior
        }
      }
    };
  },
  props: {
    banners: {
      type: Array,
      default: () => []
    }
  },
  components: {
    SfCarousel,
    SfBanner
  }
};
