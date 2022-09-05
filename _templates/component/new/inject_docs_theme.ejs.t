---
to: apps/docs/components/.vitepress/theme/index.js
inject: true
skip_if: 'app.component(.*, <%= name %>)'
after: "enhanceApp"
append: true
---
<%
  DocsName = name.replace('Vsf', '')
%>
app.component('<%= DocsName %>', <%= name %>),