<br />
<p align="center">
  <img src="https://user-images.githubusercontent.com/1626923/157498695-885de6c5-deba-416d-8287-51e7269aef56.png" alt="Storefront UI" />
</p>

<h3 align="center">
  `peer-next` class for first next sibling.
</h3>

<p align="center">
  <img alt="GitHub Repository Stars Count" src="https://img.shields.io/github/stars/vuestorefront/sfui2?style=social" />
  <a href="https://twitter.com/storefrontui">
    <img alt="Follow Us on Twitter" src="https://img.shields.io/twitter/follow/storefrontui?style=social" />
  </a>
  <a href="https://www.youtube.com/c/VueStorefront">
    <img alt="Subscribe on our Youtube Channel" src="https://img.shields.io/youtube/channel/subscribers/UCkm1F3Cglty3CE1QwKQUhhg?style=social" />
  </a>
  <a href="https://discord.gg/vuestorefront">
    <img alt="Chat with us on Discord" src="https://img.shields.io/discord/770285988244750366?label=join%20discord&logo=Discord&logoColor=white" />
  </a>
</p>
<p align="center">
  <img alt="npm" src="https://img.shields.io/npm/v/@storefront-ui/tw-plugin-peer-next">
  <a href="http://commitizen.github.io/cz-cli/">
    <img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" />
  </a>
  <a href="https://github.com/vuestorefront/sfui2">
    <img alt="License" src="https://img.shields.io/github/license/vuestorefront/sfui2" />
  </a>
  <a href="https://github.com/vuestorefront/storefront-ui/pulls">
    <img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" />
  </a>
</p>

---

# #TechForUkraine

<div align="center">
<p>
  <img src="https://user-images.githubusercontent.com/1626923/155853691-d6d0a541-d3b9-40bf-b8f5-2d38303e9e49.png" />
</p>
  <h2><strong>Russia’s military aggression against Ukraine.</strong></h2>
<div align="left">
  <h3>How can you support Ukrainian civil society?</h3>
  All help is needed. If you are not able to help locally, by sheltering a fellow Ukrainian, you can also:
  <ul>
    <li>
      Support the Ukraine Armed forces directly by sending funding to the special accounts.<br />
      <a href="https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi" target="_blank">NBU Special Account to Raise Funds for Ukraine’s Armed Forces</a>
    </li>
    <li>
      Help the ICRC (Red Cross) with donations.<br />
      <a href="https://www.icrc.org/en/where-we-work/europe-central-asia/ukraine" target="_blank">Ukrainian Red Cross Society</a>
    </li>
    <li>
      Donate to the United Help Ukraine.<br />
      <a href="https://unitedhelpukraine.org/" target="_blank">United Help Ukraine</a>
    </li>
    <li>
      Donate to Voices of Children<br />
      <a href="https://voices.org.ua/en/" target="_blank">Voices of Children</a>
    </li>
  </div>
</div>

---

# SF Typography

Extend of `peer` tailwind class but with `+` (first next sibling). Original `peer` class is for `~` (every following sibling).
<br /><br />
Made with ❤️ by <a href="https://github.com/vuestorefront" target="_blank">Vue Storefront</a> team and contributors.

## Why?

Targeting next siblings with `~` is not suitable for HTML structure when pairing `input` and `label`, every `label` after changed `input` will also change. Of course we can wrap such groups but having in mind how browser works, nesting and making deeper HTML structure does affect performance of rendering HTML by browser.

## Installation

```bash
npm install --save-dev @storefront-ui/tw-plugin-peer-next
```

```ts
// tailwind.config.ts

import sfPeerNext from '@storefront-ui/tw-plugin-peer-next';

export default {
  content: ['your-components-source-directory/*.ts'],
  plugins: [sfPeerNext]
};
```

## How to use it

Plugin extends Tailwindcss [peer](https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-sibling-state) class and allows to use it as [an adjacent sibling combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator).

```html
<form>
  <label class="block">
    <span class="block text-sm font-medium text-slate-700">Email</span>
    <input type="email" class="peer-next ..."/>
    <p class="invisible mt-2 text-sm text-pink-600 peer-next-invalid:visible">
      Please provide a valid email address.
    </p>
  </label>
</form>
```

## Looking for a library to accelerate your ecommerce development?

Make sure to check out StorefrontUI! [Read the documentation at https://docs.storefrontui.io/v2/](https://docs.storefrontui.io/v2/) 🚀
