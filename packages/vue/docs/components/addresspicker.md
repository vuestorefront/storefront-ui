# AddressPicker

Component for displaying information about address

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=molecules-addresspicker--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 5rem"></iframe>
  </div>

```html
<template>
  <SfAddressPicker v-model="selected">
    <SfAddress
      v-for="address in addresses"
      :key="address.id"
      :name="address.id"
    >
      <span>{{ address.name }}</span>
      <span>{{ address.street }}</span>
      <span>{{ address.postCode }}</span>
      <span>{{ address.city }}</span>
      <span>{{ address.country }}</span>
      <span>{{ address.phone }}</span>
    </SfAddress>
  </SfAddressPicker>
</template>
<script>
import { SfAddressPicker } from "@storefront-ui/vue";
export default {
  components: {
    SfAddressPicker,
  },
  data() {
    return {
      selected: "",
      addresses: [
        {
          id: "first",
          name: "Jack Smith",
          street: "Mazowiecka 34",
          postCode: "02-020",
          city: "Warszawa, Mazowieckie",
          country: "Poland",
          phone: "+48 777 777 777",
        },
        {
          id: "second",
          name: "Jack Doe",
          street: "Mazowiecka 24",
          postCode: "02-020",
          city: "Warszawa, Mazowieckie",
          country: "Poland",
          phone: "+48 999 556 777",
        },
      ],
    };
  },
};
</script>
```

## Props

- **`selected`**
  - **type:** `string`
  - **defaultValue:** `""`

## Slots

- **`default`**
  - _Default. Here you should pass your addresses_

## Events

None.

## CSS modifiers

None.

## CSS custom properties (variables)

- **`--address-font`**
- **`--address-font-weight`**
- **`--address-font-size`**
- **`--address-font-line-height`**
- **`--address-font-family`**
### Overridden other components CSS variables 
- **`--icon-color`**
- **`--icon-size`**
- **`--radio-content-margin`**
- **`--radio-background`**


You can override CSS variables values bound to this component.

## Internal components

### Address
#### Props
- **`name`**
  - _Name for address. Each address should have different name. For example "first", "second", "default"._
  - **type:** `string`
  - **defaultValue:** `""`

#### Slots
- **`default`**
  - _Default. Here you should pass address details_

- **`icon`**
  - _Icon. Here you can change default checkmark_

#### Events
None.

#### CSS modifiers
None.

#### CSS variables
None.

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/molecules-addresspicker--common">Storybook</a>.
