---
layout: DefaultLayout
hideBreadcrumbs: true
---

# Theming

To help you build your storefront, Storefront UI adds additional colors following Tailwind's shading conventions. These can be customized customized with CSS variables or Tailwind configuration to match your design system. 

## Default Values

In addition to [Tailwind's default colors](https://tailwindcss.com/docs/customizing-colors#default-color-palette), Storefront UI adds the following colors to your theme:

<ColorPalette/>

:::tip Want to see our default Tailwind preset?
You can see all of the default colors, classes, variants, and more in our [Tailwind preset](https://github.com/vuestorefront/storefront-ui/blob/v2/packages/config/tailwind/index.ts)
:::


## Customizing colors

### CSS Variables

If your storefront has multiple themes (e.g. light/dark mode), we recommend using CSS variables to store your colors. This way you can easily switch between themes by changing the value of the CSS variables.

:::tip Why CSS Variables?

When theming with Tailwind variants, you'd need to essentially duplicate your entire theme for each variant. However, with CSS variables, you can use one class and change your theme globally by changing the CSS variables.

```html
Without CSS Variables, we need to specify the variant and color everywhere.
<div class="bg-primary-500 dark:bg-gray-800" />

With CSS Variables, we can use one class and change the color by changing the CSS variable
<div class="bg-primary-500" />
```
:::

To customize colors with CSS variables, you can set variables as different color channels. This syntax is required for [Tailwind's opacity modifier](https://tailwindcss.com/docs/customizing-colors#using-css-variables) syntax to work.

:::warning Hex values will not work with Tailwind's opacity modifier

The color channel syntax looks like `{red} {green} {blue}` with a number for each color value. If you use a hex color or CSS's `rgb()` function, Tailwind will not be able to modify the opacity of the color with Tailwind's `text-primary-400/100` syntax.
:::

The CSS classes for Storefront UI colors follow the pattern of `--colors-{color}-{shade}`. For example, changing `primary-500` for light/dark themes might look like this.

```css
:root {
  --colors-primary-500: 10 171 69;
}

/* this may change depending on how you implement dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --colors-primary-500: 240 253 244;
  }
}
```

<details>
<summary>Full List of CSS Variables</summary>

<SourceCode>

```css
:root {
  /* Primary */
  --colors-primary-50: 240 253 244;
  --colors-primary-100: 220 252 231;
  --colors-primary-200: 187 247 208;
  --colors-primary-300: 134 239 172;
  --colors-primary-400: 74 222 128;
  --colors-primary-500: 2 198 82;
  --colors-primary-600: 10 171 69;
  --colors-primary-700: 1 137 55;
  --colors-primary-800: 22 101 52;
  --colors-primary-900: 20 83 45;

  /* Secondary */
  --colors-secondary-50: 245 243 255;
  --colors-secondary-100: 237 233 254;
  --colors-secondary-200: 221 214 254;
  --colors-secondary-300: 196 181 253;
  --colors-secondary-400: 167 139 250;
  --colors-secondary-500: 135 92 246;
  --colors-secondary-600: 111 64 236;
  --colors-secondary-700: 97 49 221;
  --colors-secondary-800: 83 30 211;
  --colors-secondary-900: 68 21 178;

  /* Positive */
  --colors-positive-50: 240 253 244;
  --colors-positive-100: 220 252 231;
  --colors-positive-200: 187 247 208;
  --colors-positive-300: 134 239 172;
  --colors-positive-400: 74 222 128;
  --colors-positive-500: 2 198 82;
  --colors-positive-600: 10 171 69;
  --colors-positive-700: 1 137 55;
  --colors-positive-800: 22 101 52;
  --colors-positive-900: 20 83 45;

  /* Negative */
  --colors-negative-50: 255 241 242;
  --colors-negative-100: 255 228 230;
  --colors-negative-200: 254 205 211;
  --colors-negative-300: 253 164 175;
  --colors-negative-400: 251 113 133;
  --colors-negative-500: 244 63 94;
  --colors-negative-600: 225 29 72;
  --colors-negative-700: 190 18 60;
  --colors-negative-800: 159 18 57;
  --colors-negative-900: 136 19 55 1;

  /* Warning */
  --colors-warning-50: 254 252 232;
  --colors-warning-100: 254 249 195;
  --colors-warning-200: 254 240 138;
  --colors-warning-300: 253 224 71;
  --colors-warning-400: 250 204 21;
  --colors-warning-500: 234 179 8;
  --colors-warning-600: 202 138 4;
  --colors-warning-700: 161 98 7;
  --colors-warning-800: 133 77 14;
  --colors-warning-900: 113 63 18;

  /* Neutral */
  --colors-neutral-50: 250 250 250;
  --colors-neutral-100: 244 244 245;
  --colors-neutral-200: 228 228 231;
  --colors-neutral-300: 212 212 216;
  --colors-neutral-400: 161 161 170;
  --colors-neutral-500: 113 113 122;
  --colors-neutral-600: 82 82 91;
  --colors-neutral-700: 63 63 70;
  --colors-neutral-800: 39 39 42;
  --colors-neutral-900: 24 24 27;

  /* Disabled */
  --colors-disabled-50: 250 250 250;
  --colors-disabled-100: 244 244 245;
  --colors-disabled-200: 228 228 231;
  --colors-disabled-300: 212 212 216;
  --colors-disabled-400: 161 161 170;
  --colors-disabled-500: 113 113 122;
  --colors-disabled-600: 82 82 91;
  --colors-disabled-700: 63 63 70;
  --colors-disabled-800: 39 39 42;
  --colors-disabled-900: 24 24 27;
}
```
</SourceCode>
</details>


### Tailwind Configuration

If you don't need to support multiple themes, or if you'd prefer to use Tailwind variants to implement your themes, you can customize Storefront UI's colors inside of your Tailwind configuration.

<SourceCode>

```js
export default {
  //...
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f9ff',
          100: '#e9f3ff',
          200: '#c8e0ff',
          300: '#a6ccff',
          400: '#6ea1ff',
          500: '#3375ff',
          600: '#2e6ae6',
          700: '#264ebf',
          800: '#1d3f99',
          900: '#132f72',
        }
      },
    },
  },
  //...
};
```
</SourceCode>

:::read-more
To learn more about the different ways to declare colors in Tailwind, check out the [Tailwind documentation](https://tailwindcss.com/docs/customizing-colors#using-custom-colors).
:::