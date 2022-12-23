---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Breadcrumbs component

A breadcrumb trail consists of a list of links to the parent pages of the current page in hierarchical order. It helps users find their place.

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=10745%3A9636)


<!-- vue -->
## Props

| Prop name   | Type    | Default value | Possible values                        |
| ----------- | ------- | ------------- | -------------------------------------- |
| breadcrumbs | Array   | []            |                                        |
| withIcon    | Boolean | false         |                                        |
| slotIcon    | Boolean | false         |                                        |

## Slots

| Slot name |            Description            |
| --------- | :-------------------------------: |
| icon      |     replaces the default icon     |
      
<!-- end vue -->

<!-- react -->
## Props

| Prop name   | Type    | Default value | Possible values                        |
| ----------- | ------- | ------------- | -------------------------------------- |
| breadcrumbs | Array   | []            |                                        |
| withIcon    | Boolean | false         |                                        |

<!-- end react -->


## Events

| Event name |            Trigger             |
| ---------- | :----------------------------: |
|            |                                |

## Accessibility notes

The Breadcrumbs component uses `aria-label`to indicate navigation type and page.

## Source code
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfBreadcrumbs/VsfBreadcrumbs.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfBreadcrumbs/VsfBreadcrumbs.tsx
<!-- end react -->

