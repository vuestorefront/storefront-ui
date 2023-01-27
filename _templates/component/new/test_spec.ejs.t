---
to: packages/tests/components/<%= name %>/<%= name %>.cy.tsx
force: false
---
<%
  PageObject = name + 'BaseObject'
  VueComponent = name + 'Vue'
  ReactComponent = name + 'React'
%>/// <reference path="../../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
import { mount, Wrapper, useComponent } from '../../utils/mount';

const { vue: <%= VueComponent %>, react: <%= ReactComponent %> } = useComponent('<%= name %>');
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
