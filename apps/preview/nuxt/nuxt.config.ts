const defineNuxtConfig = require('nuxt').defineNuxtConfig;
const tailwindConfig = require('@sfui/tailwind-config/index.json');

export default defineNuxtConfig({
    postcss: {
        plugins: {
            tailwindcss: {
                config: tailwindConfig
            },
            autoprefixer: {},
        }
    },
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    css: [
        '~/assets/tailwind.scss',
        '@sfui/example-style/index.scss'
    ],
});
