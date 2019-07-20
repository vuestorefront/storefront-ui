import SfCircleIcon from "../../atoms/SfCircleIcon/SfCircleIcon.vue";
import SfIcon from "@/components/atoms/SfIcon/SfIcon.vue";
import Vue from 'vue';

export default {
  name: "SfStoreLocator",
  props: {
    tileServerUrl: {
      type: String,
      default: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    },
    center: {
      type: [Array, Object],
      default: [0,0]
    },
    zoom: {
      type: Number,
      default: 6
    }
  },
  data () {
    return {
      loaded: false
    }
  },
  async mounted() {
    const { LMap, LTileLayer } = await import('vue2-leaflet')
    Vue.component('l-map', LMap)
    Vue.component('l-tilelayer', LTileLayer)
    console.log(LMap)
    this.loaded = true;
  },
  components: {
    SfCircleIcon,
    SfIcon
  }
};
