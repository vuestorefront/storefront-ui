export default defineNuxtRouteMiddleware((to, from) => {
  const framework = useCookie<{ name: string; icon: string }>('framework', {
    default: () => ({
      name: 'vue',
      icon: 'logos:vue',
    }),
  });
  if (to.path === '/getting-started') {
    return navigateTo('/getting-started/' + framework.value.name);
  }
});
