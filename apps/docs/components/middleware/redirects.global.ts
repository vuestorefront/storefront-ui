export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === '/getting-started') {
    const { selectedFramework } = useFramework();
    return navigateTo('/getting-started/' + selectedFramework.value.name);
  }
  let path = to.path;

  // remove framework (vue/react) from paths for customization
  if (path.includes('/customization') || path.includes('/browser-support') || path.includes('components.html') || path.includes('blocks.html') || path.includes('hooks.html')) {
    path = path.replace('/vue', '').replace('/react', '');
  }
  if (path.includes('.html')) {
    return navigateTo(path.replace('.html', '').toLowerCase());
  }
});
