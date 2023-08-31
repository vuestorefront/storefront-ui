---
repoPath: /components/radio.md
layout: AtomLayout
hideBreadcrumbs: true
---
# Radio

::: slot usage

`SfRadio` provides additional styles for different states of `<input type="radio">`. It can be used for choosing between a list of values when only one option can be selected at a time.

## Examples

### Basic Usage

<Showcase showcase-name="Radio/RadioWithoutLabel">

<<<../../preview/nuxt/pages/showcases/Radio/RadioWithoutLabel.vue
</Showcase>

### Radio with leading control

It's a best practice to use label with your `SfRadio` component so users can understand what the input is for.

<Showcase showcase-name="Radio/RadioLeading">

<<<../../preview/nuxt/pages/showcases/Radio/RadioLeading.vue
</Showcase>

### Radio with trailing control

<Showcase showcase-name="Radio/RadioTrailing">

<<<../../preview/nuxt/pages/showcases/Radio/RadioTrailing.vue
</Showcase>

### With legend

Radio Group can have a `legend` tag, which represents a caption for the content of its parent `fieldset` tag.

<Showcase showcase-name="RadioGroup/RadioGroupWithLegend">

<<<../../preview/nuxt/pages/showcases/RadioGroup/RadioGroupWithLegend.vue

</Showcase>

### Group Alignment

Radio components can be aligned inside RadioGroup in a `column` or in a `row`.

<Showcase showcase-name="RadioGroup/RadioGroupAlignment" >

<<<../../preview/nuxt/pages/showcases/RadioGroup/RadioGroupAlignment.vue

</Showcase>


## Accessibility notes

You can provide a bigger hit area for your radio buttons by making your `label` element another trigger for the radio button. This can be done by wrapping the `input` element in a `label` element.

When multiple radio elements are grouped together, one of their parent elements should have [`role="radiogroup"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radiogroup_role). This will help indicate which radio inputs affect the same value.

If you have an element that is not an `<input type="radio">`, you should set the [role="radio"](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role) so that it is recognized as a radio button.

## Playground

<Generate />

:::

::: slot api

## Props

| Prop name  | Type                          | Default value | Possible values       |
| ---------- | ----------------------------- | ------------- | --------------------- |
| `name`\*       | `string`                        |               |                       |
| `invalid`    | `boolean`                       | `false`         |                       |
| `value`      | `string`                        |               |                       |
| `modelValue` | `string`                        |               |                       |
| `disabled`   | `boolean`                       | `false`         |                       |

## Events

| Event name        | Trigger                   |
| ----------------- | ------------------------- |
| `update:modelValue` | triggers radio event emit |

:::

::: slot source
<SourceCode>
<<<../../../packages/sfui/frameworks/vue/components/SfRadio/SfRadio.vue

</SourceCode>
:::
