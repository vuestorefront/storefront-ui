---
to: apps/docs/components/.vitepress/config.js
inject: true
skip_if: <%= name.replace('Vsf', '').toLowerCase() %>
after: "sidebar[\\w-\\s\\n,'/\\[\\]\\{\\}:]+Components[\\w:\\[\\s\\n,'/]+items:\\s*\\["
---
<%
  DocsName = name.replace('Vsf', '')
%>
{ text: '<%= DocsName %>', link: '/components/<%= h.changeCase.lower(DocsName) %>' },