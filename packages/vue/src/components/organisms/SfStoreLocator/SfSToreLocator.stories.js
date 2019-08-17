// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, object, number, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";
import SfStoreLocator from "./SfStoreLocator.vue";
import SfStore from "../../molecules/SfStore/SfStore.vue";

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

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "$sf-store-locator__font-family-primary",
      "$body-font-family-primary",
      "Store card primary font family"
    ],
    [
      "$sf-store-locator__list-width-desktop",
      "33%",
      "Store list desktop width"
    ],
    [
      "$sf-store-locator__list-max-width-desktop",
      "26.25rem",
      "Store list desktop max width"
    ],
    ["$sf-store-locator__list-width-mobile", "100%", "Store list mobile width"],
    ["$sf-store-locator__map-width-desktop", "66%", "Store map desktop width"],
    [
      "$sf-store-locator__map-max-width-desktop",
      "43.75rem",
      "Store map desktop max width"
    ],
    [
      "$sf-store-locator__map-min-height-desktop",
      "34.375rem",
      "Store map desktop min height"
    ],
    ["$sf-store-locator__map-width-mobile", "100%", "Store map mobile width"],
    [
      "$sf-store-locator__map-min-height-mobile",
      "26.875rem",
      "Store map mobile min height"
    ]
  ]
};

storiesOf("Organisms|StoreLocator", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      props: {
        zoom: {
          default: number("zoom", 6, {
            range: true,
            min: 1,
            max: 16,
            step: 1
          })
        },
        maxZoom: {
          default: number("maxZoom", 16, {
            range: true,
            min: 1,
            max: 16,
            step: 1
          })
        },
        flyToStoreZoom: {
          default: number("flyToStoreZoom", 15, {
            range: true,
            min: 1,
            max: 16,
            step: 1
          })
        },
        tileServerUrl: {
          default: select(
            "tileServerUrl",
            {
              Default:
                "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
              OpenStreetMaps:
                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
              Wikimedia:
                "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png"
            },
            "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
          )
        },
        center: {
          default: object("center", [47.5104387, 19.0444433])
        },
        stores: {
          default: object("stores", stores)
        },
        markerIconSize: {
          default: object("markerIconSize", [21, 28])
        },
        markerIconAnchor: {
          default: object("markerIconAnchor", [10.5, 0])
        },
        mapOptions: {
          default: object("mapOptions", {})
        },
        tileLayerOptions: {
          default: object("tileLayerOptions", {})
        },
        markerOptions: {
          default: object("markerOptions", {})
        }
      },
      components: { SfStoreLocator, SfStore },
      template: `
      <sf-store-locator :center="center" :zoom="zoom" :max-zoom="maxZoom" :fly-to-store-zoom="flyToStoreZoom" :tile-server-url="tileServerUrl" >
        <sf-store v-for="(store, index) in stores" :key="index" v-bind="store" />
      </sf-store-locator>
      `
    }),
    {
      info: {
        summary: `
          \`SfStoreLocator\` allow the to place a map and a list of stores it will auto detect the position of the user and
          center the map on it, distance is calculated based on the user position.
          Even if Leaflet and Vue2Leaflet do not support SSR this component defer the loading of the library to the mounted lifecycle event
          <h2> Usage </h2>
          <pre><code>import { SfStoreLocator, SfStore } from "@storefrontui/vue"</code></pre>
          ${generateStorybookTable(scssTableConfig, "SCSS variables")}
          `
      }
    }
  )
  .add(
    "Default slot (stores)",
    () => ({
      props: {
        zoom: {
          default: number("zoom", 6, {
            range: true,
            min: 1,
            max: 16,
            step: 1
          })
        },
        center: {
          default: object("center", [47.5104387, 19.0444433])
        },
        stores: {
          default: object("stores", stores)
        }
      },
      components: { SfStoreLocator },
      template: `
      <sf-store-locator :stores="stores" :center="center" :zoom="zoom" >
        <template #default="{centerOn, registerStore}">
          <div v-for="(store, index) in stores" :key="index">
            <!-- This is just an example showing that is necessary to trigger register store function to have the store appear on the map -->
            {{registerStore(store)}}
            <img :style="{height: '150px'}" :src="store.picture" :alt="store.title" />
            <button @click="centerOn(store)">click to zoom</button>
          </div>
        </template>
      </sf-store-locator>
      `
    }),
    {
      info: {
        summary: `
          \`SfStoreLocator\` allow to customise how the store list is drawn by the use of the \`stores\` slot.
          See the story source for an example
          <h2> Usage </h2>
          <pre><code>import { SfStoreLocator } from "@storefrontui/vue"</code></pre>
          ${generateStorybookTable(scssTableConfig, "SCSS variables")}
          `
      }
    }
  )
  .add(
    "Marker icon slot",
    () => ({
      props: {
        zoom: {
          default: number("zoom", 6, {
            range: true,
            min: 1,
            max: 16,
            step: 1
          })
        },
        center: {
          default: object("center", [47.5104387, 19.0444433])
        },
        stores: {
          default: object("stores", stores)
        }
      },
      components: { SfStoreLocator, SfStore },
      template: `
      <sf-store-locator :center="center" :zoom="zoom">
        <sf-store v-for="(store, index) in stores" :key="index" v-bind="store" />
        <template #marker-icon>
          <div :style="{fontSize: '30px'}">🏬</div>
        </template>
      </sf-store-locator>
      `
    }),
    {
      info: {
        summary: `
          \`SfStoreLocator\` allow to customise how the store icon is shown on the map by the use of the \`marker-icon\` slot.
          See the story source for an example
          <h2> Usage </h2>
          <pre><code>import { SfStoreLocator, SfStore } from "@storefrontui/vue"</code></pre>
          ${generateStorybookTable(scssTableConfig, "SCSS variables")}
          `
      }
    }
  )
  .add(
    "Loading indicator",
    () => ({
      props: {
        zoom: {
          default: number("zoom", 6, {
            range: true,
            min: 1,
            max: 16,
            step: 1
          })
        },
        center: {
          default: object("center", [47.5104387, 19.0444433])
        },
        stores: {
          default: object("stores", stores)
        }
      },
      components: { SfStoreLocator, SfStore },
      template: `
      <sf-store-locator :center="center" :zoom="zoom">
        <sf-store v-for="(store, index) in stores" :key="index" v-bind="store" />
        <template #map-loading>
          <div :style="{fontSize: '30px'}">LOADING</div>
        </template>
      </sf-store-locator>
      `
    }),
    {
      info: {
        summary: `
          \`SfStoreLocator\` allow to customise the loading indicator by the use of the \`map-loading\` slot.
          See the story source for an example
          <h2> Usage </h2>
          <pre><code>import { SfStoreLocator, SfStore } from "@storefrontui/vue"</code></pre>
          ${generateStorybookTable(scssTableConfig, "SCSS variables")}
          `
      }
    }
  );
