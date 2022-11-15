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
import <%= VueComponent %> from "../../../frameworks/vue/components/<%= name %>/<%= name %>.vue";
import <%= ReactComponent %> from "../../../frameworks/react/components/<%= name %>/<%= name %>";
import { mount } from '../../utils/mount';
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
      react: <<%= ReactComponent %>> </<%= ReactComponent %>>
    });
  }

  it('initial state', () => {
    initializeComponent();
  });
});
