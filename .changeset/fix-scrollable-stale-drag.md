---
'@storefront-ui/shared': patch
---

**[FIXED]** `SfScrollable` / `useScrollable` with `drag` enabled no longer repeats the previous drag when the user presses and releases without moving. The drag distance was never reset on `mousedown`, so a plain click after a drag scrolled again and fired `onDragEnd` with the old swipe direction.
