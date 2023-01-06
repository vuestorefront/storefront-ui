/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
// import vue
import VsfListItemFilterRadioVue from "../../../sfui/frameworks/vue/components/VsfListItemFilterRadio/VsfListItemFilterRadio.vue";
// end import vue
// import react
import VsfListItemFilterRadioReact from "../../../sfui/frameworks/react/components/VsfListItemFilterRadio/VsfListItemFilterRadio";
// end import react

import { mount } from '../../utils/mount';
import VsfListItemFilterRadioBaseObject from "./VsfListItemFilterRadio.PageObject";

describe("VsfListItemFilterRadio", () => {
  const page = () => new VsfListItemFilterRadioBaseObject('');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfListItemFilterRadioVue,
        props: {

        },
      },
      react: <VsfListItemFilterRadioReact> </VsfListItemFilterRadioReact>
    });
  }

  it('initial state', () => {
    initializeComponent();
  });
});
