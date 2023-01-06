---
to: packages/sfui/tests/components/<%= name %>/<%= name %>.cy.tsx
force: false
---
<%
  PageObject = name + 'BaseObject'
  VueComponent = name + 'Vue'
  ReactComponent = name + 'React'
%>/// <reference path="../../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
// import vue
import <%= VueComponent %> from "../../../frameworks/vue/components/<%= name %>/<%= name %>.vue";
// end import vue
// import react
import <%= ReactComponent %> from "../../../frameworks/react/components/<%= name %>/<%= name %>";
// end import react

import { mount, Wrapper } from '../../utils/mount';
import <%= PageObject %> from "./<%= name %>.PageObject";

describe("<%= name %>", () => {
  const page = () => new <%= PageObject %>('');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: <%= VueComponent %>,
        props: {

        },
      },
      react: <Wrapper
        component={<%= ReactComponent %>}
      > </Wrapper>
    });
  }

  it('initial state', () => {
    initializeComponent();
  });
});
