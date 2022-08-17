## Here you can find our dev docs

* [Turborepo](turborepo.md) - monorepo setup, structure and rules

### Q&A

##### Linting

**Q**: My IDE complaining e.g in nuxt that `class` does not exists should use `className`.
**A**: Thats because you have opened project with multiple `tsconfig.json` files. Open in new window `apps/preview/nuxt` so root in IDE have correct `tsconfig.json` file.

##### Developing

**Q**: How can I write components
**A**: You need to create example component in `examples/YOUR_COMPONENT_NAME` for each framework. When writing docs for those components `examples/YOUR_COMPONENT_NAME?docs=true` so sidebar wont be visible and link in as iframe (TBD)
