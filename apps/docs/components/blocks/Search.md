---
layout: DefaultLayout
hideBreadcrumbs: true
description: The Search is a specialized input field designed for text-based searching on a website.
hideToc: true
---

# Search

The Search is a specialized input field designed for text-based searching on a website. In the provided example, the block includes an additional feature that displays live hints suggestions (autocomplete) as the user types.

The Search input is primarily utilized in the global navigation (see NavBarTop block). However, variants without autocomplete functionality are commonly employed on results pages.

## Accessibility notes

The Search fully supports the use of the keyboard. The transition from the search input to the hints list is handled by Tab key.

## Basic search

Simple search with an autocomplete functionality. Give your users hints of what they may look for. In this example we use mock autocomplete example, make sure you provide real data.

<Showcase showcase-name="Search/SearchBasic" style="min-height: 350px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Search/SearchBasic.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Search/SearchBasic.tsx#source
<!-- end react -->

</Showcase>

## Search with custom icon

This block enhances search functionality with a custom icon and categorized result suggestions.

<Showcase showcase-name="Search/SearchWithIcon" style="min-height: 500px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Search/SearchWithIcon.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Search/SearchWithIcon.tsx#source
<!-- end react -->

</Showcase>

## Search with custom button

This block enhances search functionality with a custom button, categorized result suggestions and thumbnails.

<Showcase showcase-name="Search/SearchWithButton" style="min-height: 500px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Search/SearchWithButton.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Search/SearchWithButton.tsx#source
<!-- end react -->

</Showcase>
