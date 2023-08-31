---
repoPath: /hooks/useTrapFocus.md
layout: AtomLayout
hideBreadcrumbs: true
description: An easy to use function for creating trapping focus within an element.
---

# useTrapFocus

:::::: slot usage

`useTrapFocus` allows you to trap focus inside a specific DOM element. Focus traps are especially useful for modals, dropdown menus, and other elements that should keep focus within the element when it is open.

This is a great way to improve the accessibility of your application because with focus traps, you can ensure that users navigating your site using only a keyboard won't accidentally interact with elements outside the focus trap.

::: read-more
Under the hood, this composable uses `focus-trap/tabbable`. To learn more about their specific implementation and see the rules used to gather focusable elements visit the [tabbable docs](https://github.com/focus-trap/tabbable).
:::

## Usage

### Base Usage

To use `useTrapFocus`, we can use a template ref to identify the element that we want to trap focus inside of. Then, we can pass that ref to `useTrapFocus` and whenever that element is being rendered, the focus trap will be active.

<SourceCode>

```vue
<script lang="ts" setup>
import { ref } from 'vue';
import { useTrapFocus } from '@storefront-ui/vue';

const focusTrapElementRef = ref<HTMLDivElement>();
useTrapFocus(focusTrapElementRef)
</script>

<template>
  <div ref="focusTrapElementRef">
    This container has <a href="#">Focusable anchor</a> and another <button>Focusable button</button> or <span class="focus:outline" tabindex="0">Focusable span</span>
  </div>
</template>
```

</SourceCode>
::::::

:::::: slot api

::: warning DEPRECATION
Parameter `arrowKeysOn` will be deprecated since version 2.3 and removed in next major version.
:::

## Parameters

| Name      | Type                  | Default value | Description |
| --------- | --------------------- | ------------- | ----------- |
| refElement\* | `ref`    |      | Ref of element that focus trap will be attached              |
| options  | `UseTrapFocusOptions` | `{}`              | Object with multiple options  |

## UseTrapFocus Options

| Name      | Type                  | Default value | Description |
| --------- | --------------------- | ------------- | ----------- |
| trapTabs  | `boolean`    | `true`     | Enable/Disable trap focus on `tab`/`shift + tab`              |
| arrowFocusGroupSelector  | `string`    |      | Selector of specific group when using arrows `left`/`right`, IMPORTANT: all group elements needs to be siblings, options dedicated for slider with many items that has focusable elements inside              |
| activeState  | `Ref<boolean>` | `ref(true)`              | Mount `useTrapFocus` when active is `true`  |
| initialFocus    | `number | 'autofocus' | 'container'` | `0`       | index number of desired focus element on init, `autofocus` for first marked element with attribute `autofocus`, `container` so `refElement` would be initially focused, `false` for disabling this option  |
| arrowKeysOn | `boolean`    | `false`      | (deprecated) Enable/Disable possibility of using keyboard arrows `left`/`right` for jumping through focusable elements              |
| arrowKeysLeftRight | `boolean`    | `false`      | Enable/Disable possibility of using keyboard arrows `left | up`/`right | down` for jumping through focusable elements              |
| arrowKeysUpDown | `boolean`    | `false`      | Enable/Disable possibility of using keyboard arrows `up`/`down` for jumping through focusable elements              |
| initialFocusContainerFallback | `boolean`  | `false`     | Fallback for initial focus           |

## Return value

| Name            | Type           | Default value | Description |
| --------------- | -------------- | ------------- | ----------- |
| current           | `Ref<Element>` |               |  Currently focused element |
| focusables           | `Ref<Element[]>` |               |  All available focusable elements within container |
| focusPrev           | `() => void` |               |  When trigger jumps to previous focusable element |
| focusNext           | `() => void` |               |  When trigger jumps to next focusable element |
| updateFocusableElements | `() => void` |               |  Use when you need to update focusable elements manually |

::::::

::: slot source
<SourceCode>

<<<../../../packages/sfui/frameworks/vue/composables/useTrapFocus/useTrapFocus.ts

</SourceCode>
:::
