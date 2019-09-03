# Become a contributor

_Welcome and thank you so much for thinking of contributing to **StorefrontUI**_ ❤️👍.

We want you to have fun contributing with us, so let's go over a few important guidelines before getting started.

[[toc]]

## Important resources

* [Our Discord Server](https://discord.gg/GS8hqFS). This is the place where we discussed about new features, exchanging questions between the core team, contributors (`#contributors`) and StorefrontUI users.
* [Our component storybook](http://storefrontui-storybook.netlify.com/) - Playground for our components
* [Our current issues](https://github.com/DivanteLtd/storefront-ui/issues) - Where we keep track of all the bugs, feature requests reported by our community members.
* [Our current Roadmap](https://github.com/DivanteLtd/storefront-ui/projects/1) - The status of our library in long term.

* [Our Figma component design](https://www.figma.com/file/hrwE3VsMBHgdJoS86rVr4W/Desktop-%26-Mobile-Vue-Storefront?node-id=99%3A0) - Where contains the designs of all the existing/future components in the library.

## Repository's structure

StorefrontUI is an open-source UI library which is written **initially for Vue.js developers**. Like any other Vue.js project, you should be familiar with the basic of [Vue.js](https://vuejs.org) before starting to contribute. This is to help you **understand** the code **faster** and thus make it **easier** for you in contributing.

Our repo structure follows [monorepo development strategy](https://www.atlassian.com/git/tutorials/monorepos). It consists of two main projects: **shared** and **vue**, both located under `packages` folder.

```
storefrontUI
|__/packages
  |__/shared
  |__/vue
```
* **shared** - Contains all CSS stylings of components and icons used within StorefrontUI. This is to ensure design consistency between our future projects.

* **vue** - This is the main project that contains main Storefront UI Vue components code in `src`, storybook config in `config`, customized scripts in `scripts` and main documentation written in [vuepress](https://vuepress.vuejs.org) will be found in `docs`.

```
./vue
|__/config
|__/docs
|__/scripts
|__/src
```

We selected this strategy to enable the reusability of resources between future extension to other frameworks such as React.js.

## Ways of contribution

::: warning WORK WITH GITHUB
StorefrontUI is a Github repository. If you are new to Github, please check [our Github guidelines](github-guidelines.md) for instructions.
:::

Anything for a better StorefrontUI and bulding the community is considered contributions :wink:, which include:

### Contribute Code
We have a lot of features that need good helping hand, as always. However, there are coding rules you need to follow, for maintaining readability and for us to process your pull request as quickly as possible. Please read [our code contributing guide](coding-guidelines.md).

Then you'll be ready to [pick your first issue](https://github.com/DivanteLtd/storefront-ui/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) and contribute to [StorefrontUI](https://github.com/DivanteLtd/storefront-ui) core respository.

::: tip
We **have our issues labelled** to make it easier in selecting an issue to work with. You can also check about [our labels system](github-guidelines#_3-select-a-github-issue) for more information.
:::

### Report bug or request a feature
Our goal is to make StorefrontUI customisable as much as possible. Hence issue reporting, either a bug or a feature request, is extremely valuable to us.

In order to maintain an effective workflow and make sure all issues reported will be solved, we'd like you to follow [some simple guidelines](issue-report-guidelines.md).

If you are sure your issue is a bug, or a valid feature request, [file a new issue in our Github issue tracker](https://github.com/DivanteLtd/storefront-ui/issues/new) following the [template](issue-report-guidelines#issue-template) and guidelines.


### Work on Documentation

### Speard the words

### Making coffee (virtually)
☕ ☕

