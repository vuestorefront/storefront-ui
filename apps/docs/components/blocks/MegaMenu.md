---
layout: DefaultLayout
hideBreadcrumbs: true
description: Mega menu is a type of website navigation menu that typically displays a list of links and subcategories in a larger, more complex format than a traditional drop-down or fly-out menu. 
---
# MegaMenu

{{ $frontmatter.description }}

## Accessibility notes

MegaMenu follows the accessibility guidelines for menus and menubars by WCAG [Read more](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/).

## Base Mega Menu

 When the user clicks on the trigger element (such as one of the menu items), the mega menu opens. On mobile screens, clicking on hamburger button will trigger a drawer opening from the left side with menu content.

<Showcase showcase-name="MegaMenu/BaseMegaMenu" style="min-height: 500px;">

<!-- react -->
<<<../../preview/next/pages/showcases/MegaMenu/BaseMegaMenu.tsx#source
<!-- end react -->
<!-- vue -->
<<<../../preview/nuxt/pages/showcases/MegaMenu/BaseMegaMenu.vue
<!-- end vue -->

</Showcase>

## Mega Menu with extended navigation

Additional navigation bar under the main header helps to find general categories. User can easily open Mega Menu for each category. When using on mobile devices side drawer provides a nice way of navigating through nested categories.

<Showcase showcase-name="MegaMenu/MegaMenuNavigation" style="min-height: 600px;">

<!-- react -->
<<<../../preview/next/pages/showcases/MegaMenu/MegaMenuNavigation.tsx#source
<!-- end react -->
<!-- vue -->
<<<../../preview/nuxt/pages/showcases/MegaMenu/MegaMenuNavigation.vue
<!-- end vue -->

</Showcase>
