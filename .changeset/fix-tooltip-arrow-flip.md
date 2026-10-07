---
'@storefront-ui/react': patch
---

**[FIXED]** `useTooltip` (and `SfTooltip`) now places the arrow on the side facing the trigger after the `flip` middleware moves the tooltip. The arrow side was computed from the requested `placement` instead of the placement Floating UI resolved, so a tooltip flipped from `top` to `bottom` drew its arrow on the far edge. `usePopover` now also returns the resolved `placement`, matching the Vue composable.
