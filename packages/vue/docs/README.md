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
npm install --save @storefrontui/vue 
```
Import styles (optional)
```scss
import "@storefrontui/vue/src/css/_all.scss"
```
Import and register components that you need 
```js
import { SfButton } from '@storefrontui/vue'

export default {
  components: {
    SfButton
  }
}
</script>
```
voila!