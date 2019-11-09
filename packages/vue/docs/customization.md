# How to customize Storefront UI components

We put a lot of efforts to let you customize any aspect of the Storefront UI.
Let's see how to do this from top to bottom.

[[toc]]
## Global customization 

To share common design principles across whole library we highly rely on SCSS variables. You can override them to shape the look and feel of your project. There are two groups of available SCSS variables in Storefront UI:
- **Global variables** like colors, fonts or sizes are influencing whole library. For example below code in `sfui.scss` will change accent color in your whole project to `blue`.
```scss
$c-accent-primary: blue;
```
- **Component variables** are meant to customize behavior of certain component type (like `SfButton`). You can find them in documents about certain components. For example below code in `sfui.scss` will change default (not modified by other CSS rules) background color of every `SfButton` component in your project to `red`.
```scss
$button-background-color: red;
```
You can override any of those variables in `sfui.scss` file in a root of your project.

:::tip 
You can use `sfui.scss` to create and share completely new design system for Storefront UI
:::

## Per-instance component customization

When you want to modify certain Storefront UI component instance you have a bunch of options:

### Use slots to change small pieces of HTML

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

The same way you can customize any other Storefront UI component. Default markup is no longer a problem for us but sometimes you want to customize your components even heavier. Let's see what Storefront UI can offer in this matter.

### Use Storefront UI partials to build new components

Every Storefront UI component is divided into three parts: Vue template, CSS and JavaScript. All of them are in the separate files. We will call each of them a **partial**.

In Vue we have a concept of Single File Components letting us keep all of the above in one file which means we can **compose** our components from those partials. 

This is how `SfButton.vue` component look like. As you can see it's composed from it's independent partials.

```html
<template lang="html" src="@storefront-ui/vue/src/components/atoms/SfButton.html"></template>
<script src="@storefront-ui/vue/src/components/atoms/SfButton.js"></script>
<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/components/SfButton.scss";
</style>
```
Knowing this you can use Storefront UI components partials as a base for new components so you're writing only the necessary code and take rest parts of it's implemtation from the already existing code. Cool isn't it?  

Let's see some examples to understand possible use cases for this feature:

:::tip Good for performance
Please note that we are not overriding anything but creating new components. Thanks to this avoided parts are not bundled which results in smaller output bundle.
:::

#### Keeping functionality and replacing/overriding CSS

Sometimes you need a component that behaves exactly like other component but looks differently. Let's say we want to create new type of button. We like the way it is done in Storefront UI with `SfButton` so we will take it's API and template (because hey, writing a button is a complex task, isn't it?) and just replace the styles with one we need. To achieve this you should create new component that will inherit template and Javascript from some of the Storefront UI ones.

Let's call it `ButtonCustomized`.

```html
<!-- ButtonCustomized.vue -->
<template lang="html" src="@storefront-ui/vue/src/components/atoms/SfButton.html"></template>
<script src="@storefront-ui/vue/src/components/atoms/SfButton.js"></script>
<style lang="scss" scoped>
.sf-button {
  background: gray;
  color: white;
  padding: 10px 20px;
}
</style>
```
Now you can use this component the same way as you used `SfButton`:
```html
<ButtonCustomized>Hello!</ButtonCustomized>
```
<ButtonCustomized>Hello!</ButtonCustomized>

If you want to override only certain parts of default CSS for your new component you can still import the defaults and override only part of them:
```html
<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/components/SfButton.scss";
.sf-button {
  background-color: gray;
}
</style>
```
Once you're done you can use this component as before
```html
<ButtonCustomized>Hello!</ButtonCustomized>
```
<SfButton style="background-color: gray">Hello!</SfButton>

#### Change component API

TBD

#### Create a new Storefront UI "theme"

TBD