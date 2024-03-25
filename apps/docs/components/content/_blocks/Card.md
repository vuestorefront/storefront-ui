# Card

The Card component contains content and actions that inform about a single subject.

## Default Card

The default card view with a rectangle shaped image, a title, a description and a button for some additional actions.

::tip
This block contain empty `anchor` element, this specific manipulation adds possibility to navigate with `tab` through whole card. With this structure we can click buttons inside or whole card itself. If root card element would be `anchor` element, we would not have possibility to click `button` inside.
::

<Showcase showcase-name="Card/CardDefault" style="min-height: 600px">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Card/CardDefault.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Card/CardDefault.tsx
::

</Showcase>

## Category Card

The category card view with a circle shaped image, and category title, clickable as the one element.

<Showcase showcase-name="Card/CategoryCard" style="min-height: 400px;">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Card/CategoryCard.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Card/CategoryCard.tsx
::

</Showcase>

## Card Feature

This type of card has only button to interact.

<Showcase showcase-name="Card/CardFeature" style="min-height: 600px">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Card/CardFeature.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Card/CardFeature.tsx
::

</Showcase>
