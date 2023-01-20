<template>
  <div class="w-full custom-block grid grid-cols-12 gap-6 text-gray-500 font-light">
    <RouterLink
      class="hover:-translate-y-1 hover:shadow-md transition-all col-span-12 md:col-span-4 p-4 rounded border bg-[#e8faff]"
      style="background-color: #e8faff"
      to="/react/components.html"
    >
      <iconify-icon icon="logos:react" height="48" />
      <h3 class="mt-2 font-bold text-lg dark:text-black">React</h3>
      <p class="mt-2">Fully accessible UI components, designed to integrate beautifully with Tailwind CSS and React.</p>
    </RouterLink>
    <RouterLink
      class="hover:-translate-y-1 hover:shadow-md transition-all col-span-12 md:col-span-4 p-4 rounded border"
      style="background-color: #e3f5ed"
      to="/vue/components.html"
    >
      <iconify-icon icon="logos:vue" height="48" />
      <h3 class="mt-2 font-bold dark:text-black">Vue</h3>
      <p class="mt-2">Fully accessible UI components, designed to integrate beautifully with Tailwind CSS and Vue.</p>
    </RouterLink>
    <a
      :href="$themeConfig.FIGMA_URL"
      class="hover:-translate-y-1 hover:shadow-md transition-all col-span-12 md:col-span-4 p-4 rounded border"
      style="background-color: #ffeae8"
      target="_blank"
    >
      <iconify-icon icon="logos:figma" height="48" />
      <h3 class="mt-2 font-bold text-lg dark:text-black">Figma</h3>
      <p class="mt-2">
        Fully customizable UI components and design tokens ready for rapid prototyping and creating complex projects.
      </p>
    </a>
  </div>
</template>

<script></script>
