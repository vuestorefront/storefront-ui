# Storefront UI

[![Netlify Status](https://api.netlify.com/api/v1/badges/8371333f-ef98-4d04-bcc4-9f4771d11430/deploy-status)](https://app.netlify.com/sites/storefrontui-storybook/deploys)

**This project is on the early stages of development. Not ready for production use. Expect some things to be broken and api to change**

**We are looking for contributors and agencies willing to join us and build best UI library for Vue together!**

Customization-first, performance-oriented and elegant UI framework for eCommerce (and not only) based on Vue.js and [Google Retail UX Playbook](https://services.google.com/fh/files/events/pdf_retail_ux_playbook.pdf). Made with ❤️ by [Vue Storefront](https://github.com/DivanteLtd/vue-storefront) team and contributors.

- [Website](http://storefrontui.io/)
- [Documentation](http://docs.storefrontui.io/) (still in very early stages)
- [Storybook](http://storybook.storefrontui.io/)
- [Discord server](https://discord.gg/GS8hqFS)


![](https://i.ibb.co/7ScVptN/123.png)

# What makes it unique?

Some libraries aim to give as much as they can out of the box but they faill when it comes to customization. Our goal was to enable as much as possible out of the box but with primary focus on ability to customize any aspect of the components.

With SfUI you can change almost every aspect of provided components and use them to make stunning eCommerce shops (and not only)!


**Here are the key characteristics of Storefront UI:**

We are building Storefront UI based on the following 5 fundamentals:

- **Performance**: You’re importing ONLY what you need, and in a raw format which means you can benefit from all build-time optimizations like tree shaking or grouping common chunks.
- **Customization**: Along with standard prop-based customization, every component has a set of props that let you replace any part of it with your own images, icons or even custom HTML markup. In addition, every component is divided into separate HTML, CSS and JS files so you can compose your own components from only Storefront UI partials.
- **Best practices**: Storefront UI components follow best practices in terms of design and core. Every component is based on the Google Retail UX Playbook and is accessibility-friendly.
- **E-commerce**: As a UI library dedicated to eCommerce, Storefront UI along with standard UI components has all the elements necessary for building modern online stores.
- **Open Source**: Storefront UI is a community effort to deliver the best possible experience to modern web applications and e-commerce shops, with carefully crafted components following best practices. Our team consists of agencies and volunteer contributors from all over the world.

Storefront UI is based on atomic design which means every component is built from tiny atoms that you can use in your application! You’re not limited to big UI components anymore. Use Storefront UI atoms to quickly build your own, great-looking components!


Read about [code design concepts](https://github.com/DivanteLtd/storefront-ui/blob/master/CONTRIBUTING.md) behind Storefront UI and [how it can be customized](./docs/customization.md).

![](https://i.ibb.co/7SKbz5K/123457.png)
![](https://i.ibb.co/VHTcyrw/1234.png)

# Design

You can find the stunning designs we are using for Storefront UI components [here](https://www.figma.com/file/hrwE3VsMBHgdJoS86rVr4W/Desktop-%26-Mobile-Vue-Storefront?node-id=99%3A0)

[![image](https://user-images.githubusercontent.com/15185752/58185795-06b51900-7cb4-11e9-883f-2571cace575c.png)
](https://www.youtube.com/watch?v=8FO6tm9rEdo&feature=youtu.be)


# How to try it?

Storefront UI is not ready to use in production projects yet. We plan to release working alpha before the end of June 2019.
If you want to check current state of components just check [storybook](https://storybook.storefrontui.io/)

You can read more about the installation [here](https://docs.storefrontui.io/introduction.html#how-to-test-storefrontui)


# Documentation

The documentation is always THE HARDEST PART of each open source project! But we're trying hard. Feel free to contribute to the documentation if you like.

**Please find out what we've already managed to prepare:** [available here](https://docs.storefrontui.io/). Please note that the documentation is not yet finished as this project is still in the early stages of development and will be continuously updated. You can find them also under the `docs/` folder.


# Contributing

We are currently in a process of building the library. If you want to help shaping future of vue and eCommerce UI's we'd be more than happy if you want to contribute! [Here](https://github.com/DivanteLtd/storefront-ui/blob/master/CONTRIBUTING.md) you can find all the required information.

# Maintainers

Those awesome people are maintaining Storefront UI. Their ensuring that it performs smooth and looks awesome!

- Filip Rakowski ([@filrak](https://github.com/filrak))
- Leonardo Matos ([@leomp12](https://github.com/leomp12))
- Maya Shavin ([@mayashavin](https://github.com/mayashavin))
- Gift Egwenu ([@lauragify21](https://github.com/lauragift21))

and amazing [contributors](https://github.com/DivanteLtd/storefront-ui/graphs/contributors) commiting their time to make it better.

Thank you! There would be no Storefront UI without you

# Cooperation with Alpacas

Ideas behind Storefront UI and [Alpaca](https://github.com/SnowdogApps/alpaca-storybook) are common efforts. We joined forces in figuring out how to make things right to deliver best possible experience to the users.

# Supporters
<a href="https://developers.e-com.plus/"><img src="https://developers.e-com.plus/src/assets/img/logo-dark.png" alt="e-com club" height="40px"></a>

# Roadmap

- Category page components (April) - Done
- Product Page components (May) (alpha release) - Done
- Homepage, form elements, monorepo setup, product page example (June)
- Last polishments and focus on documentation (July) (beta release)

**Other things to include in the meantime:**
- include additional build for every compoennt so they can also be imported separately but after a build step (useful for apps that don't have a build step at all)
- webpack build that can be merged into your current one with everything that is needed to consume SFUI webpack source

**In consideration**
- SCSS - CSS vars transition


Want to help and make it even faster? Grab an issue and become part of our amazing community ;)

