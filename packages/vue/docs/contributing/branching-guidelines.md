# Branching and Merging Guidelines

Concerning branching and merging, our team decided on using a variation of the _Gitflow_ workflow. This page describes its background and impact for contributors.

## Gitflow Workflow

As a contributor you would probably only be confronted with the topics in the following "Daily Development & Feature Branches" sections. The other parts are taken care of by the Storefront UI core team.

### Daily Development & Feature Branches
Gitflow defines two major, long-living branches: **`master`** and **`develop`**. 
Daily development takes place in **_feature_ branches** which are derived from `develop` and, after QA, merged back into `develop`.
We apply the strict variant in which the only commits allowed to `develop` are merge commits. So everything that should land in `develop` needs to go through a feature branch.
In daily development `master` is never touched; neither branched from nor merged into.

As a convention, we prepend every feature branch with `feature/` followed by an issue number and/or a brief description, e.g. `feature/#1234-sftoggle`. This makes it easier to distinguish the branch types in branch overviews.

### Releases
In order to release a specific repo state, with a version number and tag and all, a **_release_ branch** can be created. It is also derived from `develop` but merged into `develop` **and `master`**.
At the same time a **version tag** is created on `master`, pointing to the merge commit.
The release branch can stay open as long as that specific version line is supported. It is needed for hotfixes (see below).

_Note: Keeping release branches open is actually a deviation from the original gitflow workflow which is made for only one actively supported release. There, a release branch is closed the moment it is merged into `master`. With the need to maintain multiple version lines, the way proposed here is an appropriate variation._

Following the original gitflow naming convention for release branches, we prepend release branches with `release/` followed by the release version, e.g. `release/1.2.0`. A common _tag_ convention is the `v` prefix as in `v1.2.0`.

### Hotfixes
If the situation arrives where urgent bugs need to be fixed in all affected and still supported release versions, **_hotfix_ branches** are created. Those are the only branches created from `master` and must be merged back into `master`, `develop` **and all supported `release` branches**.
Those commits are normally small and don't create (many) merge conflicts. But sometimes hotfix changes require extra work in order to backport them into earlier releases. All this work has to go through QA, i.e. PRs, so no new issues are introduced into one or more releases.

Such branches are prefixed with `hotfix/` plus the new version number, e.g. `hotfix/1.2.1`.
Theoretically (but not necessarily), to minimize confusion in the git history, it is advised to create a branch for each supported release branch, branched away from the original hotfix branch (which is targeted towards the most recent release) and name those branches according to the last version in those release branches.
(Example: Create a hotfix branch from `master` towards the most recent version, e.g. `hotfix/2.2.1`, merge it into `master` and `develop` and create new hotfix branches from that branch for older releases, e.g. `hotfix/2.1.6` and `hotfix/2.0.9`, and merge them into those.)

Also, new tags are created for all fixed release branches.

## Merging

While committing often on a feature branch is accepted and even appreciated for the sake of transparent code reviews, our team agreed on using **squash commits** for merges into the `develop` branch.
