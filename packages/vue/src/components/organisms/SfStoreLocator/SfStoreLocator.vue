<template>
  <div class="sf-store-locator">
    <div class="sf-store-locator__wrapper">
      <div class="sf-store-locator__list">
        <div class="sf-store-locator__stores">
          Stores found: <span>{{ stores.length }}</span>
        </div>
        <slot
          v-bind="{
            centerOn,
            registerStore,
            removeStore,
            userPosition,
            getGeoDistance,
            locateUser,
          }"
        />
      </div>
      <div class="sf-store-locator__map-wrapper">
        <LMap
          v-if="loaded"
          ref="map"
          class="sf-store-locator__map"
          :options="computedMapOptions"
          :center.sync="internalCenter"
          :zoom.sync="internalZoom"
          :max-zoom="maxZoom"
          @ready="onMapReady"
          @locationfound="locationFound"
          @locationerror="locationError"
        >
          <LTileLayer
            v-bind="tileLayerOptions"
            :url="tileServerUrl"
            :attribution="tileServerAttribution"
          />
          <LControlZoom position="topleft" />
          <LMarker
            v-for="(store, index) in stores"
            :key="index"
            :lat-lng="store.latlng"
            v-bind="markerOptions"
          >
            <LIcon :icon-size="markerIconSize" :icon-anchor="markerIconAnchor">
              <slot name="marker-icon">
                <SfIcon
                  v-focus
                  :aria-label="`${store.name} located at ${store.address}`"
                  icon="marker"
                  tabindex="0"
                />
              </slot>
            </LIcon>
          </LMarker>
        </LMap>
        <slot name="map-loading">
          <SfLoader
            :class="{ 'display-none': mapReady }"
            class="sf-store-locator__loader"
          />
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { focus } from "../../../utilities/directives";
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
      get: () => this.userPosition,
    });
    return {
      registerStore: this.registerStore,
      removeStore: this.removeStore,
      centerOn: this.centerOn,
      getGeoDistance: this.getGeoDistance,
      locateUser: this.locateUser,
      locatorData,
    };
  },
  components: {
    SfIcon,
    SfLoader,
  },
  directives: {
    focus,
  },
  props: {
    tileServerUrl: {
      type: String,
      default:
        "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
    },
    tileServerAttribution: {
      type: String,
      default: "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ",
    },
    center: {
      type: [Array, Object],
      default: () => [0, 0],
    },
    zoom: {
      type: Number,
      default: 6,
    },
    maxZoom: {
      type: Number,
      default: 16,
    },
    markerIconSize: {
      type: Array,
      default: () => [21, 28],
    },
    markerIconAnchor: {
      type: Array,
      default: () => [10.5, 0],
    },
    mapOptions: {
      type: Object,
      default: () => ({}),
    },
    tileLayerOptions: {
      type: Object,
      default: () => ({}),
    },
    markerOptions: {
      type: Object,
      default: () => ({}),
    },
    flyToStoreZoom: {
      type: Number,
      default: 15,
    },
  },
  data() {
    return {
      loaded: false,
      userPosition: null,
      mapReady: false,
      stores: [],
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
      },
    },
    internalZoom: {
      get() {
        return this.zoom;
      },
      set(value) {
        this.$emit("update:zoom", value);
      },
    },
  },
  mounted() {
    import("leaflet/dist/leaflet.css");
    import("vue2-leaflet").then(
      ({ LMap, LTileLayer, LMarker, LIcon, LControl, LControlZoom }) => {
        Vue.component("LMap", LMap);
        Vue.component("LTileLayer", LTileLayer);
        Vue.component("LMarker", LMarker);
        Vue.component("LIcon", LIcon);
        Vue.component("LControl", LControl);
        Vue.component("LControlZoom", LControlZoom);
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
      if (!this.stores.some((s) => this.latLngEquality(store, s))) {
        this.stores = [...this.stores, store];
      }
    },
    removeStore(store) {
      this.stores = this.stores.filter((s) => !this.latLngEquality(s, store));
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
      const deg2rad = (deg) => deg * (Math.PI / 180);
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
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfStoreLocator.scss";
</style>
