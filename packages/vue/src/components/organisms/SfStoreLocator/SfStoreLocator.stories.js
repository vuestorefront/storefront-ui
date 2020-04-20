import {
  withKnobs,
  text,
  number,
  select,
  object,
} from "@storybook/addon-knobs";
import { SfStoreLocator, SfImage } from "@storefront-ui/vue";
export default {
  title: "Organisms|StoreLocator",
  decorators: [withKnobs],
};
export const Common = () => ({
  components: { SfStoreLocator },
  props: {
    tileServerUrl: {
      default: select(
        "tileServerUrl",
        {
          default:
            "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
          openstreetmap: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          wikimedia: "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png",
        },
        "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
        "Props"
      ),
    },
    tileServerAttribution: {
      default: text("tileServerAttribution", "", "Props"),
    },
    center: {
      default: object("center", [47.5104387, 19.0444433], "Props"),
    },
    zoom: {
      default: number(
        "zoom",
        6,
        {
          range: true,
          min: 1,
          max: 16,
          step: 1,
        },
        "Props"
      ),
    },
    maxZoom: {
      default: number(
        "maxZoom",
        16,
        {
          range: true,
          min: 1,
          max: 16,
          step: 1,
        },
        "Props"
      ),
    },
    markerIconSize: {
      default: object("markerIconSize", [21, 28], "Props"),
    },
    markerIconAnchor: {
      default: object("markerIconAnchor", [10.5, 0], "Props"),
    },
    mapOptions: {
      default: object("mapOptions", {}, "Props"),
    },
    tileLayerOptions: {
      default: object("tileLayerOptions", {}, "Props"),
    },
    markerOptions: {
      default: object("markerOptions", {}, "Props"),
    },
    flyToStoreZoom: {
      default: number(
        "flyToStoreZoom",
        15,
        {
          range: true,
          min: 1,
          max: 16,
          step: 1,
        },
        "Props"
      ),
    },
  },
  data() {
    return {
      stores: [
        {
          latlng: [47.4968864, 19.0531093],
          address: "Budapest, Deák Ferenc u. 19, 1052",
          phone: "(70) 881 9463",
          email: "example@email.com",
          name: "DivWear",
          picture: {
            mobile: { url: "/assets/storybook/SfStore/storeA.png" },
            desktop: { url: "/assets/storybook/SfStore/storeA.png" },
          },
        },
        {
          latlng: [51.1176696, 17.0183064],
          address: "Romana Dmowskiego",
          phone: "(1) 311 9666",
          email: "example@email.com",
          name: "Divante Wear",
          picture: {
            mobile: { url: "/assets/storybook/SfStore/storeB.png" },
            desktop: { url: "/assets/storybook/SfStore/storeB.png" },
          },
        },
      ],
    };
  },
  template: `<div style="max-width: 1240px;">
      <SfStoreLocator
        :tile-server-url="tileServerUrl"
        :tile-server-attribution="tileServerAttribution"
        :center="center"
        :zoom="zoom"
        :max-zoom="maxZoom"
        :marker-icon-size="markerIconSize"
        :marker-icon-anchor="markerIconAnchor"
        :map-options="mapOptions"
        :tile-layer-options="tileLayerOptions"
        :marker-options="markerOptions"
        :fly-to-store-zoom="flyToStoreZoom"
      >
        <SfStore
          v-for="(store, key) in stores"
          :key="key"
          :latlng="store.latlng"
          :name="store.name"
          :email="store.email"
          :phone="store.phone"
          :address="store.address"
          :picture="store.picture"
        />
      </SfStoreLocator>
    </div>`,
});
export const PropsSfStore = () => ({
  components: { SfStoreLocator },
  props: {
    latlng: {
      default: object("latlng", [47.5104387, 19.0444433], "Props"),
    },
    address: {
      default: text("address", "Budapest, Deák Ferenc u. 19, 1052", "Props"),
    },
    phone: {
      default: text("phone", "(70) 881 9463", "Props"),
    },
    email: {
      default: text("email", "example@email.com", "Props"),
    },
    name: {
      default: text("name", "Divante Wear", "Props"),
    },
    picture: {
      default: object(
        "picture",
        {
          mobile: { url: "/assets/storybook/SfStore/storeA.png" },
          desktop: { url: "/assets/storybook/SfStore/storeA.png" },
        },
        "Props"
      ),
    },
  },
  data() {
    return {
      stores: [
        {
          latlng: [47.4968864, 19.0531093],
          address: "Budapest, Deák Ferenc u. 19, 1052",
          phone: "(70) 881 9463",
          email: "example@email.com",
          name: "Store",
          picture: {
            mobile: { url: "/assets/storybook/SfStore/storeA.png" },
            desktop: { url: "/assets/storybook/SfStore/storeA.png" },
          },
        },
        {
          latlng: [51.1176696, 17.0183064],
          address: "Romana Dmowskiego",
          phone: "(1) 311 9666",
          email: "example@email.com",
          name: "Store",
          picture: {
            mobile: { url: "/assets/storybook/SfStore/storeB.png" },
            desktop: { url: "/assets/storybook/SfStore/storeB.png" },
          },
        },
      ],
    };
  },
  template: `<div style="max-width: 1240px;">
      <SfStoreLocator
        :center="latlng"
    >
      <SfStore
          :latlng="latlng"
          :name="name"
          :email="email"
          :phone="phone"
          :address="address"
          :picture="picture"
      />
    </SfStoreLocator>
  </div>`,
});
PropsSfStore.story = {
  name: "[props] SfStore",
};
export const SlotDefault = () => ({
  components: { SfStoreLocator, SfImage },
  props: {
    tileServerUrl: {
      default: select(
        "tileServerUrl",
        {
          default:
            "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
          openstreetmap: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          wikimedia: "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png",
        },
        "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
        "Props"
      ),
    },
    tileServerAttribution: {
      default: text("tileServerAttribution", "", "Props"),
    },
    center: {
      default: object("center", [47.5104387, 19.0444433], "Props"),
    },
    zoom: {
      default: number(
        "zoom",
        6,
        {
          range: true,
          min: 1,
          max: 16,
          step: 1,
        },
        "Props"
      ),
    },
    maxZoom: {
      default: number(
        "maxZoom",
        16,
        {
          range: true,
          min: 1,
          max: 16,
          step: 1,
        },
        "Props"
      ),
    },
    markerIconSize: {
      default: object("markerIconSize", [21, 28], "Props"),
    },
    markerIconAnchor: {
      default: object("markerIconAnchor", [10.5, 0], "Props"),
    },
    mapOptions: {
      default: object("mapOptions", {}, "Props"),
    },
    tileLayerOptions: {
      default: object("tileLayerOptions", {}, "Props"),
    },
    markerOptions: {
      default: object("markerOptions", {}, "Props"),
    },
    flyToStoreZoom: {
      default: number(
        "flyToStoreZoom",
        15,
        {
          range: true,
          min: 1,
          max: 16,
          step: 1,
        },
        "Props"
      ),
    },
  },
  data() {
    return {
      stores: [
        {
          latlng: [47.4968864, 19.0531093],
          address: "Budapest, Deák Ferenc u. 19, 1052",
          phone: "(70) 881 9463",
          email: "example@email.com",
          name: "DivWear",
          picture: {
            mobile: { url: "/assets/storybook/SfStore/storeA.png" },
            desktop: { url: "/assets/storybook/SfStore/storeA.png" },
          },
        },
        {
          latlng: [51.1176696, 17.0183064],
          address: "Romana Dmowskiego",
          phone: "(1) 311 9666",
          email: "example@email.com",
          name: "Divante Wear",
          picture: {
            mobile: { url: "/assets/storybook/SfStore/storeB.png" },
            desktop: { url: "/assets/storybook/SfStore/storeB.png" },
          },
        },
      ],
    };
  },
  template: `<div style="max-width: 1240px;">
      <SfStoreLocator
        :tile-server-url="tileServerUrl"
        :tile-server-attribution="tileServerAttribution"
        :center="center"
        :zoom="zoom"
        :max-zoom="maxZoom"
        :marker-icon-size="markerIconSize"
        :marker-icon-anchor="markerIconAnchor"
        :map-options="mapOptions"
        :tile-layer-options="tileLayerOptions"
        :marker-options="markerOptions"
        :fly-to-store-zoom="flyToStoreZoom"
        #default="{centerOn, registerStore, removeStore, userPosition, getGeoDistance}"
      >
        <div v-for="(store, key) in stores" :key="key" :style="{padding: '1rem 0'}">
          <!-- This function is provided by SfStoreLocator, so in a custom component it can be used with 'provide' for the sake of the example is not used in the markup. -->
          {{registerStore(store)}}
          <small>{{store.name}}</small>
          <SfImage  @click="centerOn(store.latlng)":src="store.picture" :width="82" :height="112"/>
          <small>* click picture to zoom</small>
        </div>
      </SfStoreLocator>
    </div>`,
});
SlotDefault.story = {
  name: "[slot] default",
};
export const SlotMarkerIcon = () => ({
  components: { SfStoreLocator },
  props: {
    latlng: {
      default: object("latlng", [47.5104387, 19.0444433], "Props"),
    },
    address: {
      default: text("address", "Budapest, Deák Ferenc u. 19, 1052", "Props"),
    },
    phone: {
      default: text("phone", "(70) 881 9463", "Props"),
    },
    email: {
      default: text("email", "example@email.com", "Props"),
    },
    name: {
      default: text("name", "Divante Wear", "Props"),
    },
    picture: {
      default: object(
        "picture",
        {
          mobile: { url: "/assets/storybook/SfStore/storeA.png" },
          desktop: { url: "/assets/storybook/SfStore/storeA.png" },
        },
        "Props"
      ),
    },
  },
  data() {
    return {
      stores: [
        {
          latlng: [47.4968864, 19.0531093],
          address: "Budapest, Deák Ferenc u. 19, 1052",
          phone: "(70) 881 9463",
          email: "example@email.com",
          name: "Store",
          picture: {
            mobile: { url: "/assets/storybook/SfStore/storeA.png" },
            desktop: { url: "/assets/storybook/SfStore/storeA.png" },
          },
        },
        {
          latlng: [51.1176696, 17.0183064],
          address: "Romana Dmowskiego",
          phone: "(1) 311 9666",
          email: "example@email.com",
          name: "Store",
          picture: {
            mobile: { url: "/assets/storybook/SfStore/storeB.png" },
            desktop: { url: "/assets/storybook/SfStore/storeB.png" },
          },
        },
      ],
    };
  },
  template: `<div style="max-width: 1240px;">
      <SfStoreLocator
        :center="latlng"
    >
      <template #marker-icon>
        <span :style="{fontSize: '36px'}">📪</span>
      </template>
      <SfStore
          :latlng="latlng"
          :name="name"
          :email="email"
          :phone="phone"
          :address="address"
          :picture="picture"
      />
    </SfStoreLocator>
    </div>`,
});
SlotMarkerIcon.story = {
  name: "[slot] marker-icon",
};
export const SlotMapLoading = () => ({
  components: { SfStoreLocator },
  props: {
    latlng: {
      default: object("latlng", [47.5104387, 19.0444433], "Props"),
    },
    address: {
      default: text("address", "Budapest, Deák Ferenc u. 19, 1052", "Props"),
    },
    phone: {
      default: text("phone", "(70) 881 9463", "Props"),
    },
    email: {
      default: text("email", "example@email.com", "Props"),
    },
    name: {
      default: text("name", "Divante Wear", "Props"),
    },
    picture: {
      default: object(
        "picture",
        {
          mobile: { url: "/assets/storybook/SfStore/storeA.png" },
          desktop: { url: "/assets/storybook/SfStore/storeA.png" },
        },
        "Props"
      ),
    },
  },
  data() {
    return {
      stores: [
        {
          latlng: [47.4968864, 19.0531093],
          address: "Budapest, Deák Ferenc u. 19, 1052",
          phone: "(70) 881 9463",
          email: "example@email.com",
          name: "Store",
          picture: {
            mobile: { url: "/assets/storybook/SfStore/storeA.png" },
            desktop: { url: "/assets/storybook/SfStore/storeA.png" },
          },
        },
        {
          latlng: [51.1176696, 17.0183064],
          address: "Romana Dmowskiego",
          phone: "(1) 311 9666",
          email: "example@email.com",
          name: "Store",
          picture: {
            mobile: { url: "/assets/storybook/SfStore/storeB.png" },
            desktop: { url: "/assets/storybook/SfStore/storeB.png" },
          },
        },
      ],
    };
  },
  template: `
      <div style="max-width: 1240px;">
      <SfStoreLocator
        :center="latlng"
    >
      <template #map-loading>
        CUSTOM MAP LOADING
      </template>
      <SfStore
          :latlng="latlng"
          :name="name"
          :email="email"
          :phone="phone"
          :address="address"
          :picture="picture"
      />
    </SfStoreLocator>
      </div>`,
});
SlotMapLoading.story = {
  name: "[slot] map-loading",
};
