# MegaMenu

The MegaMenu provide a convenient way of high-level navigation to users. By default, it remains hidden to avoid interrupting the user's browsing experience. It can be activated either through a click or hover action, revealing a large drop-down menu on desktop or a side sheet on mobile devices. This expanded menu not only includes a site-map for easy navigation but also incorporates additional elements such as banners.

The MegaMenu is particularly useful for websites that feature multiple levels of navigation and numerous subcategories. It enables users to efficiently explore and access various sections of the website, enhancing their overall browsing experience.

## Accessibility notes

MegaMenu complies with the WCAG guidelines for accessibility for menus and menu bars (keyboard support). Learn more on the [W3C: Menu and Menubar Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) page.

## Base Mega Menu

 When the user clicks on the trigger element (such as one of the menu items), the mega menu opens. On mobile screens, clicking on hamburger button will trigger a drawer opening from the left side with menu content.

<Showcase showcase-name="MegaMenu/BaseMegaMenu" no-paddings style="min-height: 500px;">

::react-only
<<<../../../../preview/next/pages/showcases/MegaMenu/BaseMegaMenu.tsx
::
::vue-only
<<<../../../../preview/nuxt/pages/showcases/MegaMenu/BaseMegaMenu.vue
::

</Showcase>

## Mega Menu with extended navigation

Additional navigation bar under the main header helps to find general categories. User can easily open Mega Menu for each category. When using on mobile devices side drawer provides a nice way of navigating through nested categories.

<Showcase showcase-name="MegaMenu/MegaMenuNavigation" no-paddings style="min-height: 600px;">

::react-only
<<<../../../../preview/next/pages/showcases/MegaMenu/MegaMenuNavigation.tsx
::
::vue-only
<<<../../../../preview/nuxt/pages/showcases/MegaMenu/MegaMenuNavigation.vue
::

</Showcase>
