---
'@storefront-ui/tailwind-config': major
---

- **[BREAKING][CHANGED]** Migrate to Tailwind@4 new configuration syntax. If you're using Tailwind@3, please stick to `@storefront-ui/tailwind-config` in version 2.x.
- **[BREAKING][CHANGED]** Introduce OOTB dark mode handling instead of relying on `@mertasan/tailwindcss-variables` package.
- **[REMOVED]** The `@mertasan/tailwindcss-variables` dependency has been removed as Tailwind support CSS variables out of the box now.
