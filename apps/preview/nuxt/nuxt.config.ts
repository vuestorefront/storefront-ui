const defineNuxtConfig = require('nuxt').defineNuxtConfig;
const tailwindConfig = require('@sfui/tailwind-config/index.json');

export default defineNuxtConfig({
    tailwindcss: {
        config: tailwindConfig
    },
    buildModules: ["@nuxtjs/tailwindcss"],
    content: [
        "./components/**/*.{js,vue,ts}",
        "./**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    css: [
        '~/assets/tailwind.scss',
        '@sfui/example-style/index.scss'
    ],
});
