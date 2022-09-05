---
to: apps/preview/nuxt/pages/examples/<%= name %>.vue
force: false
---
<%
  Variants = name + 'Variants'
  PageName = name + 'Example'
%>
<template>
  <div class="e-page">
    <div class="e-page-component">
      <<%= name %>

      >
      </<%= name %>>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs"/>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import <%= name %><%= locals.variants ? `, { ${Variants} }` : null %> from '../../output/blocks/<%= name %>/<%= name %>.vue'
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default {
  name: '<%= PageName %>',
  components: {
    Controls,
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
