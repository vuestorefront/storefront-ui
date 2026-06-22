---
'@storefront-ui/vue': patch
---

**[FIXED]** `useFocusVisible` no longer leaks event listeners in SSR environments by moving `setupGlobalFocusEvents` and the `watch` handler inside `onMounted`.
