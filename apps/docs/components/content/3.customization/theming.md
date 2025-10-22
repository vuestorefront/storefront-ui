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

If your storefront has multiple themes (e.g. regular/low-light mode), we recommend using CSS variables to store your colors. This way you can easily switch between themes by changing the value of the CSS variables.

:::tip Why CSS Variables?

When theming with Tailwind variants, you'd need to essentially duplicate your entire theme for each variant. However, with CSS variables, you can use one class and change your theme globally by changing the CSS variables.

```html
Without CSS Variables, we need to specify the variant and color everywhere.
<div class="bg-primary-500 dark:bg-gray-800" />

With CSS Variables, we can use one class and change the color by changing the CSS variable
<div class="bg-primary-500" />
```
:::

Tailwind since version 4 uses OKLCH as a preferred color notation, pretty good explanation on benefits of OKLCH [can be found here](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl). To customize colors with CSS variables, you can set variables as different color parameters. This syntax is required for [Tailwind's opacity modifier](https://tailwindcss.com/docs/customizing-colors#using-css-variables) syntax to work.

:::warning Hex values will not work with Tailwind's opacity modifier
The color syntax for CSS variable looks like `{lightness} {chroma} {hue}` with a number for each color value. If you use a hex color or CSS's `rgb()` or `oklch()` function, Tailwind will not be able to modify the opacity of the color with Tailwind's `text-primary-400/50` syntax.
:::

The CSS classes for Storefront UI colors follow the pattern of `--colors-{color}-{shade}`. For example, changing `primary-500` for light/dark themes might look like this.

```css
:root {
  --colors-primary-500: 0.741 0.141 296.447;
}

/* this may change depending on how you implement dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --colors-primary-500: 0.95 0.02 295.319;
  }
}
```

<details>
<summary>Full List of CSS Variables</summary>



```css
:root {


  /* Primary */
  --colors-primary-50: 0.98 0.02 156.735;
  --colors-primary-100: 0.945 0.028 162.02;
  --colors-primary-200: 0.887 0.047 164.988;
  --colors-primary-300: 0.804 0.062 163.425;
  --colors-primary-400: 0.727 0.054 162.969;
  --colors-primary-500: 0.634 0.048 162.931;
  --colors-primary-600: 0.525 0.041 162.018;
  --colors-primary-700: 0.466 0.035 162.976;
  --colors-primary-800: 0.365 0.026 164.592;
  --colors-primary-900: 0.27 0.017 163.365;

  /* Secondary */
  --colors-secondary-50: 0.982 0.027 157.322;
  --colors-secondary-100: 0.962 0.05 155.017;
  --colors-secondary-200: 0.899 0.097 153.574;
  --colors-secondary-300: 0.855 0.144 151.03;
  --colors-secondary-400: 0.801 0.196 150.807;
  --colors-secondary-500: 0.716 0.19 150.726;
  --colors-secondary-600: 0.621 0.165 151.142;
  --colors-secondary-700: 0.524 0.135 151.385;
  --colors-secondary-800: 0.401 0.095 152.918;
  --colors-secondary-900: 0.285 0.055 155.368;

  /* Positive */
  --colors-positive-50: 0.982 0.027 157.322;
  --colors-positive-100: 0.962 0.05 155.017;
  --colors-positive-200: 0.899 0.097 153.574;
  --colors-positive-300: 0.855 0.144 151.03;
  --colors-positive-400: 0.801 0.196 150.807;
  --colors-positive-500: 0.716 0.19 150.726;
  --colors-positive-600: 0.621 0.165 151.142;
  --colors-positive-700: 0.524 0.135 151.385;
  --colors-positive-800: 0.401 0.095 152.918;
  --colors-positive-900: 0.285 0.055 155.368;

  /* Negative */
  --colors-negative-50: 0.978 0.011 3.577;
  --colors-negative-100: 0.951 0.026 2.797;
  --colors-negative-200: 0.906 0.049 5.563;
  --colors-negative-300: 0.867 0.07 8.609;
  --colors-negative-400: 0.81 0.11 11.318;
  --colors-negative-500: 0.746 0.156 13.807;
  --colors-negative-600: 0.634 0.215 16.447;
  --colors-negative-700: 0.545 0.215 22.13;
  --colors-negative-800: 0.41 0.16 20.89;
  --colors-negative-900: 0.28 0.09 18.166;

  /* Warning */
  --colors-warning-50: 0.979 0.016 79.212;
  --colors-warning-100: 0.96 0.037 80.566;
  --colors-warning-200: 0.91 0.08 79.414;
  --colors-warning-300: 0.87 0.106 73.914;
  --colors-warning-400: 0.825 0.145 72.253;
  --colors-warning-500: 0.75 0.16 70.078;
  --colors-warning-600: 0.636 0.135 68.487;
  --colors-warning-700: 0.539 0.12 64.869;
  --colors-warning-800: 0.415 0.089 62.994;
  --colors-warning-900: 0.286 0.055 60.071;

  /* Neutral */
  --colors-neutral-50: 0.986 0.002 0;
  --colors-neutral-100: 0.963 0.007 0;
  --colors-neutral-200: 0.904 0.013 156.832;
  --colors-neutral-300: 0.816 0.016 154.297;
  --colors-neutral-400: 0.629 0.016 157.933;
  --colors-neutral-500: 0.53 0.017 157.808;
  --colors-neutral-600: 0.443 0.016 152.174;
  --colors-neutral-700: 0.365 0.016 156.314;
  --colors-neutral-800: 0.282 0.011 156.383;
  --colors-neutral-900: 0.211 0.011 151.165;

  /* Disabled */
  --colors-disabled-50: 0.986 0.002 0;
  --colors-disabled-100: 0.963 0.007 0;
  --colors-disabled-200: 0.904 0.013 156.832;
  --colors-disabled-300: 0.816 0.016 154.297;
  --colors-disabled-400: 0.629 0.016 157.933;
  --colors-disabled-500: 0.53 0.017 157.808;
  --colors-disabled-600: 0.443 0.016 152.174;
  --colors-disabled-700: 0.365 0.016 156.314;
  --colors-disabled-800: 0.282 0.011 156.383;
  --colors-disabled-900: 0.211 0.011 151.165;
}
```

</details>

### Dark mode


### Dark-mode specific colors





Storefront UI comes with a pre-configured dark variant that applies styling based on the selector `&:where(.dark, .dark *)`. This means dark mode styles will be applied when either an element or any of its parents has the `.dark` class. This approach allows for nested dark mode contexts and follows a similar pattern to popular dark mode implementations like Tailwind's dark mode.

Based on it, you can build a dark mode handling in your app using a code snippet from [official Tailwind documentation](https://v3.tailwindcss.com/docs/dark-mode#supporting-system-preference-and-manual-selection).

Storefront UI provides `--sfui-light` and `--sfui-dark` CSS variables that allow you to specify both light and dark mode color variants in a single CSS variable definition. When dark mode is active, `--sfui-dark` will be used, otherwise `--sfui-light` will be used. This allows for a more concise way to define theme colors that change between light and dark modes. For example:
```css
@theme inline {
  --color-primary-50: var(--tw-light, #da373d) var(--tw-dark, #fd96b0);
}
```

In the example below color `0.43 0.11 153.7` (oklch) will be used as `primary-400` color for light color scheme and `0.57 0.12 154.53` when in the dark mode.

```css
@theme inline {
  --colors-primary-400: var(--sfui-light, 0.43 0.11 153.7) var(--sfui-dark, 0.57 0.12 154.53);
}
```


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
