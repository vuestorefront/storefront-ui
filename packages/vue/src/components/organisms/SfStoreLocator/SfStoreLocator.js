import SfImage from "@/components/molecules/SfImage/SfImage.vue";
import SfDivider from "@/components/atoms/SfDivider/SfDivider.vue";
import SfIcon from "@/components/atoms/SfIcon/SfIcon.vue";
import Vue from "vue";

export default {
  name: "SfStoreLocator",
  props: {
    tileServerUrl: {
      type: String,
      default: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
    },
    center: {
      type: [Array, Object],
      default: () => [0, 0]
    },
    zoom: {
      type: Number,
      default: 6
    },
    stores: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      loaded: false
    };
  },
  async mounted() {
    const { LMap, LTileLayer, LMarker, LIcon } = await import("vue2-leaflet");
    Vue.component("l-map", LMap);
    Vue.component("l-tilelayer", LTileLayer);
    Vue.component("l-marker", LMarker);
    Vue.component("l-icon", LIcon);
    this.loaded = true;
  },
  components: {
    SfImage,
    SfDivider,
    SfIcon
  }
};
