# How to customize Storefront UI components

We put a lot of efforts to let you customize any aspect of the Storefront UI.
Let's see how to do this from top to bottom.

[[toc]]
## Global customization

Storefront UI is extensively using SCSS variables to shape the look of it's components.
You can override any of those variables in `sfui.scss` file in a root of your project.

You can find available global variables [here] and component variables in their docs.

## Per-component customization

If you want to modify certain Storefront UI component you have a bunch of options:

### Use slots to change small pieces of HTML

Almost every Storefront UI component is divided into sections (following BEM convention). Each of this sections is wrapped into a Vue slot. If you want to change some parts of certain components HTML markup you can just use those slots.

Take a look at below example:

### Use partials to change whatever you want

Every Storefront UI component is divided into three parts: HTML, CSS and JavaScript. All of them are in the separate files.

In Vue we have a concept of Single File Components letting us keep all of the above in one file which means we can **compose** our komponents from those parts. 

:::tip Important side note

Instead of directly providing HTML, CSS or JavaScript in SFC you can import them:
```html
<template src="template.html" lang="html"></template>
<script src="script.js"></script>
<style lang="SCSS">
@import 'styles';
</style>
```
Storefront UI partials customization system relios on this feature.
:::
