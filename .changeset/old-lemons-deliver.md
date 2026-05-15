---
"@storefront-ui/react": patch
"@storefront-ui/vue": patch
---

[CHANGED] `SfScrollable` now uses `twMerge` instead of `classNames` to compose CSS classes, so Tailwind classes passed via `className`/`class`, `wrapperClassName`/`wrapperClass`, and `classNameButton` props now correctly override the component's built-in classes without needing the `!` (important) modifier.
