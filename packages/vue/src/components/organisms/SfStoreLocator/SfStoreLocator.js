import SfImage from "@/components/molecules/SfImage/SfImage.vue";
import SfDivider from "@/components/atoms/SfDivider/SfDivider.vue";
import SfIcon from "@/components/atoms/SfIcon/SfIcon.vue";
import Vue from "vue";

export default {
  name: "SfStoreLocator",
  props: {
    tileServerUrl: {
      type: String,
      default:
        "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
    },
    tileServerAttribution: {
      type: String,
      default: "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
    },
    center: {
      type: [Array, Object],
      default: () => [0, 0]
    },
    zoom: {
      type: Number,
      default: 6
    },
    maxZoom: {
      type: Number,
      default: 16
    },
    stores: {
      type: Array,
      default: () => []
    },
    markerIconSize: {
      type: Array,
      default: () => [21, 28]
    },
    markerIconAnchor: {
      type: Array,
      default: () => [10.5, 0]
    },
    mapOptions: {
      type: Object,
      default: () => ({})
    },
    tileLayerOptions: {
      type: Object,
      default: () => ({})
    },
    markerOptions: {
      type: Object,
      default: () => ({})
    },
    flyToStoreZoom: {
      type: Number,
      default: 15
    }
  },
  data() {
    return {
      loaded: false,
      userPosition: null
    };
  },
  computed: {
    parsedStores() {
      if (this.userPosition) {
        return this.stores.map(s => {
          let distance = undefined;
          if (s.latlng.length === 2) {
            distance = this.getGeoDistance(this.userPosition, {
              lat: s.latlng[0],
              lng: s.latlng[1]
            });
            distance = distance / 1000;
            distance = Math.round(distance * 100) / 100;
          }
          return {
            ...s,
            distance
          };
        });
      }
      return this.stores;
    }
  },
  methods: {
    mapReady(mapObject) {
      mapObject.locate({ timeout: 20000 });
    },
    locationFound(location) {
      this.userPosition = { ...location.latlng };
      this.$emit("update:center", { ...location.latlng });
    },
    locationError(error) {
      console.error(error);
    },
    getGeoDistance(start, end) {
      const deg2rad = deg => deg * (Math.PI / 180);
      const R = 6371;
      const dLat = deg2rad(end.lat - start.lat);
      const dLng = deg2rad(end.lng - start.lng);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(start.lat)) *
          Math.cos(deg2rad(end.lat)) *
          Math.sin(dLng / 2) *
          Math.sin(dLng / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c * 1000;
    },
    centerOn(store) {
      this.$refs.map.mapObject.flyTo(store.latlng, this.flyToStoreZoom);
    }
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
