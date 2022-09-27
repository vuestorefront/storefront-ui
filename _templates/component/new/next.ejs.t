---
to: apps/preview/next/pages/examples/<%= name %>.tsx
force: false
---
<%
  Variants = name + 'Variants'
%>
import <%= name %><%= locals.variants ? `, { ${Variants} }` : null %> from '../../output/blocks/<%= name %>/<%= name %>.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';
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
    <div className="e-page">
      <div className="e-page-component">
        <<%= name %>

        >

        </<%= name %>>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
