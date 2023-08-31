---
blockCount: 4
repoPath: /blocks/Checkout.md
layout: DefaultLayout
hideBreadcrumbs: true
description: Checkout page in one of the most important pages in e-commerce. Usually it contains information about delivery destination, shipping options and payment methods.
hideToc: true
---
# Checkout

{{ $frontmatter.description }}

## Address form

Ease the checkout process for users by providing them with well-structured address form. Form field `Street` provides you an example of how error state could be handled.

<Showcase showcase-name="Checkout/CheckoutAddressForm" style="min-height:600px">

<<<../../preview/next/pages/showcases/Checkout/CheckoutAddressForm.tsx#source

</Showcase>

## Delivery options

Present possible delivery options in a way where your customers can easily see differences and choose the best one for their needs.

<Showcase showcase-name="Checkout/CheckoutDeliveryOptions" style="min-height: 300px;">

<<<../../preview/next/pages/showcases/Checkout/CheckoutDeliveryOptions.tsx#source

</Showcase>

## Payment method

Let your users pick a payment method of their choice in a nice and clear way.

<Showcase showcase-name="Checkout/CheckoutPaymentMethod" style="min-height:320px" >

<<<../../preview/next/pages/showcases/Checkout/CheckoutPaymentMethod.tsx#source

</Showcase>

## Contact form

The contact form for customers provides the way to send email (field with simple validation) and phone number with separate country code.

<Showcase showcase-name="Checkout/CheckoutContactForm" style="min-height: 400px;">

<<<../../preview/next/pages/showcases/Checkout/CheckoutContactForm.tsx#source

</Showcase>
