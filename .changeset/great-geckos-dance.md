---
'@storefront-ui/vue': major
---

- **[CHANGED][BREAKING]** Use `useId` method coming from `vue` package instead of custom implementation. To migrate:
1. Update your `vue` dependency version to at least 3.5.0.
2. Update every `useId` usage as follows:
```diff
-import { useId } from '@storefront-ui/vue';
+import { useId } from 'vue';
```
