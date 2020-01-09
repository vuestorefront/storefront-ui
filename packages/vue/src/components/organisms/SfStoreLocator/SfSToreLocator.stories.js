/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  object,
  number,
  select,
  text
} from "@storybook/addon-knobs";
import SfStoreLocator from "./SfStoreLocator.vue";
const stores = [
  {
    name: "Store one",
    address: "Budapest, Deák Ferenc u. 19, 1052",
    phone: "(70) 881 9463",
    email: "some@email.com",
    picture: "https://picsum.photos/200/300",
    latlng: [47.4968864, 19.0531093]
  },
  {
    name: "Store one",
    address: "G354+5R Budapest",
    phone: "(1) 311 9666",
    email: "some@email.com",
    picture: "https://picsum.photos/200/300",
    latlng: [47.5079722, 19.0570521]
  }
];
storiesOf("Organisms|StoreLocator", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    props: {
      zoom: {
        default: number(
          "zoom",
          6,
          {
            range: true,
            min: 1,
            max: 16,
            step: 1
          },
          "Props"
        )
      },
      maxZoom: {
        default: number(
          "maxZoom",
          16,
          {
            range: true,
            min: 1,
            max: 16,
            step: 1
          },
          "Props"
        )
      },
      flyToStoreZoom: {
        default: number(
          "flyToStoreZoom",
          15,
          {
            range: true,
            min: 1,
            max: 16,
            step: 1
          },
          "Props"
        )
      },
      tileServerUrl: {
        default: select(
          "tileServerUrl",
          {
            Default:
              "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
            OpenStreetMaps:
              "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            Wikimedia: "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png"
          },
          "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
          "Props"
        )
      },
      center: {
        default: object("center", [47.5104387, 19.0444433], "Props")
      },
      stores: {
        default: object("stores", stores, "Props")
      },
      markerIconSize: {
        default: object("markerIconSize", [21, 28], "Props")
      },
      markerIconAnchor: {
        default: object("markerIconAnchor", [10.5, 0], "Props")
      },
      mapOptions: {
        default: object("mapOptions", {}, "Props")
      },
      tileLayerOptions: {
        default: object("tileLayerOptions", {}, "Props")
      },
      markerOptions: {
        default: object("markerOptions", {}, "Props")
      }
    },
    components: { SfStoreLocator },
    template: `
      <sf-store-locator :center="center" :zoom="zoom" :max-zoom="maxZoom" :fly-to-store-zoom="flyToStoreZoom" :tile-server-url="tileServerUrl" >
        <sf-store v-for="(store, index) in stores" :key="index" v-bind="store" />
      </sf-store-locator>
      `
  }))
  .add("SfStore", () => ({
    props: {
      latlng: {
        default: object("latlng", [47.5104387, 19.0444433], "Props")
      },
      name: {
        default: text("name", "My Store", "Props")
      },
      address: {
        default: text("address", "Store address 100228 NY", "Props")
      },
      phone: {
        default: text("phone", "(70) 881 9463", "Props")
      },
      email: {
        default: text("email", "some@email.com", "Props")
      },
      picture: {
        default: text("picture", "https://picsum.photos/200/300", "Props")
      }
    },
    components: { SfStoreLocator },
    template: `
      <sf-store-locator :center="latlng">
        <sf-store :name="name" :picture="picture" :address="address" :phone="phone" :email="email" :latlng="latlng" />
      </sf-store-locator>
      `
  }))
  .add("Default slot (stores)", () => ({
    props: {
      zoom: {
        default: number(
          "zoom",
          6,
          {
            range: true,
            min: 1,
            max: 16,
            step: 1
          },
          "Props"
        )
      },
      center: {
        default: object("center", [47.5104387, 19.0444433], "Props")
      },
      stores: {
        default: object("stores", stores, "Props")
      }
    },
    components: { SfStoreLocator },
    template: `
      <sf-store-locator :stores="stores" :center="center" :zoom="zoom" v-slot="{centerOn, registerStore}" >
          <div v-for="(store, index) in stores" :key="index">
            <!-- This is just an example showing that is necessary to trigger register store function to have the store appear on the map -->
            {{registerStore(store)}}
            <img :style="{height: '150px'}" :src="store.picture" :alt="store.title" />
            <button @click="centerOn(store.latlng)">click to zoom</button>
          </div>
      </sf-store-locator>
      `
  }))
  .add("Marker icon slot", () => ({
    props: {
      zoom: {
        default: number(
          "zoom",
          6,
          {
            range: true,
            min: 1,
            max: 16,
            step: 1
          },
          "Props"
        )
      },
      center: {
        default: object("center", [47.5104387, 19.0444433], "Props")
      },
      stores: {
        default: object("stores", stores, "Props")
      }
    },
    components: { SfStoreLocator },
    template: `
      <sf-store-locator :center="center" :zoom="zoom">
        <sf-store v-for="(store, index) in stores" :key="index" v-bind="store" />
        <template #marker-icon>
          <div :style="{fontSize: '30px'}">🏬</div>
        </template>
      </sf-store-locator>
      `
  }))
  .add("Loading indicator", () => ({
    props: {
      zoom: {
        default: number(
          "zoom",
          6,
          {
            range: true,
            min: 1,
            max: 16,
            step: 1
          },
          "Props"
        )
      },
      center: {
        default: object("center", [47.5104387, 19.0444433], "Props")
      },
      stores: {
        default: object("stores", stores, "Props")
      }
    },
    components: { SfStoreLocator },
    template: `
      <sf-store-locator :center="center" :zoom="zoom">
        <sf-store v-for="(store, index) in stores" :key="index" v-bind="store" />
        <template #map-loading>
          <div :style="{fontSize: '30px'}">LOADING</div>
        </template>
      </sf-store-locator>
      `
  }));
