import SfImage from "@/components/molecules/SfImage/SfImage.vue";
import SfDivider from "@/components/atoms/SfDivider/SfDivider.vue";
import SfIcon from "@/components/atoms/SfIcon/SfIcon.vue";
import SfLoader from "@/components/atoms/SfLoader/SfLoader.vue";

import Vue from "vue";

export default {
  name: "SfStoreLocator",
  props: {
    /**
     * Url of selected tileserver
     */
    tileServerUrl: {
      type: String,
      default:
        "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
    },
    /**
     * Attribution line of selected tileserver
     */
    tileServerAttribution: {
      type: String,
      default: "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
    },
    /**
     * Initial center of the map, overriden when the user position is captured, supports sync modifier
     */
    center: {
      type: [Array, Object],
      default: () => [0, 0]
    },
    /**
     * Initial zoom of the map
     */
    zoom: {
      type: Number,
      default: 6
    },
    /**
     * Max zoom allowed, consider tileserver limitation when setting this
     */
    maxZoom: {
      type: Number,
      default: 16
    },
    /**
     * Array of stores, it must contain an object with at least a \`latlng\` array
     */
    stores: {
      type: Array,
      default: () => [],
      validator: value => {
        return (
          value.length === 0 ||
          value.reduce((a, c) => {
            return (
              a && c.latlng && Array.isArray(c.latlng) && c.latlng.length === 2
            );
          }, true)
        );
      }
    },
    /**
     * Size of the icon [width, height]
     */
    markerIconSize: {
      type: Array,
      default: () => [21, 28]
    },
    /**
     *  Position of the anchor in the icon [x, y]
     */
    markerIconAnchor: {
      type: Array,
      default: () => [10.5, 0]
    },
    /**
     * Options to pass to leaflet map
     */
    mapOptions: {
      type: Object,
      default: () => ({})
    },
    /**
     * Options to pass to leaflet tile-layer
     */
    tileLayerOptions: {
      type: Object,
      default: () => ({})
    },
    /**
     * Options to pass to leaflet marker
     */
    markerOptions: {
      type: Object,
      default: () => ({})
    },
    /**
     * Zoom to be set when centering map on clicked store
     */
    flyToStoreZoom: {
      type: Number,
      default: 15
    }
  },
  data() {
    return {
      loaded: false,
      userPosition: null,
      mapReady: false
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
    },
    computedMapOptions() {
      return { zoomControl: false, ...this.mapOptions };
    },
    internalCenter: {
      get() {
        return this.center;
      },
      set(value) {
        this.updateCenter(value);
      }
    },
    internalZoom: {
      get() {
        return this.zoom;
      },
      set(value) {
        this.$emit("update:zoom", value);
      }
    }
  },
  methods: {
    onMapReady(mapObject) {
      /**
       * Map ready and displayed event
       *
       * @event 'map:ready'
       * @type {object}
       */
      this.mapReady = true;
      this.$emit("map:ready", mapObject);
      this.locateUser();
    },
    locateUser() {
      this.$refs.map.mapObject.locate({ timeout: 20000 });
    },
    locationFound(location) {
      this.userPosition = { ...location.latlng };
      /**
       * Update center with user position event,
       *
       * @event 'update:center'
       * @type {object}
       */
      this.updateCenter({ ...location.latlng });
    },
    locationError(error) {
      /**
       * Location error event.
       *
       * @event 'location:errors'
       * @type {object}
       */
      this.$emit("location:error", error);
    },
    updateCenter(latlng) {
      this.$emit("update:center", { ...latlng });
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
    const {
      LMap,
      LTileLayer,
      LMarker,
      LIcon,
      LControl,
      LControlZoom
    } = await import("vue2-leaflet");
    Vue.component("l-map", LMap);
    Vue.component("l-tilelayer", LTileLayer);
    Vue.component("l-marker", LMarker);
    Vue.component("l-icon", LIcon);
    Vue.component("l-control", LControl);
    Vue.component("l-control-zoom", LControlZoom);
    this.loaded = true;
    /**
     * Library loaded event, the library is ready and the map is initialising
     *
     * @event 'library:loaded'
     * @type null
     */
    this.$emit("library:loaded");
  },
  components: {
    SfImage,
    SfDivider,
    SfIcon,
    SfLoader
  }
};
