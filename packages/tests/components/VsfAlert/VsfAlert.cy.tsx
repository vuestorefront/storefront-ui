/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
// import vue
import VsfAlertVue from "../../../sfui/frameworks/vue/components/VsfAlert/VsfAlert.vue";
// end import vue
// import react
import VsfAlertReact from "../../../sfui/frameworks/react/components/VsfAlert/VsfAlert";
// end import react

import { mount } from '../../utils/mount';
import VsfAlertBaseObject from "./VsfAlert.PageObject";

describe("VsfAlert", () => {
  const page = () => new VsfAlertBaseObject('');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfAlertVue,
        props: {

        },
      },
      react: <VsfAlertReact> </VsfAlertReact>
    });
  }

  it('initial state', () => {
    initializeComponent();
  });
});
