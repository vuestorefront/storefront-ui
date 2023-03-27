<br />
<p align="center">
  <img src="https://user-images.githubusercontent.com/1626923/157498695-885de6c5-deba-416d-8287-51e7269aef56.png" alt="Storefront UI" />
</p>

<h3 align="center">
       Customizable typography solution for Tailwind
</h3>
<p align="center">
       Create your own typography palette that fits perfectly with the rest of design system.
</p>

<p align="center">
    <img alt="GitHub Repository Stars Count" src="https://img.shields.io/github/stars/vuestorefront/storefront-ui?style=social" />
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
    <img alt="npm" src="https://img.shields.io/npm/v/@storefront-ui/typography">
    <a href="http://commitizen.github.io/cz-cli/">
        <img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" />
    </a>
    <a href="https://github.com/vuestorefront/storefront-ui">
        <img alt="License" src="https://img.shields.io/github/license/vuestorefront/storefront-ui" />
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

Tailwind plugin that allows you to create fully customizable typography system. Ships with StorefrontUI typography by default.
<br /><br />
Made with ❤️ by <a href="https://github.com/vuestorefront" target="_blank">Vue Storefront</a> team and contributors.

## Why?

In many projects the designers specify a standarized range of typography atoms. From headings, body texts to elements like labels - everything follows the same palette of font styles. And whilst Tailwind is great when it comes to dealing with atomic styling we believe that **having typography-related classes structured leads to a better developer experience**. 💚
That's why we introduce you `SF Typography` plugin - to bring typography systems back to the Tailwind world!

## Installation

```bash
npm install --save-dev @storefront-ui/typography
```

```ts
// tailwind.config.ts

import sfTypography from '@storefront-ui/typography';

export default {
  content: ['your-components-source-directory/*.ts'],
  plugins: [sfTypography]
};
```

And get ready to use default StorefrontUI typography classes [that are based on SFUI designs](https://www.figma.com/file/Y9mMfUVXAfH3qvUWrOAZa2/Storefront-UI-%7C-Design-Kit-(public)?node-id=11332%3A15785&t=3ozBryMhTh1sOMNc-1).

## How to use it

Every class defined within Tailwind theme configuration can be used in your template with a `typography-` prefix. You could use default classes as follows:

```html
<h2 class="typography-headline-3">Specifications</h2>

<h3 class="typography-headline-2">Fabric Content</h3>
<p class="typography-text-lg">Cotton blend</p>
<h3 class="typography-headline-2">Sleeve Length Style</h3>
<p class="typography-text-lg">Short sleeve</p>
```

## Customization

### Theming

Typography-related styling can be customized as a part of [Tailwind theme customization](https://tailwindcss.com/docs/theme#extending-the-default-theme):

#### Extending default theme

```ts
// tailwind.config.ts

import sfTypography from '@storefront-ui/typography';

export default {
  content: ['your-components-source-directory/*.ts'],
  plugins: [sfTypography],

  theme: {
    extend: {
      sfTypography: ({ theme }) => ({
        'headline-2': {
          fontSize: theme('fontSize.4xl'),
          lineHeight: '1.1',
        },
        'headline-8': {
          fontSize: theme('fontSize.xs'),
          lineHeight: theme('lineHeight.4'),
          fontWeight: theme('fontWeight.light')
        },
      })
    }
  }
};
```

#### Overriding default theme

You can also specify your own, fully custom typography palette:

```ts
// tailwind.config.ts

import sfTypography from '@storefront-ui/typography';

export default {
  content: ['your-components-source-directory/*.ts'],
  plugins: [sfTypography],

  theme: {
    sfTypography: ({ theme }) => ({
      'heading': {
        fontSize: theme('fontSize.4xl'),
        lineHeight: '1.1',
      },
      'label': {
        fontSize: theme('fontSize.xs'),
        lineHeight: theme('lineHeight.4'),
        fontWeight: theme('fontWeight.light')
      },
    })
  }
};
```

With configuration above, you can start using `typography-heading` and `typography-label` classes right away!

### Changing classNames prefix

You can change the default prefix `typography-` by passing configuration options when initializing the plugin:

```ts
// tailwind.config.ts

import sfTypography from '@storefront-ui/typography';

export default {
  content: ['your-components-source-directory/*.ts'],
  plugins: [sfTypography({ utilityPrefix: 'custom-text' })]
};
```

After this change, we can use `custom-text-` as a className prefix:

```html
<h2 class="custom-text-headline-3">Specifications</h2>

<h3 class="custom-text-headline-2">Fabric Content</h3>
<p class="custom-text-text-lg">Cotton blend</p>
```

## Looking for a library to accelerate your ecommerce development?

Make sure to check out StorefrontUI! [Read the documentation at https://docs.storefrontui.io/v2/](https://docs.storefrontui.io/v2/) 🚀
