---
home: true
heroImage: /hero.png
actionText: Get Started →
actionLink: /guide
features:
- title: Customization
  details: Along with standard prop-based customization, every component has a set of slots that let you replace any part of it with your own images, icons or even custom HTML markup.
- title: Best practices
  details: Storefront UI components follow best practices in terms of design and code. Every component is based on the Google Retail UX Playbook and is accessibility-friendly. You’re importing ONLY what you need, and in a raw format which means you can benefit from all build-time optimizations like tree shaking or grouping common chunks.
- title: Mobile-first
  details: Every Storefront UI component is highly optimized for mobile user experience and in many cases behaves completely different on desktop and mobile. Select list becomes full-screen drop-down, tabs are becoming accordion etc.
footer: MIT Licensed
---

## Installation

Install NPM package:
```
npm install --save @storefront-ui/vue
```
Import styles (optional)
```scss
import "@storefront-ui/vue/styles.scss"
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
<a href="https://divante.co"><img src="https://raw.githubusercontent.com/DivanteLtd/storefront-ui/master/packages/vue/docs/assets/logo-divante.svg" alt="divante" height="55px"></a>&nbsp;&nbsp;
<a href="https://developers.e-com.plus/"><img src="https://developers.e-com.plus/src/assets/img/logo-dark.png" alt="e-com club" height="55px"></a>

