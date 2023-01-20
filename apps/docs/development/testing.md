# Testing

## Test setup

We run every test file against 2 different framework environments:

- `React` - tested within Next.js app environment
- `Vue` - tested as a pure `Vue` code due to `Nuxt@3` not being compatible with Cypress component testing at the moment ([see connected issue](https://github.com/nuxt/framework/issues/6496)).

## Running tests

In the root directory of this repo run `yarn test` command to spin off 2 Cypress instances in parallel.

For each of Cypress instance you need to choose different browser runner (e.g Edge and Chrome). That's because of the because of [Cypress bug](https://github.com/cypress-io/cypress/issues/5613).
In opposition to running them simultaneously, framework test suites can also be run one-by-one. To do that navigate to either `apps/preview/next` (for `React` test suite) or `apps/preview/vue` (for `Vue` test suite) and run `yarn test` command.

## How to write tests

We have developed some specialized tools to write tests for multiple frameworks at the same time. Documentation about those you can find [here](https://github.com/vuestorefront/sfui2/blob/main/packages/tests/README.md).

### PageObjects

We use page objects approach for structuring our component tests as it gives couple of advantages:

1. Smaller and more readable tests.
2. It's [DRY](https://pl.wikipedia.org/wiki/DRY):
  a. PageObject might be used in multiple test files. For example: `ButtonPageObject` can be used in `QuantitySelector` tests as the latter uses `Button` component under the hood.
  b. The same PageObjects can be reused between component tests and E2E tests.
3. It's easier to update single PageObject instead of multiple of test suits.

Important note about PageObjects - they are used only for visual checks/control, like `click()`, `text()`, etc. If you want to mock some of the APIs you should do it directly in test file.

## Useful Links

- [Cypress Vue](https://docs.cypress.io/guides/component-testing/quickstart-vue) - basic usage of cypress for Vue.
- [Cypress React](https://docs.cypress.io/guides/component-testing/quickstart-react) - basic usage of cypress for React.
- [Cypress API](https://docs.cypress.io/api/table-of-contents) - Cypress API Documentation.
