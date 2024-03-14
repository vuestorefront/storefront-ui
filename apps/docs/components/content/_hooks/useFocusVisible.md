# useFocusVisible

::tabs{:titles='["Usage", "API", "Source Code"]'}

#tab-1

`useFocusVisible` helps you determine whether keyboard focus is visible globally. Sometimes standard `:focus-visible` pseudo-class is not enough. In some cases, you may want to style a wrapper element based on nested input. You can't fully rely on `:has()` pseudo-class yet, as it is still not fully [supported](https://developer.mozilla.org/en-US/docs/Web/CSS/:has#browser_compatibility).

## Input default behaviour

Most browsers implements `:focus-visible` pseudo-class to activate on every focus event. It means by default your inputs would get focus ring even if you set them only on focus visible and disabled them on focus. You can see the difference in the example below. Try to focus both inputs using mous and using tab. First input will get focus ring no matter if you click or tab on it, while the second one will get the focus ring only when using tab.

<Showcase showcase-name="useFocusVisible/InputWithFocusVisible">

::react-only
<<<../../../../preview/next/pages/showcases/useFocusVisible/InputWithFocusVisible.tsx#source
::
::vue-only
<<<../../../../preview/nuxt/pages/showcases/useFocusVisible/InputWithFocusVisible.vue
::

</Showcase>

#tab-2

## Parameters

| Name        | Type      | Default value | Description                               |
| ----------- | --------- | ------------- | ----------------------------------------- |
| isTextInput | `boolean` | false         | Whether the element is a text input.      |
| autoFocus   | `boolean` | false         | Whether the element will be auto focused. |

## Return value

| Name           | Type      | Default value | Description                                 |
| -------------- | --------- | ------------- | ------------------------------------------- |
| isFocusVisible | `boolean` |               | Whether keyboard focus is visible globally. |

#tab-3



::react-only
<<<../../../../../packages/sfui/frameworks/react/hooks/useFocusVisible/useFocusVisible.ts
::
::vue-only
<<<../../../../../packages/sfui/frameworks/vue/composables/useFocusVisible/useFocusVisible.ts
::



::
