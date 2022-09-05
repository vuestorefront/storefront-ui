---
to: apps/mitosis/src/blocks/<%= name %>/<%= name %>.lite.tsx
force: false
---
<%
 Props = name + 'Props'
 Variants = name + 'Variants'
 VariantsKeys = name + 'VariantsKeys'
%>
import { useStore } from "@builder.io/mitosis";

<% if(locals.variants){ -%>
export const <%= Variants %>  = Object.freeze({

});
type <%= VariantsKeys %>  = keyof typeof <%= Variants %>;

<% } -%>

export interface <%= Props %> {

}

const DEFAULT_VALUES = {

}

export default function <%= name %>(props: <%= Props %>) {
  const state = useStore({

  });

  return (
    <>
    
    </>
  )
}