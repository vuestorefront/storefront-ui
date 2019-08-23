# Customization of Storefront UI components

We put a lot of efforts to let you customize any aspect of the UI.
Let's see how to do this from top to bottom.

## Standard customization (typical usage)

In short words, every component exposes 2 ways of standard customization.

- **props**:
To customize their content.
Suitable for most of the use cases.
Content from props is filling the default markup in slots.

```html
<SfBanner
  title="Lorem ipsum"
  subtitle="Lorem ipsum"
  button-text="Lorem ipsum"
 />
```

- **slots**:
If you want to replace some parts of our markup with your own,
you can easily do this with named slots.

```html
<!-- don't like our markup for the title? just replace it with your own :) -->
 <SfBanner
  subtitle="Lorem ipsum"
  button-text="Lorem ipsum"
 >
   <template v-slot:title>
     <h1> Hello from custom title!</h1>
   </template>
 </SfBanner>
```

### CSS modifiers

Many components have CSS modifier classes, you can find them
in the [stories](https://storybook.storefrontui.io/) of respective components.

Color modifiers are common to all applicable components (**WIP**):
`color-primary`, `color-secondary`, `color-info`, `color-success`,
`color-warning`, `color-danger`.

For example:

```html
<SfButton class="color-success" />
```

```html
<SfAlert class="color-info" :message="'Hello sfui!'" />
```

In addition every component is exposing SCSS variables
responsible for the design part you can override.

## Advanced customization

### Global variables

Most of the styling is made through SCSS variables in global stylesheets.
We use them to setup fonts, HTML elements styling (like h1, p), layout properties and colors.

You can override any of the global variables inside your `sfui.scss`
file that should exist in a root of your app.

To override any of the
[global variables](https://github.com/DivanteLtd/storefront-ui/tree/master/packages/shared/styles/variables),
just create one with the same name in `sfui.scss` and your custom value.

```scss
// This will override primary theme color to 'blue'
$c-primary: blue;
```

You can find all available variables and it's defaults
[here](https://github.com/DivanteLtd/storefront-ui/tree/master/packages/shared/styles/variables).

### Component variables

You can override component-specific SCSS variables in the exactly same way.

```scss
// This will change default button padding for desktop
$button-desktop-padding: 0.5rem 1.7rem !default;
```

Please note that you should always add a `!default` property when overriding component variables.
Otherwise you will also affect scoped modifications you can make for individual components.

### Customization of individual components

If variables are not providing the level of customization you need,
you can also make a new component that is importing individual partials
of the source component from SFUI.

Let's say we want to create `CustomizedButton` component.
We should start with creating new Vue component where we can
import `Button` partials.

```html
<script>
import instance from "@storefront-ui/vue/dist/SfButton.js";

export default {
  ...instance
};
</script>

<template lang="html" src="~@storefront-ui/vue/dist/SfButton.html"></template>

<style lang="scss" scoped>
// scoped only for this component
$c-accent-primary: blue;
@import "~@storefront-ui/vue/dist/SfButton.scss";
</style>
```

Now let's see how we can customize any of it's
parts by still making use of the sfui parts we want to remain untouched.

- **Template**:
Here, we replaced default HTML with our own.
In this example, we replaced default `<button>` with a `<div>`

```html
<template>
  <div class="sf-button"><slot /></div>
</template>
```

- **Vue instance**:
We can make changes directly to imported
Vue instance object (like in example we change it's `name` property)
and add new properties (like here we added data property `message`)

```html
<script>
import instance from "@storefront-ui/vue/dist/SfButton.js";

instance.name = 'CustomizedComponent'

export default {
  ...instance,
  data () {
    return {
      message: "Hello World!"
    }
  }
};
</script>
```

- **Styles**:
We can either modify SCSS variables only for this specific component
or even write completely new stylesheet and get rid of the import.

```html
<style lang="scss" scoped>
$c-primary: blue;
@import "~@storefront-ui/shared/styles/components/SfButton.scss";
</style>
```

**Please note** that `scoped` attribute must be present on `<style>`
tag if you're overriding styles.
Otherwise your local changes will be overwritten by global overrides from `sfui.scss`

### Customization of single components

You can always use pure CSS rules to customize any of the components properties like color, etc.
