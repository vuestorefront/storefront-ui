# StoreLocator

<!-- No Component description -->


[[toc]]


## Most common usage scenario

tbd.


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
  - _Initial center of the map, overriden when the user position is captured, supports sync modifier_
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
  - **bindings:** `center-on`, `register-store`, `remove-store`, `user-position`, `calculate-distance`

- **`marker-icon`**
  - _Use this slot to change the icon of the stores, remember to update `markerIconSize` and `markerIconAnchor` accordingly_

- **`map-loading`**
  - _Use this slot to customise the loading indicator while the map librry loads_
  - **bindings:** `class`


## Events

- **`update:zoom`**

- **`map:ready`**

- **`'location:errors'`**
  - _Location error event._

- **`update:center`**

- **`'library:loaded'`**
  - _Library loaded event, the library is ready and the map is initialising_


## CSS modifiers

None.


## SCSS variables

```scss
$store-locator__font-family-primary: $body-font-family-primary !default;
$store-locator__list-width-desktop: 33% !default;
$store-locator__list-max-width-desktop: 26.25rem !default;
$store-locator__list-width-mobile: 100% !default;
$store-locator__map-width-desktop: 66% !default;
$store-locator__map-max-width-desktop: 43.75rem !default;
$store-locator__map-min-height-desktop: 34.375rem !default;
$store-locator__map-width-mobile: 100% !default;
$store-locator__map-min-height-mobile: 26.875rem !default;
$store__media-width: 5.125rem !default;
$store__media-height: 7rem !default;
$store__media-margin: 0 1.25rem 0 0  !default;
$store__item-font-size: $font-size-extra-small-desktop !default;
$store__name-font-size: $font-size-regular-desktop !default;
$store__name-font-weight: $h1-font-weight-desktop !default;
$store__color-primary: $c-dark-primary !default;
$store__color-secondary: $c-gray-secondary !default;
$store__font-family-primary: $body-font-family-primary !default;
$store__font-family-secondary: $body-font-family-secondary !default;
```

You can override SCSS variable values bound to this component in `sfui.scss` in the root of your project.


## Partials

If you want to customize this component even more you can use its partials for limitless customization.

```html
<template lang="html" src="@storefront-ui/vue/src/components/organisms/SfStoreLocator/SfStoreLocator.html"></template>
<script src="@storefront-ui/vue/src/components/organisms/SfStoreLocator/SfStoreLocator.js"></script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfStoreLocator.scss";
</style>
```

You can read about using component partials [here](docs.storefrontui.io/customization)


## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/">Storybook</a>.
