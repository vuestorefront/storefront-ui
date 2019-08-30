# How to contribute

_First and foremost, thank you so much for thinking of contributing to **StorefrontUI** ❤️👍._

Before you get started, let's go over a few important guidelines. We want you to have fun contributing with us, and be ready as fast as possible.

[[toc]]

## Important resources

* You are invited to join our [Our Discord Server](https://discord.gg/GS8hqFS). This is the place where we discussed about new features, exchanging questions between contributors (`#contributors`) and StorefrontUI users.
* [Our component storybook](http://storefrontui-storybook.netlify.com/)
* [Our current issues](https://github.com/DivanteLtd/storefront-ui/issues)
* [Our current Roadmap](https://github.com/DivanteLtd/storefront-ui/projects/1)

* [Our Figma component design](https://www.figma.com/file/hrwE3VsMBHgdJoS86rVr4W/Desktop-%26-Mobile-Vue-Storefront?node-id=99%3A0) - where contains the designs of all the existing/future components in the library.

## Repository's structure

StorefrontUI is an open-source UI library which is written **initially for Vue.js developers**. Like any other Vue.js project, you should be familiar with the basic of [Vue.js](https://vuejs.org). This is to help you **understand** the code **faster** and thus make it **easier** for you in contributing.

Our repo structure intentionally follows [monorepo development strategy](https://www.atlassian.com/git/tutorials/monorepos). It consists of two main projects: **shared** and **vue**, both located under `packages` folder.

```
storefrontUI
|__/packages
  |__/shared
  |__/vue
```
* **shared** - Contains all CSS stylings of components and icons used within StorefrontUI. This is to ensure design consistency between our future projects.

* **vue** - This is the main project that contains Storefront UI Vue components code and main documentation.

We selected this strategy to enable the reusability of resources between future extension to different frameworks such as React.js.

## Ways of contribution

Anything for a better StorefrontUI is considered contributions, which includes:

### Bug report

### Enhancement request

### Documentation

### Code contribution

### Making coffee

☕ ☕

## Coding conventions

The good news is that for basic coding, we have `prettier` run automatically on each commit made. Besides we do have `eslint` check enabled, so you can know exactly where you code doesn't fit our conventions.

For component, you can refer to [our component rules](component-rules.md) for detailed convention.

In general, this is an open source project, hence:

* Readability is extremly important. Please consider the next random developer who will read your code, and keep it simple for them.
* No complex logic in `template` view. If there is, please use `computed` properties.

