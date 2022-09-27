Component Generator Setup basing on [Hygen library](https://www.hygen.io/)
### usage
run command from project root:

```console
// create new component
foo@bar:~$ yarn component new --name <VsfComponentName> [--variants]

// command help - output not formatted correctly due to `hygen` issue
foo@bar:~$ yarn component help
```
`--variants` flag generates optional object of TS types in component

Generator templates are stored in the `_templates` directory in the root path.

Created files
- `apps/mitosis/component/blocks/<VsfComponent>/<VsfComponent>.lite.tsx`
- `apps/preview/nuxt/.../examples/<VsfComponent>.vue`
- `apps/preview/next/.../examples/<VsfComponent>.tsx`
- `apps/docs/components/.vitepress/components/<Component>.vue`
- `apps/docs/components/components/<component>.md`

Updated files
- `apps/docs/components/.vitepress/config.js`
- `apps/docs/components/.vitepress/theme/index.js`
- `apps/docs/components/.vitepress/theme/index.js`

Generator assumes that component `name` is prefixed with a `Vsf` string i.e. `--name VsfComponentName`

Docs files uses non-prefixed name version with proper casing - currently dynamic prefix is not supported.
