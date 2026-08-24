---
'@storefront-ui/tailwind-config': patch
---

**[FIXED]** `animate-spin-slow` (used by `SfLoaderCircular`) rotates again. The Tailwind 4 theme references a `spin-slow` keyframe that was never migrated from the Tailwind 3 JS theme (where it aliased the built-in `spin`), so the loader stopped rotating. The missing `@keyframes spin-slow` is now defined.
