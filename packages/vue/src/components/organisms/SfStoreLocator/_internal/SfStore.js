import SfImage from "../../../atoms/SfImage/SfImage.vue";
import SfDivider from "../../../atoms/SfDivider/SfDivider.vue";
import SfIcon from "../../../atoms/SfIcon/SfIcon.vue";

export default {
  name: "SfStore",
  inject: [
    "registerStore",
    "removeStore",
    "centerOn",
    "locatorData",
    "getGeoDistance"
  ],
  props: {
    /**
     * Name of the store
     */
    latlng: {
      type: Array,
      default: () => []
    },
    /**
     * Name of the store
     */
    name: {
      type: String,
      default: ""
    },
    /**
     * Url of the picture of the store
     */
    picture: {
      type: String,
      default: null
    },
    /**
     * Address of the store
     */
    address: {
      type: String,
      default: ""
    },
    /**
     * Phone number of the store
     */
    phone: {
      type: String,
      default: null
    },
    /**
     * Email of the store
     */
    email: {
      type: String,
      default: null
    }
  },
  computed: {
    distance() {
      if (this.locatorData && this.locatorData.userPosition) {
        const dictLatLng = {
          lat: this.latlng[0],
          lng: this.latlng[1]
        };
        return this.getGeoDistance(this.locatorData.userPosition, dictLatLng);
      }
      return null;
    }
  },
  created() {
    if (this.registerStore) {
      this.registerStore(this.$props);
    }
  },
  beforeDestroy() {
    if (this.removeStore) {
      this.removeStore(this.$props);
    }
  },
  components: {
    SfImage,
    SfDivider,
    SfIcon
  }
};
