---
layout: DefaultLayout
hideBreadcrumbs: true
description: The SelectDropdown is a visually customized version of the Select component, eliminating the reliance on the native "select" HTML tag.
hideToc: true
---
# Select Dropdown

The SelectDropdown is a visually customized version of the Select component, eliminating the reliance on the native "select" HTML tag. Despite the stylistic changes, the functionality of the component remains unchanged, allowing users to make a single selection from a dropdown list. The input can be marked as required and may include hints or additional information.

Please note that the example block provided can also serve as a base component, offering flexibility for implementation within the project based on specific requirements and design considerations.

::: read-more
If you need to make this field required, it is crucial to communicate this intention clearly to your end users. You can find more information about [required form fields in our guide here](../blocks/FormFields.html).
:::

## Accessibility notes

The SelectDropdown fully supports the use of the keyboard.

## Basic usage

Select Dropdown with preselected option.

<Showcase showcase-name="SelectDropdown/SelectDropdownPreselected" style="min-height:300px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/SelectDropdown/SelectDropdownPreselected.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/SelectDropdown/SelectDropdownPreselected.tsx#source
<!-- end react -->

</Showcase>

## With placeholder

Adding placeholder might be helpful and informative for end users.

<Showcase showcase-name="SelectDropdown/SelectDropdownWithPlaceholder" style="min-height:300px">
<!-- vue -->
<<<../../preview/nuxt/pages/showcases/SelectDropdown/SelectDropdownWithPlaceholder.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/SelectDropdown/SelectDropdownWithPlaceholder.tsx#source
<!-- end react -->
</Showcase>

## Invalid state

Provide visual cues for end users to indicate occuring error.

<Showcase showcase-name="SelectDropdown/SelectDropdownError" style="min-height:300px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/SelectDropdown/SelectDropdownError.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/SelectDropdown/SelectDropdownError.tsx#source
<!-- end react -->

</Showcase>

## Disabled state

Differentiate disabled state to smooth UX experience. In such case, keyboard navigation becomes disabled as well and an `aria-disabled="true"` is specified for better accessibility.

<Showcase showcase-name="SelectDropdown/SelectDropdownDisabled" style="min-height:300px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/SelectDropdown/SelectDropdownDisabled.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/SelectDropdown/SelectDropdownDisabled.tsx#source
<!-- end react -->

</Showcase>
