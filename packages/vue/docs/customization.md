# How to customize Storefront UI components

One of the key goals of Storefront Ui is to provide you with a ready to use design system with which you can recreate almost every design. 

Below you can read how you can customize different aspects of its styles and components.

[[toc]]
## Global styles
Usually when you're designing a new app you're starting with a style guide. A style guide is a set of common design standards and principles used in a whole project. It usually covers things such as typography or colors. 

We can represent style guide as a set of global CSS variables. By using them we are abstracting visual configuration from html and CSS structure tod declarative variables. Thank to this approach we can ship updates to Storefront UI without breaking your projects.

You can override them to shape the look and feel of your project. There are two groups of available CSS variables in Storefront UI:
- **Global** variables are representing project style guide. They are setting up global properties like like colors or typography.  For example below code in `sfui.scss` will change primary font in your whole project to `Raleway`.
```css
:root {
    --body-font-family-primary: 'Raleway', serif;
}
```
- **Component-specific** variables are meant to customize behavior of certain component type (like `SfButton`). You can find them in documents about certain components. For example below code in `sfui.scss` will change default (not modified by other CSS rules) background color of every `SfButton` component in your project to `red`.
```css
:root {
    --button-background-color: red;
}
```
You can override any of those variables in `sfui.scss` file in a root of your project.

:::tip 
You can use `sfui.scss` to create and share completely new design system for Storefront UI
:::

### Color Variables

There are two kinds of color variables, **Internal colors** and **Theme Variables**.

**Internal colors** should NOT be used directly for theming or component styles. They are only used to generate theme color variables.

There are some kinds of **Theme Variables**:

* **Body and text defaults**: They are used to define body, text and links colors.
* **Brand Colors**:
    * **Primary**:  Should be used to drive attention to the main tasks that should be done while using the app. It is meant to be used in major interactive elements of the page.
    * **Secondary**: Should be used to drive attention in the elements with relevant info, but where the user is not intended to take action.
* **Base colors**: Light, Gray and Dark.
* **Context colors**: Info, Success, Warning and Danger.

#### Internal color variables generation

Internal color variables are defined using a SASS mixin that generates all the internal color variants.

This code:

```scss
@include generate-color-variants(--_c-green-primary, #5fce7d);
``` 

will generate the following variables:

```css
--_c-green-primary: #5fce7d;
--_c-green-primary-base: 95, 206, 125;
--_c-green-primary-lighten: #73d48d;
--_c-green-primary-darken: #4bc86d;
```

This variables will be used to define the Theme color variables.

#### Theme color variables definition

Once we have generated all the internal color variants, we can assign them to the Theme color variables. For example:

```scss
@include assign-color-variants(--c-primary, --_c-green-primary);
``` 

This code will generate the following variables:

```css
--c-primary: var(--_c-green-primary);
--c-primary-base: var(--_c-green-primary-base);
--c-primary-lighten: var(--_c-green-primary-lighten);
--c-primary-darken: var(--_c-green-primary-darken);
```

#### Color variables override

We can override color variables using `sfui.scss` file. For example:

```scss
// Internal color variables
@include generate-color-variants(--_c-blue-primary, #0284fe);
/* Brand colors */
// Primary
@include assign-color-variants(--c-primary, --_c-blue-primary);
```

## Per-instance component customization

Even though global and component-specific variables are providing decent level of customization

Almost every Storefront UI component is divided into sections (following BEM convention). Each of them is wrapped into a Vue slot to let you replace parts of it's HTML. 

Take a look at below example. This is how `SfPagination` component look like out of the box:

<SfPagination :current="1" :total="20" :visible="5"  @click="page => currentPage = page"/>

````html

<SfPagination 
  :current="currentPage" 
  :total="20" 
  :visible="5"  
  @click="page => currentPage = page"
/>

````

Let's say we want to display `prev` and `next` buttons instead of default arrow icons. 

In component documentation we can read that it has `next` and `prev` slots. We can use them to add our custom behavior. For every slot you have access to methods and data properties related to it's functionality via slot scope. In our case it would be `go` function that will move forward/backward and `isDisabled` property that tells us if there is a next or previous page.
We can use the latest to disable buttons when they're not usable.

```html
<SfPagination :current="currentPage" :total="20" :visible="5"  @click="page => currentPage = page">
  <template #prev="{ isDisabled, go }">
    <button @click="go()" :disabled="isDisabled ? true : false">prev</button>
  </template>
  <template #next="{ isDisabled, go }">
    <button @click="go()" :disabled="isDisabled ? true : false">next</button>
  </template>
</SfPagination>
```
This is a result of above modification:

<PaginationCustomized />

The same way you can customize any other Storefront UI component. Default markup is no longer a problem for us!
