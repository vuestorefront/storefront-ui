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
