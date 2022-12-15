/// <reference path="../../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
import VsfListItemFilterRadioVue from "../../../frameworks/vue/components/VsfListItemFilterRadio/VsfListItemFilterRadio.vue";
import VsfListItemFilterRadioReact from "../../../frameworks/react/components/VsfListItemFilterRadio/VsfListItemFilterRadio";
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
