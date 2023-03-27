---
layout: HomeLayout
tabOptions: [vue,react]
hideBreadcrumbs: true
---

<div class="grid grid-cols-2 custom-block mt-16 gap-8">
  <div class="col-span-2 lg:col-span-1 flex justify-center flex-col order-2 lg:order-1">
    <div class="flex flex-wrap mb-2">
        <!-- Place this tag where you want the button to render. -->
        <a class="github-button" href="https://github.com/vuestorefront/storefront-ui" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star buttons/github-buttons on GitHub">Star the Project</a>
    </div>
    <h1 class="text-5xl font-extrabold mt-4">Storefront UI</h1>
    <p class="text-xl mt-4">Fast, accessible, and fully customizable components built for e-commerce.</p>
    <div class="mt-8 flex items-center">
      <RouterLink to="/vue/getting-started.html" class=" px-4  py-2 rounded-lg  font-medium bg-green text-white  flex items-center filter hover:brightness-110 transition-all">
        Install for Vue
        <iconify-icon icon="mingcute:arrow-right-fill" height="14px" class="ml-2"/>
      </RouterLink>
      <RouterLink to="/react/getting-started.html" class=" px-4  py-2 rounded-lg  font-medium bg-react ml-2 text-black text-opacity-80 flex items-center filter hover:brightness-110 transition-all">
        Install for React
        <iconify-icon icon="mingcute:arrow-right-fill" height="14px" class="ml-1"/>
      </RouterLink>
    </div>
  </div>
  <div class="col-span-2 lg:col-span-1 order-1 lg:order-2">
    <img src='./assets/sfui-hero.png' class=' mx-auto max-w-xs sm:max-w-md'/>
  </div>
</div>

:::::: slot vue

::: read-more
If you're using Storefront UI 1, you can find that documentation at [https://storefrontui.io/v1](https://storefrontui.io/v1).
:::

## Base Components

Beautiful, fast, and fully accessible components that integrate with Tailwind CSS to help you quickly build more complex structures.

<ComponentList framework="vue" type="components" hide-description />

## Composables 

Complex UI logic is extracted into composables, which you can use to build your own custom components.

<ComponentList framework="vue" type="hooks" hide-thumbnail  />


::::::

::: slot react

## Base Components

Beautiful, fast, and fully accessible components that integrate with Tailwind CSS to help you quickly build more complex structures.

<ComponentList framework="react" type="components" hide-description />

## Hooks

Complex UI logic is extracted into hooks, which you can use to build your own custom components.

<ComponentList framework="react" type="hooks" hide-thumbnail/>

:::