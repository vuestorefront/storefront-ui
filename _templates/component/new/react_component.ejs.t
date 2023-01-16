---
to: packages/sfui/frameworks/react/components/<%= name %>/<%= name %>.tsx
force: false
---
<% Props = name + 'Props' %>import type { <%= Props %> } from './types';

export default function <%= name %>({
  ...attributes
}: <%= Props %>): JSX.Element {
  return (

  );
}
