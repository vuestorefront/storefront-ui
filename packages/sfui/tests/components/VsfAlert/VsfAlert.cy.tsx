/// <reference path="../../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
import VsfAlertVue from "../../../frameworks/vue/components/VsfAlert/VsfAlert.vue";
import VsfAlertReact from "../../../frameworks/react/components/VsfAlert/VsfAlert";
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
