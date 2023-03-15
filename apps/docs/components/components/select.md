---
layout: AtomLayout
hideBreadcrumbs: true
description: A select is an input that allows the user to choose from a set of options. Uses native html `<select>` tag. Used for forms or as a global setting, e.g. language, location.
---
# Select

::: slot usage

{{ $frontmatter.description }}

## Accessibility notes

Keyboard users can use `tab`, open select with `space` and select options using `arrows`.

## Notes

Any additional attributes passed to the component will be binded to `select` tag. If there is a need to pass any class to the root tag, then `wrapperClassName` prop should be used.

For a few options use [Radio](radio.html) component instead of Select. For very long set of options think about using Combobox component.

## Select sizes

Select supports 3 sizes that can be set via `size` prop: `sm`, `base`, `lg`.

<Showcase showcase-name="Select/SelectSizes" style="min-height:350px" >

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Select/SelectSizes.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Select/SelectSizes.tsx
<!-- end react -->
</Showcase>

## Custom chevron

Select can have custom chevron by using <!-- vue -->slot `chevron`<!-- end vue --> <!-- react -->`slotChevron`<!-- end react -->.

<Showcase showcase-name="Select/SelectCustomChevron">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Select/SelectCustomChevron.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Select/SelectCustomChevron.tsx
<!-- end react -->
</Showcase>

## Invalid state

Select with invalid state.

<Showcase showcase-name="Select/SelectInvalid">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Select/SelectInvalid.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Select/SelectInvalid.tsx
<!-- end react -->
</Showcase>

## Playground

<Generate />

:::

::: slot api

## Props

| Prop name         | Type            | Default value | Possible values                        |
| ----------------  | --------        | ------------- | -------------------------------------- |
| value             | string          | ''            |                                        |
| size              | VsfSelectSize   | base          | sm, base, lg                           |
| disabled          | boolean         | false         |                                        |
| invalid           | boolean         | false         |                                        |
| required          | boolean         | false         |                                        |
| placeholder       | string          | ''            |                                        |
| wrapperClassName  | string          | ''            |                                        |
<!-- react -->
| slotChevron       | ReactNode       |               |                                        |
| children          | ReactNode       |               |                                        |
| onChange          | Function        |               |                                        |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name | Description              |
| --------- | ------------------------ |
| default   | Place for select options |
| chevron   | Custom chevron           |

## Events

| Event name        | Trigger                       |
| ----------------- | ----------------------------- |
| update:modelValue | triggers v-model update event |

<!-- end vue -->

:::

::: slot source
<SourceCode>
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfSelect/VsfSelect.vue
<!-- end vue -->

<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/VsfSelect/VsfSelect.tsx
<!-- end react -->
</SourceCode>
:::
