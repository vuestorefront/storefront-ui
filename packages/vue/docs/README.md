---
home: true
heroImage: /hero.png
actionText: Get Started →
actionLink: /introduction
features:
- title: Performance
  details: You’re importing ONLY what you need, and in a raw format which means you can benefit from all build-time optimizations like tree shaking or grouping common chunks.
- title: Customization
  details: Along with standard prop-based customization, every component has a set of slots that let you replace any part of it with your own images, icons or even custom HTML markup. In addition, every component is divided into separate HTML, CSS and JS files so you can compose your own components from only Storefront UI partials.
- title: Best practices
  details: Storefront UI components follow best practices in terms of design and core. Every component is based on the Google Retail UX Playbook and is accessibility-friendly.
footer: MIT Licensed
---

## Installation

Install NPM package:
```
npm install --save @storefront-ui/vue
```
Import styles (optional)
```scss
import "@storefront-ui/vue/src/css/_all.scss"
```
Import and register components that you need
```js
import { SfButton } from '@storefront-ui/vue'

export default {
  components: {
    SfButton
  }
}
```
voila!

## Supporters
<a href="https://divante.co"><img style="margin-right: 15px" src="https://camo.githubusercontent.com/26482689fe32dbe4664eeb62d463e334b5137f91/68747470733a2f2f646976616e74652e636f2f61626f75742075732f4c4f474f2e706e67" alt="divante" height="55px"></a><a href="https://developers.e-com.plus/"><img src="https://developers.e-com.plus/src/assets/img/logo-dark.png" alt="e-com club" height="55px"></a>
