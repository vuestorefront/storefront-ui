---
to: apps/docs/components/.vitepress/theme/index.js
inject: true
skip_if: 'import <%= name %>'
before: "export"
prepend: true
---
import <%= name %> from '../output/blocks/<%= name %>/<%= name %>.vue'