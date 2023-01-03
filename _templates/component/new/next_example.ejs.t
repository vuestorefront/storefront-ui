---
to: apps/preview/next/pages/examples/<%= name %>.tsx
force: false
---
<%
  Variants = name + 'Variants'
%>
import <%= name %><%= locals.variants ? `, { ${Variants} }` : null %> from '@storefront-ui/react/components/<%= name %>/<%= name %>';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

const Example = () => {
  const { state, controls } = prepareControls([
    <% if(locals.variants){ -%>
    {
      title: 'Variant',
      type: 'select',
      modelName: 'variantModel',
      options: Object.keys(<%= Variants %>),
      propDefaultValue: <%= Variants %>.base,
      propType: '<%= Variants %>'
    },
    <% } -%>
  ], {
    <% if(locals.variants){ -%>
    variantModel: ''
    <% } -%>
  });

  return (
    <ComponentExample controls={{ state, controls }}>
      <<%= name %>

      >

      </<%= name %>>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
