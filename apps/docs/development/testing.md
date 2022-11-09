## NOTE

We run 1 test file in 2 different environments (react and vue).
React is run in Next.js, however Nuxt.js(v3) cant run atm component testing, thats why there is a seprate pure vue setup only for this purpose https://github.com/nuxt/framework/issues/6496

## Writing tests

Run `yarn test` on `root` directory, then 2 Cypress instances will run, then you have to pick 2 different browsers (e.g Edge and Chrome) because of Cypress bug https://github.com/cypress-io/cypress/issues/5613
Separate framework can be also run, just navigate to either `apps/preview/next` or `apps/preview/vue` and run `yarn test`

## How to write

We uses page objects approach, it gives couple of advantages

1. DRY programming, meaning we do not want to repeat ourselves
2. Page objects can be used in other components, eg buttonPageObject can be used in QuantitySelector tests
3. Same PO(PageObject) methods can be used later in e2e tests
4. Smaller and more readable tests
5. When change needs to be done its easier to change one pageObject instead of ten's of test suits
6. PageObjects are used only for visual checked, e.g `click`, `text` etc. However if you want to mock emit/callback this should be done directly in test file

## Learning/Docs

Basic usage of cypress for Vue is here https://docs.cypress.io/guides/component-testing/quickstart-vue
For React https://docs.cypress.io/guides/component-testing/quickstart-reac
And API https://docs.cypress.io/api/table-of-contents

TODO: remove data-testid on release components
TODO: when bug issue on cypress side will be resolved, we should use one browser
