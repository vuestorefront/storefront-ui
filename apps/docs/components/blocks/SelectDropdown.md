---
layout: DefaultLayout
hideBreadcrumbs: true
description: This component is an alternative option for SfSelect component. It doesn't use native select tag to allow more styling customizations.
hideToc: true
---
# Select Dropdown

{{ $frontmatter.description }}

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

## With required text

By adding a sublabel, the user can easily see if this field is required. Remember to add `aria-required` to help users that use assistive technologies.

<Showcase showcase-name="SelectDropdown/SelectDropdownRequired" style="min-height:300px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/SelectDropdown/SelectDropdownRequired.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/SelectDropdown/SelectDropdownRequired.tsx#source
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
