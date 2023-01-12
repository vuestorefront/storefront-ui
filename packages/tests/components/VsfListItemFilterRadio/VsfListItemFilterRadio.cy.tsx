/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
import { mount, useComponent } from '../../utils/mount';

const { vue: VsfListItemFilterRadioVue, react: VsfListItemFilterRadioReact } = await useComponent('VsfListItemFilterRadio');
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
