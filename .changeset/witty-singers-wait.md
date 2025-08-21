---
'@storefront-ui/tailwind-config': major
---

- **[BREAKING][CHANGED]** The default color palette for `primary`, `neutral` and `secondary` colors. Copy [old color palette](https://github.com/vuestorefront/storefront-ui/blob/8b35d6507ee3ae93538539400947e2f86d0c5529/packages/config/tailwind/index.ts#L360-L381) to your local `tailwind.config.js` if you need to keep some of them.
  Also, now the palette is converted from rgb to oklch colors to [fit with tailwind 4](https://tailwindcss.com/blog/tailwindcss-v4#modernized-p3-color-palette).
