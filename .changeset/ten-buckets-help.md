---
'@storefront-ui/vue': major
---

- **[FIXED][BREAKING]** From now on, `onClose` callback in `useDropdown` will be triggered only if outside click triggers closing of the dropdown. Previously onClose was also triggered when the dropdown was already closed.
