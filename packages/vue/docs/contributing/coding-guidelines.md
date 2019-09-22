# Coding guidelines

Below you can find rules that needs to be applied into every component from Storefront UI to ensure that they are highly customizable, follow common format and coding standards.

## Coding conventions

The good news is that for basic coding, we have `prettier` run automatically on each commit made. Besides we do have `eslint` check enabled, so you can know exactly where you code doesn't fit our conventions.

In general, this is an open source project, hence:

* Readability is extremly important. Please consider the next random developer who will read your code, and keep it simple for them.
* No complex logic in `template` view. If there is, please use `computed` properties.

## Design patterns

We use [**atomic design**](http://bradfrost.com/blog/post/atomic-web-design/) concept for grouping components (**without** templates and pages). 

![Atomic design](https://res.cloudinary.com/mayashavin/image/upload/h_150/v1567776459/StorefrontUI/atomic-design.png)

In general, there are three groups of components:
* **Atoms** - Atoms are **the most basic and abstract** components for building other components, such as color palletes, icons, button, input, etc.
* **Molecules** - Molecules are components built from **groups of atoms bonded together**, take on their own properties and serve as the backbone of the design systems. Some good examples are a banner, gallery, menu item, etc.
* **Organisms** - Organisms are complex and distinct components built from **groups of molecules** joined together, such as header, grid, accordions, etc.

:::tip IDENTIFY COMPONENT GROUP
Identifying component group is not easy, hence we save you the trouble. In the component request issue, the group directory of the component will be mentioned as **part of the requirements**.
:::

## Component rules

### Naming convention

We follow **Pascal Case** for component naming and with a **prefix** `Sf` - hence the naming formula will be:

```
Sf<ComponentName>
```

### Component's file structure

1. Each component should be **divided into parts**, which are separate files. Each file should be named in the format `Sf<ComponentName>.<extension>`:

```
./<ComponentName>/
|__Sf<ComponentName>.vue
|__Sf<ComponentName>.html
|__Sf<ComponentName>.js
|__Sf<ComponentName>.spec.ts
|__Sf<ComponentName>.stories.js
```

The following file **should be located in the same** component's directory:
* `.vue` - imports relevant `.html` for template, `.js` for instance JavaScript code and `.scss` for CSS styling part for building the component.
```html
<script src="./SfIcon.js"></script>
<template lang="html" src="./SfIcon.html"></template>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfIcon.scss";
</style>
```

* `html` - template markup
* `js` - component instance logic, in JavaScript.
* `spec.ts` - unit test for component, in TypeScript.
* `stories.js` - [Storybook stories](https://storybook.js.org/) for the component.

:::warning
For the purpose of sharing our component design between projects, all the **`.scss` files** of the components will not reside within each component's directory, but **will be in `shared/styles/components/`**. Naming convention is the **same** as above.
:::
 
### CSS Rules

#### CSS Naming convention

We **strictly** follow [BEMs](http://getbem.com/introduction/) for naming SCSS modifiers and CSS classes. And the CSS class names should **match** `slot`'s names.

```css
sf-<component>__<block>--modifier
```

For example: `.sf-gallery__item--selected`

:::warning
Keep up to 2 BEM levels (elements) at **most**.
:::


### CSS structure

1. Always import a global variables at the **top**.
2. Start with mobile view and write **mobile-first** CSS. It means that media queries should be **only** for a desktop view.
3. **DO NOT** use **scoped** styles.
4. Use global css variables **whenever it's possible**.
5. Component-specific SCSS variables should be **at the top** of the component `.scss` file.

:::warning
Use use global SCSS variables inside SCSS variables for common properties like colors. All the global variables are found in `shared/styles/global/_variables/`.
:::

6. Properties that **may broke the design** in future changes **shouldn't be customizable**. 

:::tip 
A **safe** set of properties to customize are: `font-size`, `text-align`, `color`, `background-color`, `background-image`, `padding` (_not always_), `margin` (_not always_), `text-transform`, `font-weight`, `font-family`, `background-size`, `align-content` (_not always_), `align-items`(_not always_)
:::

7. **Provide** CSS modifiers for most common modifications.
8. **DO NOT** use any outer positioning for components (like outer margins). The way they're positioned in layout should be determined in outer environment.

:::tip SAMLE CSS FILE
[Here](https://github.com/DivanteLtd/storefront-ui/blob/master/src/components/molecules/SfBanner/SfBanner.scss) you can find an example of properly styled component with all rules applied.
:::

### Template rules

1. We use **slots** and **props** for content composition. 
* Props should be used to fill **default** slots content
* Slots are meant for markup **replacement**. In other words every default markup **should be replacable** with slots. 

2. One slot is usually a **single** BEM element.
3. Make slots **optional** if it's possible.
4. **DO NOT** use props for setting properties that can be set by css (except for background images).
5. **Provide a default slot** (usually empty) for a **full** customization support.

:::warning
Try to make components as customizable as possible **without complicating** them. Think about the parts that are usually customized and allow simple way to change their look.
:::

## Unit tests

The minimum set of tests should contain component:
- **External API:** `props`, `slots`, `$events`
- **Internal API:** `methods`

## Stories for Storybook

Component stories should contain at least these following stories:
1. Default for all props, with props and CSS modifiers fillable as knobs.
2. One for every customisable `slot` in the component

:::tip
A good example is [SfBanner stories](https://github.com/DivanteLtd/storefront-ui/blob/master/src/components/molecules/SfBanner/SfBanner.stories.js).
:::

You can learn more about Storybook syntax and how to use [here](https://storybook.js.org).

Check [our storybook](http://storefrontui-storybook.netlify.com) for examples.