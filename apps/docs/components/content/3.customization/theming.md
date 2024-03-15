# Theming

UI colors are based on 10-tone Tailwind default color palette, normalized so that each color at the same brightness level meets identical minimum accessibility requirements.

To help you build your storefront, Storefront UI adds additional colors following Tailwind's shading conventions. These can be customized customized with CSS variables or Tailwind configuration to match your design system.

## Default Values

In addition to [Tailwind's default colors](https://tailwindcss.com/docs/customizing-colors#default-color-palette), Storefront UI adds the following colors to your theme:

:color-palette

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



```css
:root {
  /* Primary */
  --colors-primary-50: 235 255 242;
  --colors-primary-100: 217 253 228;
  --colors-primary-200: 171 241 192;
  --colors-primary-300: 130 234 158;
  --colors-primary-400: 60 224 120;
  --colors-primary-500: 19 195 96;
  --colors-primary-600: 7 161 79;
  --colors-primary-700: 13 127 63;
  --colors-primary-800: 16 86 46;
  --colors-primary-900: 15 50 30;

  /* Secondary */
  --colors-secondary-50: 247 245 253;
  --colors-secondary-100: 239 236 251;
  --colors-secondary-200: 225 218 246;
  --colors-secondary-300: 216 203 245;
  --colors-secondary-400: 198 177 246;
  --colors-secondary-500: 180 151 249;
  --colors-secondary-600: 151 111 238;
  --colors-secondary-700: 119 79 209;
  --colors-secondary-800: 82 52 153;
  --colors-secondary-900: 48 32 86;

  /* Positive */
  --colors-positive-50: 235 255 242;
  --colors-positive-100: 217 253 228;
  --colors-positive-200: 171 241 192;
  --colors-positive-300: 130 234 158;
  --colors-positive-400: 60 224 120;
  --colors-positive-500: 19 195 96;
  --colors-positive-600: 7 161 79;
  --colors-positive-700: 13 127 63;
  --colors-positive-800: 16 86 46;
  --colors-positive-900: 15 50 30;

  /* Negative */
  --colors-negative-50: 255 245 247;
  --colors-negative-100: 255 232 237;
  --colors-negative-200: 254 211 219;
  --colors-negative-300: 253 193 202;
  --colors-negative-400: 255 163 175;
  --colors-negative-500: 255 127 143;
  --colors-negative-600: 240 59 91;
  --colors-negative-700: 208 13 48;
  --colors-negative-800: 141 8 33;
  --colors-negative-900: 76 15 23;

  /* Warning */
  --colors-warning-50: 254 247 236;
  --colors-warning-100: 255 238 211;
  --colors-warning-200: 254 220 165;
  --colors-warning-300: 254 202 132;
  --colors-warning-400: 255 181 77;
  --colors-warning-500: 237 153 14;
  --colors-warning-600: 191 121 17;
  --colors-warning-700: 157 93 3;
  --colors-warning-800: 109 63 9;
  --colors-warning-900: 62 35 10;

  /* Neutral */
  --colors-neutral-50: 249 251 250;
  --colors-neutral-100: 239 244 241;
  --colors-neutral-200: 217 226 220;
  --colors-neutral-300: 187 198 190;
  --colors-neutral-400: 129 140 133;
  --colors-neutral-500: 100 111 104;
  --colors-neutral-600: 77 86 79;
  --colors-neutral-700: 56 65 59;
  --colors-neutral-800: 37 43 39;
  --colors-neutral-900: 21 26 22;

  /* Disabled */
  --colors-disabled-50: 249 251 250;
  --colors-disabled-100: 239 244 241;
  --colors-disabled-200: 217 226 220;
  --colors-disabled-300: 187 198 190;
  --colors-disabled-400: 129 140 133;
  --colors-disabled-500: 100 111 104;
  --colors-disabled-600: 77 86 79;
  --colors-disabled-700: 56 65 59;
  --colors-disabled-800: 37 43 39;
  --colors-disabled-900: 21 26 22;
}
```

</details>


### Tailwind Configuration

If you don't need to support multiple themes, or if you'd prefer to use Tailwind variants to implement your themes, you can customize Storefront UI's colors inside of your Tailwind configuration.



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


:::read-more
To learn more about the different ways to declare colors in Tailwind, check out the [Tailwind documentation](https://tailwindcss.com/docs/customizing-colors#using-custom-colors).
:::
