# How to report an issue

In order for us to ensure proper planning for any bugfix or feature development workflow, we are appreciate if our beloved reporters follow the below guidelines 😃

## Use issue tracker for the right purpose

As part of maintaining our OSS workflow, StorefrontUI uses Github issue tracker **ONLY** for [bugs](), [feature requests (RFC)]() and [tracking pull requests]().

:::warning
* It is **NOT** for requesting a personal support or asking a question. Use [our Discord Server](https://discord.gg/GS8hqFS) or [Stack Overflow](https://stackoverflow.com) or even [Twitter](https://twitter.com/home).
* It is **NOT** for social media, respect others' opinions and proper languages are **required**.
:::

## Issue types

For organizing and tracking purpose, issues on StorefrontUI are divided into the main following types:

* Bug report
* Feature request (RFC)

## Before reporting

Plese do the following checks:
* **Double check** [the current issues](https://github.com/DivanteLtd/storefront-ui/issues) with the help of Github issue search. This is to avoid report duplication.
* If it is an issue about **component behavior**, check our [Components Playground](http://storybook.storefrontui.io) or [Components Documentaton](/components/Accordion.md) to make sure it is indeed a bug 🐛, and not an intended feature.
* If it's about **technical questions** or just to **verify it is technical related**, refer to our [Discord Server](https://discord.gg/GS8hqFS) first. Our contributors and core team will be more than happy to help.
* In addition, if it is about **feature request**, refer to our current [Roadmap]() to see if your request exists and is planned.

Once your issue is verified from the above checks, it's time to create your issue using [Github issue tracker](https://github.com/DivanteLtd/storefront-ui/issues/new) with the right template recommendations below.

## Issue template
### Issue title
This is first impression of the developer to identify the issue quickly. A good title should contain brief, clear and concise explanation about the issue with the important keypoints.

:::tip GOOD TITLE
[BUG]Precommit checks for shared package fail
:::
:::danger BAD TITLE
Can't commit.
:::

### Feature request (RFC)

### Bug report

[Bug report template](https://github.com/DivanteLtd/storefront-ui/blob/master/.github/ISSUE_TEMPLATE/bug_report.md) is standard placeholder for every new bug found. 

:::tip TITLE WITH PREFIX
Bug report will be populated with a title prefix `[BUG]` upon creation:

`[BUG]<bug issue title>`
:::

As always, some important pre-guidelines:
1. **If the issue has been fixed before**, try to reproduce it with the latest `master` branch.
2. To help us understand the exact issue, try to **isolate the problem** by a [reduced test case](http://css-tricks.com/reduced-test-cases/), steps to repoduce and a live example if possible.

:::tip A GOOD BUG REPORT
A good bug report should be **clear**, as **detailed** as possible **without** the need of chasing for more information.
:::

#### General description

#### Steps to reproduce

#### Expected & actual behavior

#### Code examples

#### Additional information
In addition to the above fields, more information may be required to speed up bug fix, including:
* **Screenshots** - It can be console logs, terminal logs, actual problematic behavior, etc.
* **Environment** - It can be which browser, OS, and devices that relates to the issue.
* **Repository branch, version used, tech stacks used, etc**
---
Interested in become contributors? Reach out to us [@StorefrontUI](https://twitter.com/StorefrontUI) or in [our Discord Server](https://discord.gg/GS8hqFS) 🔥