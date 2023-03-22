---
layout: DefaultLayout
hideBreadcrumbs: true
---

# Typography

::: warning This guide is for the Storefront UI Typography plugin.
If you're only looking to change font families, you can do so directly in your Tailwind Config file. See the [Tailwind > Font Family Docs](https://tailwindcss.com/docs/font-family#customizing-your-theme) for more details.
:::

In many projects, your design system will require a standarized range of typography palette. From headings and body texts to elements like labels - everything follows the same palette of font styles, line-heights, and more. 

While Tailwind is great when it comes to dealing with atomic styling we believe that **having typography-related classes that quickly match your design system leads to a better developer experience**.

That's why we've built the `@storefront-ui/typography` Tailwind plugin - to bring typography systems back to the Tailwind world!

## Installation

You can add the Typography plugin to your project by installing it as a dependency and then adding it as a plugin in your `tailwind.config.ts` file.
```bash
# npm
npm i -D @storefront-ui/typography

# yarn
yarn add -D @storefront-ui/typography

#pnpm
pnpm add -D @storefront-ui/typography
```

```ts
// tailwind.config.ts
import sfTypography from '@storefront-ui/typography';

export default {
  //...
  plugins: [sfTypography]
};
```

## Font Families

The Typography plugin uses Tailwind font-family classes to allow you to specify fonts for your storefront's headings and body text. By default, `headline` styles use a `heading` font family and the rest of the application while use your default Tailwind font (which `@tailwind base` sets to `sans`).

You can set these font families in your `tailwind.config.ts` file:

```ts
export default {
  theme: {
    fontFamily: {
      'sans': ['Inter', 'system-ui', ...],
      'heading': ['Arial', 'Georgia', ...],
    }
  }
}
```

:::read-more
Learn more about customizing font families in the [Tailwind > Font Family Docs](https://tailwindcss.com/docs/font-family#customizing-your-theme).
:::

## Usage

Every class defined from the Typography plugin can be used in your template with a `typography-` prefix.

```html
<h2 class="typography-headline-2">Specifications</h2>
<h3 class="typography-headline-3">Fabric Content</h3>
<p class="typography-text-lg">Cotton blend</p>
<h3 class="typography-headline-2">Sleeve Length Style</h3>
<p class="typography-text-lg">Short sleeve</p>
```

Out of the box, we provide several sets of typography classes for common use cases. These can help you accelerate your development process by helping you quickly match your design system to a set of reusable utility classes.

Each utility is shorthand way to apply a combination of Tailwind classes or styles to your elements. For example, the default `typography-headline-1` class will apply the same styles as `.text-6xl.leading-extra-tight.font-headings`.

This means that you can use one typography class throughout your app, and if you need to update typography styles, you only have make changes in one place.

## List of Classes

:::tip You can change the prefix of these classes.
By default, the plugin uses `typography-` as a prefix for all classes. You can change it by passing the `utilityPrefix` option when initializing the plugin. See the [Changing the class prefix](#changing-the-class-prefix) section for more details.
:::

<TypographyList />

## Customization

### Extending the Default Theme

To add/edit the default styles for a typography class, you can configure the `extend` property in your `theme`.

```ts
// tailwind.config.ts

import sfTypography from '@storefront-ui/typography';

export default {
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

### Overriding default theme

You can also specify your own, fully custom typography palette by passing values to the `theme` without extending it. This will completely override the default Typography plugin utilities, so you'll have to specify all text styles, variants, and sizes.

```ts
// tailwind.config.ts

import sfTypography from '@storefront-ui/typography';

export default {
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

### Changing the class prefix

You can change the default prefix `typography-` by passing the `utilityPrefix` option when initializing the plugin.

```ts
// tailwind.config.ts

import sfTypography from '@storefront-ui/typography';

export default {
  plugins: [sfTypography({ utilityPrefix: 'custom-text' })]
};
```

After this change, each typography class will have a prefix of `custom-text-`.

```html
<h2 class="custom-text-headline-3">Specifications</h2>
<h3 class="custom-text-headline-2">Fabric Content</h3>
<p class="custom-text-text-lg">Cotton blend</p>
```