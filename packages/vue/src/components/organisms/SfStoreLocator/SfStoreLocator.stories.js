import { SfStoreLocator } from "@storefront-ui/vue";
import SfStore from "./_internal/SfStore.vue";

export default {
  title: "Components/Organisms/StoreLocator",
  component: SfStore,
  parameters: {
    docs: {
      description: {
        component:
          "Component locating and marking on map using tile data. Built from main component - SfStoreLocator and internal components - SfStoreLocatorItem.",
      },
    },
  },
  decorators: [
    () => ({
      template: `<div style="max-width: 1024px;"><story/></div>`,
    }),
  ],
  argTypes: {
    tileServerUrl: {
      control: {
        type: "select",
        options: {
          default:
            "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
          openstreetmap: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        },
      },
      table: {
        category: "Props for main component",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "string",
        },
      },
      description: "Url of selected tileserver",
    },
    tileServerAttribution: {
      control: "text",
      table: {
        category: "Props for main component",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ",
        },
      },
      defaultValue: "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ",
      description: "Attribution line of selected tileserver",
    },
    center: {
      control: "array",
      table: {
        category: "Props for main component",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: [0, 0],
        },
      },
      description:
        "Initial center of the map, overridden when the user position is captured, supports sync modifier",
    },
    zoom: {
      control: "number",
      table: {
        category: "Props for main component",
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: 6,
        },
      },
      defaultValue: 6,
      description: "Initial zoom of the map",
    },
    maxZoom: {
      control: "number",
      table: {
        category: "Props for main component",
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: 16,
        },
      },
      defaultValue: 16,
      description:
        "Max zoom allowed, consider tileserver limitation when setting this",
    },
    markerIconSize: {
      control: "array",
      table: {
        category: "Props for main component",
        type: {
          summary: "array",
        },
        defaultValue: {
          summary: [21, 28],
        },
      },
      description: "Size of the icon [width, height]",
    },
    markerIconAnchor: {
      control: "array",
      table: {
        category: "Props for main component",
        type: {
          summary: "array",
        },
        defaultValue: {
          summary: [10.5, 0],
        },
      },
      defaultValue: [10.5, 0],
      description: "Position of the anchor in the icon [x, y]",
    },
    mapOptions: {
      control: "object",
      table: {
        category: "Props for main component",
        type: {
          summary: "object",
        },
        defaultValue: {
          summary: "{}",
        },
      },
      defaultValue: {},
      description: "Options to pass to leaflet map",
    },
    tileLayerOptions: {
      control: "object",
      table: {
        category: "Props for main component",
        type: {
          summary: "object",
        },
        defaultValue: {
          summary: "{}",
        },
      },
      defaultValue: {},
      description: "Options to pass to leaflet tile-layer",
    },
    markerOptions: {
      control: "object",
      table: {
        category: "Props for main component",
        type: {
          summary: "object",
        },
        defaultValue: {
          summary: "{}",
        },
      },
      defaultValue: {},
      description: "Options to pass to leaflet marker",
    },
    flyToStoreZoom: {
      control: {
        type: "number",
        range: {
          min: 1,
          max: 16,
        },
      },
      table: {
        category: "Props for main component",
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: "15",
        },
      },
      defaultValue: 15,
      description: "Zoom to be set when centering map on clicked store",
    },
    latlng: {
      control: "array",
      table: {
        category: "Props for SfStore component",
        type: {
          summary: "array",
        },
        defaultValue: {
          summary: "[]",
        },
      },
      defaultValue: [],
      description: "Name of the store (for internal component)",
    },
    name: {
      control: "text",
      table: {
        category: "Props for SfStore component",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "Name of the store (for internal component)",
    },
    picture: {
      control: "text",
      table: {
        category: "Props for SfStore component",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "null",
        },
      },
      defaultValue: "",
      description: "Address of the store (for internal component)",
    },
    address: {
      control: "text",
      table: {
        category: "Props for SfStore component",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "Url of the picture of the store (for internal component)",
    },
    phone: {
      control: "text",
      table: {
        category: "Props for SfStore component",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "null",
        },
      },
      defaultValue: "",
      description: "Phone number of the store (for internal component)",
    },
    email: {
      control: "text",
      table: {
        category: "Props for SfStore component",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "null",
        },
      },
      defaultValue: "",
      description: "Email of the store (for internal component))",
    },
    "update:zoom": {
      action: "Zoom value updated",
      table: { category: "Events" },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfStoreLocator },
  props: Object.keys(argTypes),
  template: `
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
      :latlng="latlng"
      :name="name"
      :email="email"
      :phone="phone"
      :address="address"
      :picture="picture"
    />
  </SfStoreLocator>`,
});

export const Common = Template.bind({});
Common.args = {
  center: [47.5104387, 19.0444433],
  markerIconSize: [21, 28],
  markerIconAnchor: [10.5, 0],
  latlng: [47.4968864, 19.0531093],
  address: "Budapest, Deák Ferenc u. 19, 1052",
  phone: "(70) 881 9463",
  email: "example@email.com",
  name: "Store",
  picture: "/assets/storybook/SfStore/storeA.png",
};

export const UseMapLoadingSlot = (args, { argTypes }) => ({
  components: { SfStoreLocator },
  props: Object.keys(argTypes),
  template: `
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
  </SfStoreLocator>`,
});
UseMapLoadingSlot.args = { ...Common.args };

export const UseMarkerIconSlot = (args, { argTypes }) => ({
  components: { SfStoreLocator },
  props: Object.keys(argTypes),
  template: `
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
  </SfStoreLocator>`,
});
UseMarkerIconSlot.args = { ...Common.args };
