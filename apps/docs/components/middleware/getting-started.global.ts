export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === '/getting-started') {
    console.log('going now...');
    const { selectedFramework } = useFramework();
    return navigateTo('/getting-started/' + selectedFramework.value.name);
  }
});
