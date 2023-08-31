---
layout: DefaultLayout
hideBreadcrumbs: true
description: An order summary shows all order details into a consolidated view. Your customers can easily add a promo code to their order and the change will be visible immediately after applying a valid code.
hideToc: true
---
# Order Summary

{{ $frontmatter.description }}

In this example there are two types of alerts: `positive` and `error`. 
The first one is shown in two cases:
- when a valid promo code - `VSF2020` is passed to the input and applied by clicking on the `Apply` button,
- when added promo code has been removed.
The second alert shows up when passed promo code is not valid.

:::tip
In order to apply valid promo code use: `VSF2020`.
:::

<Showcase showcase-name="OrderSummary/OrderSummary" style="min-height:600px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/OrderSummary/OrderSummary.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/OrderSummary/OrderSummary.tsx#source
<!-- end react -->

</Showcase>
