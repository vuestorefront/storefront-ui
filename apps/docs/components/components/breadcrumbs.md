---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Breadcrumbs

A breadcrumb trail consists of a list of links to the parent pages of the current page in hierarchical order. It helps users find their place.

<Generate />


## Props

| Prop name   | Type    | Default value | Possible values                        |
| ----------- | ------- | ------------- | -------------------------------------- |
| breadcrumbs | Array   | []            |                                        |
| withIcon    | Boolean | false         |                                        |
<!-- react -->
| slotIcon    | ReactNode | undefined         |                                        |
<!-- end react -->
| ariaLabelHomeIcon    | String |       |                                        |
| ariaLabelHomeButton    | String |       |                                        |

<!-- vue -->
## Slots

| Slot name |            Description            |
| --------- | :-------------------------------: |
| icon      |     replaces the default icon     |

<!-- end vue -->

## Accessibility notes

The Breadcrumbs component uses `aria-label`to indicate navigation type and page.

## Source code
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfBreadcrumbs/VsfBreadcrumbs.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfBreadcrumbs/VsfBreadcrumbs.tsx
<!-- end react -->

