---
'@storefront-ui/shared': patch
---

**[FIXED]** `SfScrollable` / `useScrollable` with `direction="vertical"` and `drag={{ containerWidth: true }}` now scrolls by one container height when dragged. The vertical branch wrote to `scrollLeft` (starting from the horizontal drag origin) instead of `scrollTop`, so a vertical drag never moved the content.
