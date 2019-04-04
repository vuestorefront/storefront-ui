# Working with alpaca

We agreed with Snowdog to create common format for both Alpaca and StorefrontUI to make it easier to use both.

This is why it's perfectly fine to use alpaca components as a base for SFUI components. The idea si to pick the one that suits us and customize it according to [the same rules](https://github.com/DivanteLtd/storefront-ui/blob/master/docs/customization.md) we have in SFUI.
The customized alpaca component is a new SfUI one.

- Here is [Alpaca Storybook](https://alpaca-storybook-git-develop.snowdog1.now.sh/?path=/story/elements-breadcrumbs--default), start here to check if there is a component you can use it for base
- Then check [their repo](https://github.com/SnowdogApps/alpaca-storybook/tree/develop/components/src) to know which properties to override


# Dealing with templates

CSS and HTML markup should always be copied (never imported) and alpaca classes should be repalced with same ones but prefixed with `sf-`

For example this alpaca template:

````html
<div class="info"></div>
````
Should be copied and changed to:
````html
<div class="sf-info"></div>
````

# Dealing with SCSS

SCSS should never be directly imported in `<style>` tag. You should create standard `sf-` prefixed classes (used in markup) and if it makes sense import alpaca styles with SCSS `@extend`.

````css
.sf-message {
  @extend .message
}
````
or just copy them and adjust naming.

read more about SCSS inheritance [here](https://sass-lang.com/guide)
