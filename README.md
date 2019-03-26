# Storefront UI

**This project is on the early stages of development. Not ready to use.**

Highly customizable and elegant UI framework for eCommerce (and not only) based on Vue.js and [Google Retail UX Playbook](https://services.google.com/fh/files/events/pdf_retail_ux_playbook.pdf). Made with ❤️ by [Vue Storefront](https://github.com/DivanteLtd/vue-storefront) team & [Divante](https;//divante.co).

![](https://i.ibb.co/7ScVptN/123.png)

# What makes it unique?

Some libraries aim to give as much as they can out of the box but they faill when it comes to customization. Our goal was to enable as much as possible out of the box but with primar focus on ability to customize any aspect of the components. 

With sfui you need to do a little bit more than with other libs for basic tasks but you get 100% customizable components in return!

You can easly change almost every aspect of provided components and use them to make stunning eCommerce shops (and not only)!

**Here are the key characteristics of Storefront UI:**

- Ability to customize any aspect of the library.
- Seamless upgrades
- High-level global customization can be done through SCSS variables
- Component content customization with slots.
- Component design customization with pure css BEM classes instead of countless props.
- Possibility to compose your own components from partials (markup/Vue instance/SCSS)
- Implementation of [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) (with limit to atoms, molecules and organisms)

Read about [code design concepts](https://github.com/DivanteLtd/storefront-ui/blob/master/CONTRIBUTING.md) behind Storefront UI and [how it can be customized](./docs/customization.md).

![](https://i.ibb.co/VHTcyrw/1234.png)

# Design

You can find the stunning designs we are using for Storefront UI components [here](https://www.figma.com/file/hrwE3VsMBHgdJoS86rVr4W/Desktop-%26-Mobile-Vue-Storefront?node-id=99%3A0)

![](https://i.ibb.co/7SKbz5K/123457.png)

# How to try it?

Storefront UI is not ready to use in projects yet. We plan to release working version before the end of April 2019.
If you want to play with components anyway there are two options:


```js
import StorefrontUI from "@storefrontui/vue";

Vue.use(StorefrontUI);
```

...or copy repo and play in App.vue

# Contributing

We are currently in a process of building the library. If you want to help shaping future of vue and eCommerce UI's we'd be more than happy if you want to contribute! [Here](https://github.com/DivanteLtd/storefront-ui/blob/master/CONTRIBUTING.md) you can find all the required information.

# State of components for this week

- SfButton - done
- SfBanner - almost done
- SfCallToAction - almost done
- SfHeader - almost done
- SfBottomnNavigation - in progress
