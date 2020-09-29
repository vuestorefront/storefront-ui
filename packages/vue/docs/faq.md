
### FAQ [WIP]

Currently we are in the process of collecting your frequently asked questions so we can write all of them here for everyone that are interested. 

If you have some questions that someone would appreciate of its answer - please contact [with us](meet-the-team.md) :)

## 1. How can I override Storefront UI global CSS variables?

:::tip Overriding global CSS variables
Use `id` of DOM root element.

- vue-cli use `app`
- nuxt-app use `__nuxt`


```css
#app {
    --font-family-primary: "Raleway", serif;
}
```
```css
#__nuxt {
    --font-family-primary: "Raleway", serif;
}
```
:::

## 2. I can't find any reset file for CSS properties in the project. What should I do? 

:::tip Reset CSS 

 The best way to reset CSS in your project is to add a minimal reset such as:

```css
body {
  margin: 0;
  padding: 0;
}
```

You can expand it, when it is necessary for you. 
Also, keep in mind that Storefront UI components have styles for fonts, spacer's etc. inside. We don't set global styles for `<a>` and `<p>`, you can set global styles by your own according to your project needs.
:::

## 3. I decided to use deprecated features for now. Is it possible to turn off the warnings? 

:::tip Turning off deprecation warnings

Yes! Deprecation warning will show only in development mode and you may find some options to turn off this warnings also in development mode by passing your own environmental variable:
1. Create a file in the root folder `.env`
2. Add variable that we use to detect your decision about turning off deprecation warnings:
`VUE_APP_NO_DEPRECATED_WARNINGS=no-deprecated-warnings`
3. Don't forget to restart serve/dev mode if it is currently running
4. Clear cache if needed

Be sure you are using vue-cli version 3 or above

5. And it's done!
:::

