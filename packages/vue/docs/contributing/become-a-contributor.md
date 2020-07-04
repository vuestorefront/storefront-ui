# Become a contributor

_Welcome and thank you so much for thinking of contributing to **StorefrontUI**_ ❤️👍.

We want you to have fun contributing with us, so let's go over a few important guidelines before getting started.

[[toc]]

## Important resources

* [Our Discord Server](https://discord.gg/GS8hqFS). This is the place where we discussed about new features, exchanging questions between the core team, contributors (`#contributors`) and StorefrontUI users.
* [Our component storybook](https://storybook.storefrontui.io/) - Playground for our components
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

::: tip DON'T KNOW WHICH ISSUE TO SELECT?
We **have our issues labelled** to make it easier in selecting an issue to work with. You can also check about [our labels system](github-guidelines.md#_3-select-a-github-issue) for more information.
:::

### Report bug or request a feature
Our goal is to make StorefrontUI customisable as much as possible. Hence issue reporting, either a bug or a feature request, is extremely valuable to us.

In order to maintain an effective workflow and make sure all issues reported will be solved, we'd like you to follow [some simple guidelines](issue-report-guidelines.md).

If you are sure your issue is a bug, or a valid feature request, [file a new issue in our Github issue tracker](https://github.com/DivanteLtd/storefront-ui/issues/new) following the [template](issue-report-guidelines#issue-template) and guidelines.

### Work on Documentation

Good and friendly documentation is **extremply significant** for our community, for every reason. Currently we have lots of work needed to be done on this matter. Would you like to help us a hand to build the best documentation? 😉

StorefrontUI aims to be an international community, with the core team coming from different timezones across the globe. Thus, we are actively looking for contributors on the following:

* **Translating docs** into different languages. We do want you to be able to read this section in your preferred language. And that surely needs some help!

* **Review** our documentation Pull Requests.

* **Fix current documentation** (on dictation error, word usage, etc)

* **Write documentation** for our components, or [select an docs issue](https://github.com/DivanteLtd/storefront-ui/issues?q=is%3Aopen+is%3Aissue+label%3Adocs) to start.

:::warning WORK WITH DOCUMENTATION

Certainly, make sure you read and follow [our documentation guidelines](documentation-guidelines.md). 
:::

### Speard the words

There is a lot more you can help StorefrontUI community grow besides the above:

* **Write and publish blog posts** about StorefrontUI best practices, use cases. If you like StorefrontUI, why not share it to the world?

* **Talk** about how awesome StorefrontUI is to you in a conference, meetup or simple at your work 😉.

* **Integrate** StorefrontUI with other awesome frameworks, such as Nuxt.js, Gridsome.js. Write a StorefrontUI plugin for any of the frameworks you work with, and we will love to add it in our ecosystem.

If you have any question on how you can be more involved in contributing other than these, reach out to us [@StorefrontUI](https://twitter.com/StorefrontUI) or in [our Discord Server](https://discord.gg/GS8hqFS)
