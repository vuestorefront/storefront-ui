---
layout: DefaultLayout
---

# Migration Guide

Storefront UI 2 is a complete rewrite of the Storefront UI 1 library that uses different technologies - the biggest of which is switching to a Tailwind CSS approach to styling.

So if you're upgrading from [Storefront UI 1](https://docs.storefrontui.io/v1), you'll need to make major changes, if not completely rewrite any code that uses Storefront UI.

## Significant Changes

- **Tailwind CSS** - Storefront UI 2 uses Tailwind CSS for styling. This means that you can use any of the Tailwind CSS classes in your components, and you can also use any of the Tailwind CSS plugins.
- **Vue 3** - Storefront UI 2 is built with Vue 3. This means that you'll need to upgrade your Vue version to 3. All of our components are built with `<script setup>` and the Composition API 
- **React Support** - Storefront UI 2 is now available for React as well as Vue. 

## Migration Tips

Some components like [`SfButton`](components/button) and [`SfInput`](components/input) serve similar functions to their Storefront UI 1 counterparts, however their API has changed significantly.

Other Storefront UI 1 components like [`SfReview`](blocks/Review) and [`SfProductCard`](blocks/ProductCard) have been removed from our NPM package, and are now available as [Storefront UI Blocks](../blocks). These are specific UI examples that you can copy and paste into your own projects so that you can have full control over all of the styling.