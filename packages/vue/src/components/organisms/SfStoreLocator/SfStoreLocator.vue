<template>
  <div class="sf-store-locator">
    <div class="sf-store-locator__title" tabindex="0">
      Found stores: <span>{{ stores.length }}</span>
    </div>
    <div class="sf-store-locator__wrapper">
      <div class="sf-store-locator__list">
        <!-- @slot Use this slot to show stores cards -->
        <slot
          :center-on="centerOn"
          :register-store="registerStore"
          :remove-store="removeStore"
          :user-position="userPosition"
          :calculate-distance="getGeoDistance"
        ></slot>
      </div>
      <div class="sf-store-locator__map-wrapper">
        <l-map
          v-if="loaded"
          ref="map"
          class="sf-store-locator__map-wrapper-map"
          :options="computedMapOptions"
          :center.sync="internalCenter"
          :zoom.sync="internalZoom"
          :max-zoom="maxZoom"
          @ready="onMapReady"
          @locationfound="locationFound"
          @locationerror="locationError"
        >
          <l-tilelayer
            v-bind="tileLayerOptions"
            :url="tileServerUrl"
            :attribution="tileServerAttribution"
          />
          <l-control-zoom position="topleft" />
          <l-control
            position="topleft"
            class="leaflet-bar leaflet-control leaflet-control-zoom-in sf-store-locator__map-wrapper-map-my-location-btn"
          >
            <a
              title="center on user position"
              role="button"
              aria-label="center on user position"
              href="#"
              @click.prevent="locateUser"
            >
              <sf-icon icon="home" />
            </a>
          </l-control>
          <l-marker
            v-for="(store, index) in stores"
            :key="index"
            :lat-lng="store.latlng"
            v-bind="markerOptions"
          >
            <l-icon :icon-size="markerIconSize" :icon-anchor="markerIconAnchor">
              <!-- @slot Use this slot to change the icon of the stores, remember to update `markerIconSize` and `markerIconAnchor` accordingly-->
              <slot name="marker-icon">
                <sf-icon
                  :aria-label="`${store.name} located at ${store.address}`"
                  icon="marker"
                />
              </slot>
            </l-icon>
          </l-marker>
        </l-map>
        <!-- @slot Use this slot to customise the loading indicator while the map librry loads -->
        <slot
          v-if="!mapReady"
          name="map-loading"
          class="sf-store-locator-map-wrapper-loading"
        >
          <sf-loader />
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfLoader from "../../atoms/SfLoader/SfLoader.vue";
import SfStore from "./_internal/SfStore.vue";
Vue.component("SfStore", SfStore);
export default {
  name: "SfStoreLocator",
  provide() {
    const locatorData = {};
    Object.defineProperty(locatorData, "userPosition", {
      enumerable: true,
      get: () => this.userPosition
    });
    return {
      registerStore: this.registerStore,
      removeStore: this.removeStore,
      centerOn: this.centerOn,
      getGeoDistance: this.getGeoDistance,
      locatorData
    };
  },
  components: {
    SfIcon,
    SfLoader
  },
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
      mapReady: false,
      stores: []
    };
  },
  computed: {
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
  mounted() {
    Promise.all([
      import("vue2-leaflet"),
      import("leaflet/dist/leaflet.css")
    ]).then(
      ([{ LMap, LTileLayer, LMarker, LIcon, LControl, LControlZoom }]) => {
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
      }
    );
  },
  methods: {
    latLngEquality(a, b) {
      return a.latlng[0] === b.latlng[0] && a.latlng[1] === b.latlng[1];
    },
    registerStore(store) {
      if (!this.stores.some(s => this.latLngEquality(store, s))) {
        this.stores = [...this.stores, store];
      }
    },
    removeStore(store) {
      this.stores = this.stores.filter(s => !this.latLngEquality(s, store));
    },
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
    centerOn(latlng) {
      this.$refs.map.mapObject.flyTo(latlng, this.flyToStoreZoom);
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
      let distance = R * c * 1000;
      distance = distance / 1000;
      return Math.round(distance * 100) / 100;
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfStoreLocator.scss";
</style>
