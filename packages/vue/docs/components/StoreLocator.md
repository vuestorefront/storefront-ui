# StoreLocator

Component locating and marking on map using tile data.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=organisms-storelocator--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 45rem"></iframe>
  </div>

```html
<template>
  <div style="max-width: 1240px;">
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
  </div>
</template>
<script>
import { SfStoreLocator } from "@storefront-ui/vue";
export default {
  components: {
    SfStoreLocator,
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
      tileServerUrl:
        "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
      tileServerAttribution: "",
      center: [47.5104387, 19.0444433],
      zoom: 6,
      maxZoom: 16,
      markerIconSize: [21, 28],
      markerIconAnchor: [10.5, 0],
      mapOptions: {},
      tileLayerOptions: {},
      markerOptions: {},
      flyToStoreZoom: 15,
    };
  },
};
</script>
```

## Props

- **`tileServerUrl`**
  - _Url of selected tileserver_
  - **type:** `string`
  - **defaultValue:** `"https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"`

- **`tileServerAttribution`**
  - _Attribution line of selected tileserver_
  - **type:** `string`
  - **defaultValue:** `"Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"`

- **`center`**
  - _Initial center of the map, overridden when the user position is captured, supports sync modifier_
  - **type:** `array|object`
  - **defaultValue:** `() => [0, 0]`

- **`zoom`**
  - _Initial zoom of the map_
  - **type:** `number`
  - **defaultValue:** `6`

- **`maxZoom`**
  - _Max zoom allowed, consider tileserver limitation when setting this_
  - **type:** `number`
  - **defaultValue:** `16`

- **`markerIconSize`**
  - _Size of the icon [width, height]_
  - **type:** `array`
  - **defaultValue:** `() => [21, 28]`

- **`markerIconAnchor`**
  - _Position of the anchor in the icon [x, y]_
  - **type:** `array`
  - **defaultValue:** `() => [10.5, 0]`

- **`mapOptions`**
  - _Options to pass to leaflet map_
  - **type:** `object`
  - **defaultValue:** `{}`

- **`tileLayerOptions`**
  - _Options to pass to leaflet tile-layer_
  - **type:** `object`
  - **defaultValue:** `{}`

- **`markerOptions`**
  - _Options to pass to leaflet marker_
  - **type:** `object`
  - **defaultValue:** `{}`

- **`flyToStoreZoom`**
  - _Zoom to be set when centering map on clicked store_
  - **type:** `number`
  - **defaultValue:** `15`

## Slots

- **`default`**
  - _Use this slot to show stores cards_
  - **bindings:** `centerOn`, `registerStore`, `removeStore`, `userPosition`, `getGeoDistance`, `locateUser`

- **`marker-icon`**
  - _Use this slot to change the icon of the stores, remember to update `markerIconSize` and `markerIconAnchor` accordingly_

- **`map-loading`**
  - _Use this slot to customise the loading indicator while the map librry loads_

## Events

- **`update:zoom`**

- **`'library:loaded'`**
  - _Library loaded event, the library is ready and the map is initialising_

- **`map:ready`**

- **`'location:errors'`**
  - _Location error event._

- **`update:center`**

## CSS modifiers

None.

## CSS custom properties (variables)

- **`--store-padding`**
- **`--store-margin`**
- **`--store-border`**
- **`--store-border-width`**
- **`--store-distance-flex`**
- **`--store-distance-order`**
- **`--store-distance-margin`**
- **`--store-distance-text-align`**
- **`--store-item-distance-font`**
- **`--store-item-distance-font-weight`**
- **`--store-item-distance-font-size`**
- **`--store-item-distance-font-line-height`**
- **`--store-item-distance-font-family`**
- **`--store-distance-span`**
- **`--store-media-flex`**
- **`--store-media-margin`**
- **`--store-item-addres-margin`**
- **`--store-item-property-font`**
- **`--store-item-property-font-weight`**
- **`--store-item-property-font-size`**
- **`--store-item-property-font-line-height`**
- **`--store-item-property-font-family`**
- **`--store-item-name-margin`**
- **`--store-item-name-color`**
- **`--store-item-property-font`**
- **`--store-item-property-font-weight`**
- **`--store-item-property-font-size`**
- **`--store-item-property-font-line-height`**
- **`--store-item-property-font-family`**
- **`--store-item-property-margin`**
- **`--store-item-property-font`**
- **`--store-item-property-font-weight`**
- **`--store-item-property-font-size`**
- **`--store-item-property-font-line-height`**
- **`--store-item-property-font-family`**
- **`--store-locator-wrapper-flex-direction`**
- **`--store-locator-wrapper-justify-content`**
- **`--store-locator-wrapper-align-items`**
- **`--store-locator-list-flex`**
- **`--store-locator-list-padding`**
- **`--store-locator-list-margin`**
- **`--store-locator-map-flex`**
- **`--store-locator-map-width`**
- **`--store-locator-map-height`**
- **`--store-locator-stores-width`**
- **`--store-locator-stores-padding`**
- **`--store-locator-stores-margin`**
- **`--store-locator-stores-border`**
- **`--store-locator-stores-border-width`**
- **`--store-locator-store-color`**
- **`--store-locator-stores-font`**
- **`--store-locator-stores-font-weight`**
- **`--store-locator-stores-font-size`**
- **`--store-locator-stores-font-line-height`**
- **`--store-locator-stores-font-family`**
### Overridden other components CSS variables 
None. 


You can override CSS variables values bound to this component.

## Internal components

### Store
#### Props
- **`latlng`**
  - _Name of the store_
  - **type:** `array`
  - **defaultValue:** `() => []`

- **`name`**
  - _Name of the store_
  - **type:** `string`
  - **defaultValue:** `""`

- **`picture`**
  - _Url of the picture of the store_
  - **type:** `string|object`
  - **defaultValue:** `null`

- **`address`**
  - _Address of the store_
  - **type:** `string`
  - **defaultValue:** `""`

- **`phone`**
  - _Phone number of the store_
  - **type:** `string`
  - **defaultValue:** `null`

- **`email`**
  - _Email of the store_
  - **type:** `string`
  - **defaultValue:** `null`

#### Slots
- **`distance`**
  - _Use this slot to change distance element_

- **`media`**
  - _Use this slot to show media elements_

- **`heading`**
  - _Use this slot to show heading_

- **`default`**
  - _This is the default slot of the component, placed on the right of the picture_

#### Events
None.

#### CSS modifiers
None.

#### CSS variables
None.

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/organisms-storelocator--common">Storybook</a>.
