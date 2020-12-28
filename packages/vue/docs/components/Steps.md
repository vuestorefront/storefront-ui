# Steps

Stepper component increasing dynamically on click. Used to guide user through defined path.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=molecules-steps--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 25rem"></iframe>
  </div>

```html
<template>
  <SfSteps v-model="active" :steps="steps" :can-go-back="canGoBack">
    <SfStep v-for="(step, key) in steps" :key="key" :name="step">
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: center;
          height: 18.75rem;
          background-color: #f2f2f2;
        "
      >
        [#default slot content] {{ step }}
      </div>
    </SfStep>
  </SfSteps>
</template>
<script>
import { SfSteps } from "@storefront-ui/vue";
export default {
  components: {
    SfSteps,
  },
  data() {
    return {
      active: 0,
      steps: ["Details", "Shipping", "Payment", "Review"],
      canGoBack: true,
    };
  },
};
</script>
```

## Props

- **`active`**
  - _Current active step_
  - **type:** `number`
  - **defaultValue:** `0`

- **`canGoBack`**
  - _Disable clicking on  a past step_
  - **type:** `boolean`
  - **defaultValue:** `true`

## Slots

- **`steps`**
  - _Use this slot to customise the steps_
  - **bindings:** `step-click`, `step`

- **`default`**

## Events

- **`'change'`**
  - _Active step changed event_

## CSS modifiers

None.

## CSS custom properties (variables)

### Overridden other components CSS variables 
- **`--steps-step-color`**
- **`--steps-step-cursor`**
- **`--step-font`**
- **`--font-weight--normal`**
- **`--steps-border-width`**
- **`--steps-step-padding`**
- **`--step-font`**
- **`--font-size--base`**
- **`--steps-step-after-background`**


You can override CSS variables values bound to this component.

## Internal components

### Step
#### Props
- **`name`**
  - _Name of the step_
  - **type:** `string`
  - **defaultValue:** `""`

#### Slots
- **`default`**
  - **bindings:** `index`

#### Events
None.

#### CSS modifiers
None.

#### CSS variables
None.

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/molecules-steps--common">Storybook</a>.
