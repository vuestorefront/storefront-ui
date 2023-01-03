---
to: apps/preview/nuxt/pages/examples/<%= name %>.vue
force: false
---
<%
  Variants = name + 'Variants'
  PageName = name + 'Example'
%>
<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <<%= name %>

    >
    </<%= name %>>
  </ComponentExample>
</template>

<script>
import { ref } from 'vue';
import <%= name %><%= locals.variants ? `, { ${Variants} }` : null %> from '@storefront-ui/vue/components/<%= name %>/<%= name %>.vue'
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: '<%= PageName %>',
  components: {
    ComponentExample,
    <%= name %>
  },
  setup() {
    return {
      ...prepareControls([
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
        variantModel: ref()
      })
    }
  }
};
</script>
