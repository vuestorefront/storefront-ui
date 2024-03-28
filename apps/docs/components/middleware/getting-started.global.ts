export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === '/getting-started') {
    const { selectedFramework } = useFramework();
    return navigateTo('/getting-started/' + selectedFramework.value.name);
  }
});
