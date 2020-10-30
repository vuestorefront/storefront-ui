
# Frequently Asked Questions (FAQs)  [WIP]

Currently we are in the process of collecting your frequently asked questions so we can write all of them here for everyone that are interested.

If you have some questions that someone would appreciate of its answer - please [contact us](meet-the-team.md) :)

## 1. I got problem working with Vue Storefront (APIs, Capybara theme, etc.). Please help

Despit the fact that our name is similar (both are Storefront) and both projects are from the same creator, StorefrontUI is independent project and our team, unfortunately, won't have the right answer for issues related to Vue Storefront (VSF). Please [visit the VSF team's Slack channel](https://vuestorefront.slack.com/join/shared_invite/enQtOTUwNjQyNjY5MDI0LWFmYzE4NTYxNDBhZDRlMjM5MDUzY2RiMjU0YTRjYWQ3YzdkY2YzZjZhZDZmMDUwMWQyOWRmZjQ3NDgwZGQ3NTk#/) for a better support 😉

## 2. How can I override StorefrontUI (SFUI) global CSS variables?

To override SFUI CSS variables globally, declare their new values within the main `id` or `class` selector of the application, such as:

- `app` for Vue application created by `vue-cli`
- `__nuxt` for Nuxt application created by `create-nuxt-app`
- any `id` or main `class` set for the main entry element to the application.

For example, to override the variable `--font-family-primary` to `"Raleway", serif`, use the following:

```css
#app {
    --font-family-primary: "Raleway", serif;
}
```

Or

```css
#__nuxt {
    --font-family-primary: "Raleway", serif;
}
```

However, we do have component-tied CSS variables. If you override the global variables and see a specific component does not reflect the changes, please check the components' CSS variables in **Components** section or in our Storybook.

## 3. I can't find any reset file for CSS properties in the project. What should I do? 

The best way to reset CSS in your project is to add a minimal reset such as:

```css
body {
  margin: 0;
  padding: 0;
}
```

You can expand it whenever necessary. Keep in mind that Storefront UI components have styles for fonts, spacer's etc. inside. We don't set global styles for `<a>` and `<p>`, you can set global styles yourself according to your project needs.

## 4. I decided to use deprecated features for now. Is it possible to turn off the warnings?

Yes! Deprecation warning will show only in development mode and you may find some options to turn off this warnings also in development mode by passing your own environmental variable:

1. Create a file in the root folder `.env`
2. Add variable that we use to detect your decision about turning off deprecation warnings:
`VUE_APP_NO_DEPRECATED_WARNINGS=no-deprecated-warnings`
3. Don't forget to restart serve/dev mode if it is currently running
4. Clear cache if needed
5. And it's done!

:::warning
Be sure you are using vue-cli version 3 or above
:::
