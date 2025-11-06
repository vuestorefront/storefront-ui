# Theming

UI colors are based on 10-tone Tailwind default color palette, normalized so that each color at the same brightness level meets identical minimum accessibility requirements.

To help you build your storefront, Storefront UI adds additional colors following Tailwind's shading conventions. These can be customized customized with CSS variables or Tailwind configuration to match your design system.

## Default Values

In addition to [Tailwind's default colors](https://tailwindcss.com/docs/customizing-colors#default-color-palette), Storefront UI adds the following colors to your theme:

:color-palette

:::tip Want to see our default Tailwind preset?
You can see all of the default colors, classes, variants, and more in our [Tailwind preset](https://github.com/vuestorefront/storefront-ui/blob/v2/packages/config/tailwind/config.css)
:::

### Default outline styles (focus)

You can easily adjust the focus outline styles across your entire storefront by customizing the `default-outline` variables in your global CSS. These variables ensure a consistent focus style throughout your application, and you can update them globally to match your brand or accessibility needs.

For example, if you want a thicker, blue outline with increased spacing, you could do:

```css
:root {
  --default-outline-color: oklch(0.427 0.186 264.834); /* a custom blue color */
  --default-outline-width: 4px;
  --default-outline-offset: 4px;
}
```


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

The CSS classes for Storefront UI colors follow the pattern of `--color-{color}-{shade}`. For example, changing `primary-500` for light/dark themes might look like this.

```css
:root {
  --color-primary-500: 0.741 0.141 296.447;
}

/* this may change depending on how you implement dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary-500: 0.95 0.02 295.319;
  }
}
```

<details>
<summary>Full List of CSS Variables</summary>


```css
:root {
  /* Default values for outline properties (used for focus states) */
  --default-outline-color: var(--color-secondary-600);
  --default-outline-offset: 2px;
  --default-outline-width: 2px;

  /* Primary */
  --color-primary-50: oklch(0.980165 0.0205041 156.723);
  --color-primary-100: oklch(0.944598 0.0280714 162.014);
  --color-primary-200: oklch(0.886553 0.0466985 164.989);
  --color-primary-300: oklch(0.803863 0.0615073 163.433);
  --color-primary-400: oklch(0.726997 0.0544955 162.973);
  --color-primary-500: oklch(0.63414 0.0482896 162.927);
  --color-primary-600: oklch(0.524633 0.0411815 162.014);
  --color-primary-700: oklch(0.465676 0.0347951 162.989);
  --color-primary-800: oklch(0.365357 0.025772 164.59);
  --color-primary-900: oklch(0.269551 0.0167404 163.37);

  /* Secondary */
  --color-secondary-50: oklch(0.981772 0.0270107 157.305);
  --color-secondary-100: oklch(0.961651 0.0499168 155.006);
  --color-secondary-200: oklch(0.898695 0.0969988 153.575);
  --color-secondary-300: oklch(0.854662 0.144278 151.034);
  --color-secondary-400: oklch(0.800846 0.196195 150.809);
  --color-secondary-500: oklch(0.716132 0.190176 150.725);
  --color-secondary-600: oklch(0.620991 0.164907 151.143);
  --color-secondary-700: oklch(0.523649 0.13546 151.384);
  --color-secondary-800: oklch(0.40077 0.0945497 152.915);
  --color-secondary-900: oklch(0.285096 0.0548596 155.371);

  /* Positive */
  --color-positive-50: oklch(0.981772 0.0270107 157.305);
  --color-positive-100: oklch(0.961651 0.0499168 155.006);
  --color-positive-200: oklch(0.898695 0.0969988 153.575);
  --color-positive-300: oklch(0.854662 0.144278 151.034);
  --color-positive-400: oklch(0.800846 0.196195 150.809);
  --color-positive-500: oklch(0.716132 0.190176 150.725);
  --color-positive-600: oklch(0.620991 0.164907 151.143);
  --color-positive-700: oklch(0.523649 0.13546 151.384);
  --color-positive-800: oklch(0.40077 0.0945497 152.915);
  --color-positive-900: oklch(0.285096 0.0548596 155.371);

  /* Negative */
  --color-negative-50: oklch(0.97842 0.0110926 3.58502);
  --color-negative-100: oklch(0.950811 0.0259569 2.81641);
  --color-negative-200: oklch(0.905643 0.0492912 5.57236);
  --color-negative-300: oklch(0.867244 0.0697169 8.61502);
  --color-negative-400: oklch(0.810255 0.109846 11.3178);
  --color-negative-500: oklch(0.746364 0.15595 13.8107);
  --color-negative-600: oklch(0.634433 0.215119 16.4453);
  --color-negative-700: oklch(0.544879 0.214877 22.1307);
  --color-negative-800: oklch(0.410286 0.159974 20.8879);
  --color-negative-900: oklch(0.279959 0.0904061 18.1682);

  /* Warning */
  --color-warning-50: oklch(0.978524 0.0163972 79.1756);
  --color-warning-100: oklch(0.960444 0.0366282 80.5214);
  --color-warning-200: oklch(0.910044 0.079927 79.3929);
  --color-warning-300: oklch(0.869878 0.105541 73.91);
  --color-warning-400: oklch(0.824998 0.145165 72.2519);
  --color-warning-500: oklch(0.750127 0.160009 70.0833);
  --color-warning-600: oklch(0.63565 0.134731 68.4887);
  --color-warning-700: oklch(0.538932 0.120035 64.8673);
  --color-warning-800: oklch(0.414554 0.0894398 62.9947);
  --color-warning-900: oklch(0.286053 0.0552756 60.0771);

  /* Neutral */
  --color-neutral-50: oklch(0.986252 0.00245284 164.375);
  --color-neutral-100: oklch(0.962452 0.00658519 159.784);
  --color-neutral-200: oklch(0.90417 0.0125382 156.831);
  --color-neutral-300: oklch(0.815695 0.0163149 154.295);
  --color-neutral-400: oklch(0.62887 0.0164423 157.928);
  --color-neutral-500: oklch(0.530109 0.017136 157.798);
  --color-neutral-600: oklch(0.442872 0.016032 152.177);
  --color-neutral-700: oklch(0.364935 0.0156449 156.31);
  --color-neutral-800: oklch(0.281681 0.0111333 156.387);
  --color-neutral-900: oklch(0.210975 0.0108426 151.158);

  /* Disabled */
  --color-disabled-50: oklch(0.986252 0.00245284 164.375 / 0.5);
  --color-disabled-100: oklch(0.962452 0.00658519 159.784 / 0.5);
  --color-disabled-200: oklch(0.90417 0.0125382 156.831 / 0.5);
  --color-disabled-300: oklch(0.815695 0.0163149 154.295 / 0.5);
  --color-disabled-400: oklch(0.62887 0.0164423 157.928 / 0.5);
  --color-disabled-500: oklch(0.530109 0.017136 157.798 / 0.5);
  --color-disabled-600: oklch(0.442872 0.016032 152.177 / 0.5);
  --color-disabled-700: oklch(0.364935 0.0156449 156.31 / 0.5);
  --color-disabled-800: oklch(0.281681 0.0111333 156.387 / 0.5);
  --color-disabled-900: oklch(0.210975 0.0108426 151.158 / 0.5);
}
```

</details>

### Dark mode

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
  --color-primary-400: var(--sfui-light, 0.43 0.11 153.7) var(--sfui-dark, 0.57 0.12 154.53);
}
```


### Tailwind Configuration

If you don't need to support multiple themes, or if you'd prefer to use Tailwind variants to implement your themes, you can customize Storefront UI's on the build time using [Tailwind `@theme` configuration directive](https://tailwindcss.com/docs/theme).

```css
/* ... */
@theme {
  --color-primary-50: oklch(0.98 0.01 0);
  --color-primary-100: oklch(0.96 0.02 252.98);
  --color-primary-200: oklch(0.9 0.05 254.93);
  --color-primary-300: oklch(0.84 0.08 255.92);
  --color-primary-400: oklch(0.71 0.15 261.78);
  --color-primary-500: oklch(0.6 0.22 262.58);
  --color-primary-600: oklch(0.56 0.2 262.48);
  --color-primary-700: oklch(0.47 0.18 265.04);
  --color-primary-800: oklch(0.4 0.15 264.63);
  --color-primary-900: oklch(0.33 0.12 263.84);
}
/* ... */
```

:::read-more
To learn more about the different ways to declare colors in Tailwind, check out the [Tailwind documentation](https://tailwindcss.com/docs/theme).
:::

## Custom Tailwind Variants

Our Tailwind configuration includes several custom variants designed to simplify your workflow.

### `focus-visible-within` Custom Variant

We've added a `focus-visible-within` custom variant to help you visually indicate when any nested child element is focus-visible. This is especially useful for styling components that require a clear focus state, even if the focus is within a child element.

You can use this variant just like any other Tailwind variant. For example: `focus-visible-within:bg-primary-800`.
