const defineNuxtConfig = require('nuxt').defineNuxtConfig;
const tailwindConfig = require('@sfui/tailwind-config/index.json');

export default defineNuxtConfig({
    tailwindcss: {
        config: tailwindConfig,
        cssPath: '~/assets/tailwind.scss',         
    },
    buildModules: ["@nuxtjs/tailwindcss"],    
    css: [
        '@sfui/example-style/index.scss'
    ],   
});
