---
to: packages/sfui/tests/components/<%= name %>/<%= name %>.PageObject.tsx
force: false
---
<%
  PageObject = name + 'BaseObject'
%>import { BasePage } from '../../utils/BasePage';

export default class <%= PageObject %> extends BasePage {
}
