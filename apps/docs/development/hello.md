# Development docs

Hello! 👋 We'd like to kindly welcome you to our development guide. See table of content below to learn more about our repository and how we build code at SFUI:

1. [Repository setup & structure](https://github.com/vuestorefront/sfui2/blob/main/apps/docs/development/repository.md).
2. [Coding rules](https://github.com/vuestorefront/sfui2/blob/main/apps/docs/development/rules.md).
  a. [Vue rules](https://github.com/vuestorefront/sfui2/blob/main/apps/docs/development/vue/rules.md).
  a. [React rules](https://github.com/vuestorefront/sfui2/blob/main/apps/docs/development/react/rules.md).
3. [Component generator tool](https://github.com/vuestorefront/sfui2/blob/main/apps/docs/development/component_generator.md).
4. [Testing](https://github.com/vuestorefront/sfui2/blob/main/apps/docs/development/testing.md).
5. [How docs are deployed?](https://github.com/vuestorefront/sfui2/blob/main/apps/docs/development/docs-deployment.md)
6. [Releasing packages](https://github.com/vuestorefront/sfui2/blob/main/apps/docs/development/release.md).

## Q&A

**Q**: My IDE complaining e.g in nuxt that `class` does not exists should use `className`.
**A**: Thats because you have opened project with multiple `tsconfig.json` files. Open in new window `apps/preview/nuxt` so root in IDE have correct `tsconfig.json` file.
