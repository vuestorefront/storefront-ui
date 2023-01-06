# USAGE

## Remove comments

> Removal comments functionality is available only within test files, so the ones with`.cy.ts` `.PageObject.ts` filename suffix.

We can use `// ${framework}` and `// end ${framework}` where `${framework}` is a name of the framework (e.g. react) to mark specific part of the test code as framework-specific. Framework-specific test code **will be removed from the test suite code when test runs against other frameworks**.

Example:
```ts
describe('test scenario', () => {
  it('common test case', () => { ... });
  // vue
  it('vue-specific test case', () => { ... });
  // end vue
});
```

**Important**: for specifying framework-specific component imports use `// import ${framework}` and `// end import ${framework}` instead, for example:
```ts
// import vue
import VueComponent from 'packages/sfui/frameworks/vue/components/VueComponent/VueComponent.vue';
// end import vue
// import react
import VueComponent from 'packages/sfui/frameworks/react/components/VueComponent/VueComponent.vue';
// end import react
```

## Import alteration

Other imports will be changed to match the framework automatically. E.g.: `../../some/vue/types.ts` will be changed into `../../some/react/types.ts` when the test runs against react.

## Mount

Mount method provides possibility to mount multiple frameworks at once (see `packages/tests/utils/mount.tsx`) with a unified API.

## Mounting Vue components

When mounting Vue component you can use any configuration options that are supported by [vue-test-utils packages](https://test-utils.vuejs.org/api/#mount). Like:
```ts
mount({
    vue: {
        component: SomeVueComponent,
        props: {...},
        slots: {...},
    }
});
```
If you need to change props values during your test case you can do it by passing reactive Vue `ref` as a prop:
```ts
it('some test', () => {
  const someProp = ref();
  mount({vue: { props: someProp }});
  
  expect(elementUIDependingOnThisProp).not.to.be.changed;
  someProp.value = 'changed ref';
  expect(elementUIDependingOnThisProp).to.be.changed;
});
```

## Mounting React components

For `react` we provide `<Wrapper />` component that allows us utilize `ref`s (from `Vue` package) as reactive props for tested React component. `ref` values might be changed during the test run exactly the same way as within pure `Vue` tests. Example:

```tsx
it('some test', () => {
  const someProp = ref();
  mount({react:
      <Wrapper
          open={someProp}
          onOpenChange={(e: boolean) => someProp.value = e}
          component={VsfNavigationTopReact}
      />
  });
  
  expect(elementUIDependingOnThisProp).not.to.be.changed;
  someProp.value = 'changed ref';
  expect(elementUIDependingOnThisProp).to.be.changed;
});
```

`<Wrapper />` API props:

* component - component that will be tested
* all props and children will be passed directly to the original component (with Vue `ref`s being reactively unwrapped).
