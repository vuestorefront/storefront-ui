---
to: packages/sfui/frameworks/react/components/<%= name %>/<%= name %>.tsx
force: false
---
import React from 'react';
<% Props = name + 'Props' %>import type { <%= Props %> } from './types';

export default function <%= name %>({
  ...attributes
}: <%= Props %>): React.JSX.Element {
  return (

  );
}
