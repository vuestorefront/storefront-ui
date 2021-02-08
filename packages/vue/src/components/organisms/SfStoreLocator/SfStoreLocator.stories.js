import { SfStoreLocator } from "@storefront-ui/vue";

export default {
  title: "Components/Organisms/StoreLocator",
  component: SfStoreLocator,
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
        category: "Props",
      },
    },
    tileServerAttribution: {
      control: "string",
      table: {
        category: "Props",
      },
    },
    center: {
      control: "array",
      table: {
        category: "Props",
      },
    },
    zoom: {
      control: "number",
      table: {
        category: "Props",
      },
    },
    maxZoom: {
      control: "number",
      table: {
        category: "Props",
      },
    },
    markerIconSize: {
      control: "array",
      table: {
        category: "Props",
      },
    },
    markerIconAnchor: {
      control: "array",
      table: {
        category: "Props",
      },
    },
    mapOptions: {
      control: "object",
      table: {
        category: "Props",
      },
    },
    tileLayerOptions: {
      control: "object",
      table: {
        category: "Props",
      },
    },
    markerOptions: {
      control: "object",
      table: {
        category: "Props",
      },
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
        category: "Props",
      },
    },
    latlng: {
      control: "array",
      table: {
        category: "SfStore Props",
      },
    },
    address: {
      control: "string",
      table: {
        category: "SfStore Props",
      },
    },
    phone: {
      control: "string",
      table: {
        category: "SfStore Props",
      },
    },
    email: {
      control: "string",
      table: {
        category: "SfStore Props",
      },
    },
    name: {
      control: "string",
      table: {
        category: "SfStore Props",
      },
    },
    picture: {
      control: "string",
      table: {
        category: "SfStore Props",
      },
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
