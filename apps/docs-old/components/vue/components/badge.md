---
repoPath: /components/badge.md
layout: AtomLayout
hideBreadcrumbs: true
---

# Badge

::: slot usage

## Examples

### Basic usage

The badge component must be wrapped with a container that has `class="relative"`. You must provide such a container by yourself, but it gives you the flexibility to put the badge wherever you want. Bagde comes with a "dot" variant, which hides the content. When given content is of type number (or string that could be parsed to number), you can set a maximum limit of that number using `max` prop.

<Showcase showcase-name="Badge/BadgeBasic">
<<<../../preview/nuxt/pages/showcases/Badge/BadgeBasic.vue
</Showcase>

### Placement

You can align the Badge in every corner of the container.

<Showcase showcase-name="Badge/BadgePlacement">
<<<../../preview/nuxt/pages/showcases/Badge/BadgePlacement.vue
</Showcase>

### Custom outline

A nifty effect that makes the Badge a bit more attractive is to add an outline that separates the Badge from an element.

<Showcase showcase-name="Badge/BadgeOutline">
<<<../../preview/nuxt/pages/showcases/Badge/BadgeOutline.vue
</Showcase>

### Avatars

A common use case for the Badge is to place it on a user's avatar.

<Showcase showcase-name="Badge/BadgeAvatar">
<<<../../preview/nuxt/pages/showcases/Badge/BadgeAvatar.vue
</Showcase>

## Playground

<Generate style="height: 380px" />

:::

::: slot api

## Props

| Prop name   | Type               | Default value | Possible values                                        |
| ----------- | ------------------ | ------------- | ------------------------------------------------------ |
| `content`   | `string            | number`       |                                                        |
| `max`       | `number`           | `99`          |                                                        |
| `placement` | `SfBadgePlacement` | `top-right`   | `top-right`, `top-left`, `bottom-right`, `bottom-left` |
| `variant`   | `SfBadgeVariant`   | `standard`    | `standard`, `dot`                                      |

:::

::: slot source
<SourceCode>


<<<../../../packages/sfui/frameworks/vue/components/SfBadge/SfBadge.vue

</SourceCode>
:::
