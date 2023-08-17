# StorefrontUI Contributing Guide

We're very excited to see that **you are thinking about contribution to StorefrontUI** 🙌 To get you quickly up and running with the codebase and our vision of creating the software we have created following guidelines, please give them a read:

- [Code of Conduct](https://github.com/vuestorefront/storefront-ui/blob/v2/.github/CODE_OF_CONDUCT.md)
- [Issue Reporting Guidelines](#issue-reporting-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Setup](https://github.com/vuestorefront/storefront-ui/blob/v2/apps/docs/development/hello.md)

## Issue Reporting Guidelines

[Create a Github issue using proper template](https://github.com/vuestorefront/storefront-ui/issues/new/choose) to file a:

- feature request,
- bug report,
- documentation issue,
- question

## Pull Request Guidelines

- Learn about our branch structure [here](https://docs.vuestorefront.io/v2/contributing/branching-model.html).
  <br>
  **Important:**
  <br>
  For SFUI2 `main` branch is called `v2` and `develop` is `v2-develop`. `develop` and `master` branches **are used for SFUI1 maintenance**.

- Checkout a topic branch from the relevant branch, e.g. `v2-develop`, and merge back against that branch.

- Work in relevant place of repository and follow our [development guide](https://github.com/vuestorefront/storefront-ui/blob/v2/apps/docs/development/hello.md).

- Add accompying tests or tests cases for any changes you do to the codebase as it's important for us to maintain high test coverage.

- Make sure test pass when running `yarn test`. See [development guide](https://github.com/vuestorefront/storefront-ui/blob/v2/apps/docs/development/hello.md) for details.

- Detailed description available [here](https://docs.vuestorefront.io/v2/contributing/how-to-submit-pull-request.html).

### Committing Changes

This repository automatically squashes commits from your branch into one when merging a pull request, so you do not need to worry about number of commits on your branch.
Commit messages and PR names should follow [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/). It important for our changelog & release notes generators to work properly. When filing a PR there is a CI step that makes sure the name of your pull request is following above guidelines.
