# Storefront UI

[![Netlify Status](https://api.netlify.com/api/v1/badges/8371333f-ef98-4d04-bcc4-9f4771d11430/deploy-status)](https://app.netlify.com/sites/storefrontui-storybook/deploys)

**This project is on the early stages of development. Not ready for production use. Expect some things to be broken and api to change**

**We are looking for contributors and agencies willing to join us and build best UI library for Vue together!**

Customization-first and elegant UI framework for eCommerce (and not only) based on Vue.js and [Google Retail UX Playbook](https://services.google.com/fh/files/events/pdf_retail_ux_playbook.pdf). Made with ❤️ by [Vue Storefront](https://github.com/DivanteLtd/vue-storefront) team.

- [Website](http://storefrontui.io/)
- [Documentation](http://docs.storefrontui.io/) (still in very early stages)
- [Storybook](http://storybook.storefrontui.io/)


![](https://i.ibb.co/7ScVptN/123.png)

# What makes it unique?

Some libraries aim to give as much as they can out of the box but they faill when it comes to customization. Our goal was to enable as much as possible out of the box but with primary focus on ability to customize any aspect of the components.

With sfui you need to do a little bit more than with other libs for basic tasks but you get 100% customizable components in return!

You can easly change almost every aspect of provided components and use them to make stunning eCommerce shops (and not only)!


**Here are the key characteristics of Storefront UI:**

- Ability to customize any aspect of the library.
- Performance-oriented
- High-level global customization can be done through SCSS variables
- Component content customization with slots.
- Component design customization with pure css BEM classes instead of countless props.
- Possibility to compose your own components from partials (markup/Vue instance/SCSS)
- Implementation of [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) (with limit to atoms, molecules and organisms)

Read about [code design concepts](https://github.com/DivanteLtd/storefront-ui/blob/master/CONTRIBUTING.md) behind Storefront UI and [how it can be customized](./docs/customization.md).

![](https://i.ibb.co/7SKbz5K/123457.png)
![](https://i.ibb.co/VHTcyrw/1234.png)

# Design

You can find the stunning designs we are using for Storefront UI components [here](https://www.figma.com/file/hrwE3VsMBHgdJoS86rVr4W/Desktop-%26-Mobile-Vue-Storefront?node-id=99%3A0)

[![image](https://user-images.githubusercontent.com/15185752/58185795-06b51900-7cb4-11e9-883f-2571cace575c.png)
](https://www.youtube.com/watch?v=8FO6tm9rEdo&feature=youtu.be)


# How to try it?

Storefront UI is not ready to use in projects yet. We plan to release working alpha before the end of April 2019.
If you want to check current state of components just check [storybook](https://storefrontui-storybook.netlify.com/)
If you really want to play with components:
```npm install --save @storefrontui/vue```

Then check if `sfui.scss` file was created in a root of your app. If not - create it.


# Documentation

The documentation is always THE HARDEST PART of each open source project! But we're trying hard. Feel free to contribute to the documentation if you like.

**Please find out what we've already managed to prepare:** [available here](https://docs.storefrontui.io/). Please note that the documentation is not yet finished as this project is still in the early stages of development and will be continuously updated. You can find them also under the `docs/` folder.


# Contributing

We are currently in a process of building the library. If you want to help shaping future of vue and eCommerce UI's we'd be more than happy if you want to contribute! [Here](https://github.com/DivanteLtd/storefront-ui/blob/master/CONTRIBUTING.md) you can find all the required information.

# Cooperation with Alpacas

Ideas behind Storefront UI and [Alpaca](https://github.com/SnowdogApps/alpaca-storybook) are common efforts. We joined forces in figuring out how to make things right to deliver best possible experience to the users.

# Supporters
<a href="https://developers.e-com.plus/"><img src="https://developers.e-com.plus/src/assets/img/logo-dark.png" alt="e-com club" height="40px"></a>

# Roadmap

- Category page components (April) - Done
- Product Page components (May) (alpha release)
- Homepage, form elements and a11y (June)
- Last polishments and focus on documentation (June/July) (beta release)

**Other things to include in the meantime:**
- include additional build for every compoennt so they can also be imported separately but after a build step (useful for apps that don't have a build step at all)
- webpack build that can be merged into your current one with everything that is needed to consume SFUI webpack source

**In consideration**
- SCSS - CSS vars transition


Want to help and make it even faster? Grab an issue and become part of our amazing community ;)

