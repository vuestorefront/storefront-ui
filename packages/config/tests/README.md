# PURPOSE

Package used for altering `packages/tests/**/*.cy.tsx` files. This package exports regex rules that are used in `Next` and `Vue` (`Nuxt` does not provide support for Cypress [Github issue](https://github.com/nuxt/framework/issues/6496)) preview packages.

> NOTE: Unfortunately there is no possibility to use typescript for Next.js configuration ([`next.config.ts` is not supported](https://github.com/vercel/next.js/discussions/35969)). This means that we need to transpile `next.config.ts` into `next.config.js` before using it in Next.js.
