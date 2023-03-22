---
layout: DefaultLayout
hideBreadcrumbs: true
---

# Overriding Default Styles

By default, Storefront UI comes equipped with some styles that can help accelerate your initial component development. While this can be a great way to build something beautiful quickly, there will be times when you'll want to override them to match your design system.

## Customization Methods

### Important Classes

The fastest way to override default styles is to pass additional Tailwind utilities with the important (`!`) modifier. This will override any default styles and ensure that your styles are applied.

For example, the `SfLoaderCircular` component defaults to using `primary-700` as the color for the loader. If you wanted to change this, you can add important classes when using the component.

<Showcase showcase-name="LoaderCircular/LoaderCircularColors" :show-source="false">
</Showcase>

<SourceCode>
<!-- vue -->
<<<../../preview/nuxt/pages/showcases/LoaderCircular/LoaderCircularColors.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/LoaderCircular/LoaderCircularColors.tsx
<!-- end react -->
</SourceCode>



### Tailwind Configuration

For global changes, you can customize the Tailwind configuration to make changes to some of our default styles.

The most common use case for this is to change the default color palette to better match your design. Storefront UI adds additional colors to your Tailwind configuration, which can help you build out multiple themes for your site.

:::read-more
Learn all about Storefront UI's color palette and how to customize it in our [Theming](/components/customization/theming) guide.
:::


### Extracting Base Components

If you want to make more extensive changes to the default styles, you can extract any of our base components into your project and customize them to your needs. 

On each of our component pages, you'll find a tab containing the source code for the component. You can copy this code into your project and customize it as needed.

## Recipes

### Customizing the Default Outline

Outlines are used to indicate focus on interactive elements. This is especially important for accessibility, as it allows people navigating your site with a keyboard to know where they are on the page.

By default, Storefront UI applies consistent outline styles on all input elements. If you want to change this, you can do so by setting the different `outline` properties in your Tailwind configuration.

```ts
// tailwind.config.ts
export default {
  theme: {
    extend: {
      outlineColor: {
        DEFAULT: '#ff00ff', 
      },
      outlineOffset: {
        DEFAULT: '0px',
      },
      outlineWidth: {
        DEFAULT: '2px',
      },
    }
  }
}
```