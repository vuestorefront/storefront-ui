import { createApp } from 'vue';
import App from './App.vue'
// import VueRouter from 'vue-router'
import "@storefront-ui/vue/styles.scss";

const app = createApp(App)
// app.use(VueRouter)

app.mount('#app')
